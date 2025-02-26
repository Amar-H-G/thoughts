import { createContext } from "react";
import { useReducer } from "react";

// const InitialData = [
//   {
//     id: 1,
//     title: "Patra",
//     content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. ",
//   }, {
//     id: 2,
//     title: "Patra",
//     content: "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//   }, {
//     id: 3,
//     title: "Patra",
//     content: "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//   }, {
//     id: 4,
//     title: "Patra",
//     content: "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//   },
// ]

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
  return newCurrentData;
};

export const ItemsContext = createContext({
  data: [],
  newItemAdd: () => { },
});

const ItemContextProvider = ({ children }) => {
  const initialData = [
    {
      id: 1,
      title: "Patra",
      content:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. ",
    },
    {
      id: 2,
      title: "Patra",
      content:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 3,
      title: "Patra",
      content:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 4,
      title: "Patra",
      content:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];

  const [data, dispatchData] = useReducer(reducerFunction, initialData);
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
  return <ItemsContext.Provider value={{ data, newItemAdd }}>
    {children}
  </ItemsContext.Provider>
};
export default ItemContextProvider;
