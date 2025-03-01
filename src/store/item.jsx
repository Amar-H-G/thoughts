import { createContext } from "react";
import { useReducer, useState, useEffect } from "react";

const reducerFunction = (initialData, action) => {

  let newCurrentData = initialData;
  if (action.type === "ADD") {
    newCurrentData = [
      ...initialData,
      {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        userId: action.payload.userId,
        tags: action.payload.tags,
        reactions: action.payload.reactions || { likes: 0, dislikes: 0 },
      },
    ];
  }
  else if (action.type === "ADD-INITIAL-POSTS") {
    newCurrentData = action.payload.posts;
  }
  return newCurrentData;
};

export const ItemsContext = createContext({
  data: [],
  fetching: false,
  newItemAdd: () => { },
});

const ItemContextProvider = ({ children }) => {
  const [data, dispatchData] = useReducer(reducerFunction, []);
  const [fetching, setFetching] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;



  const addInitialFetch = (posts) => {
    const fetchItemAction = {
      type: "ADD-INITIAL-POSTS",
      payload: {
        posts,
      },
    };
    dispatchData(fetchItemAction);
  };
  const newItemAdd = (post) => {
    const newItemAction = {
      type: "ADD",
      payload: post,
    };
    dispatchData(newItemAction);
  };


  useEffect(() => {
    setFetching(true);
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addInitialFetch(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    }
  }, []
  );



  return <ItemsContext.Provider value={{ data, fetching, newItemAdd }}>
    {children}
  </ItemsContext.Provider>
};
export default ItemContextProvider;

