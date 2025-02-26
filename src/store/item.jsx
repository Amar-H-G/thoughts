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
  // const initialData = [
  //   {
  //     id: 1,
  //     title: "Patra",
  //     content:
  //       "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. ",
  //   },
  //   {
  //     id: 2,
  //     title: "Patra",
  //     content:
  //       "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   },
  //   {
  //     id: 3,
  //     title: "Patra",
  //     content:
  //       "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   },
  //   {
  //     id: 4,
  //     title: "Patra",
  //     content:
  //       "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   },
  // ];

  const [data, dispatchData] = useReducer(reducerFunction, []);
  const addInitialFetch = (posts) => {
    const fetchItemAction = {
      type: "ADD-INITIAL-POSTS",
      payload: {
        posts,
      },
    };
    dispatchData(fetchItemAction);
  };
  const newItemAdd = (key, itemName, itemContent) => {
    const newItemAction = {
      type: "ADD",
      payload: {
        itemName,
        itemContent,
        key,
      },
    };
    dispatchData(newItemAction);
  };


  return <ItemsContext.Provider value={{ data, newItemAdd, addInitialFetch }}>
    {children}
  </ItemsContext.Provider>
};
export default ItemContextProvider;
