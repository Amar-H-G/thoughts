import { createContext } from "react";
import { useReducer } from "react";

const reducerFunction = (initialData, action) => {
  let newCurrentData = initialData;
  if (action.type === "ADD") {
    newCurrentData = [
      ...initialData,
      {
        id: action.payload.key,
        title: action.payload.itemName,
        content: action.payload.itemContent,
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
  newItemAdd: () => { },
  addInitialFetch: () => { },
});

const ItemContextProvider = ({ children }) => {
  const initialData = [];

  const [data, dispatchData] = useReducer(reducerFunction, initialData);
  const addInitialFetch = (posts) => {
    const fetchItemAction = {
      type: "ADD-INITIAL-POSTS",
      payload: {
        posts,
      },
    };
    dispatchData(fetchItemAction);
  };
  const newItemAdd = (itemName, itemContent) => {
    const newItemAction = {
      type: "ADD",
      payload: {
        key: Date.now(),
        itemName,
        itemContent,
        reactions: { likes: 0, dislikes: 0 },
        views: 0,
        tags: []
      },
    };
    dispatchData(newItemAction);
  };


  return <ItemsContext.Provider value={{ data, newItemAdd, addInitialFetch }}>
    {children}
  </ItemsContext.Provider>
};
export default ItemContextProvider;

