import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Thoughts from "./components/body";
import { useReducer, useRef, useState } from "react";
import Write from "./components/write";
import MyThoughts from "./components/myThoughts";
import Profile from "./components/profile";
import { Routes, Route } from "react-router-dom";
import { ItemsContext } from "./store/item";
import ItemContextProvider from "./store/item";

function App() {
  // const [data, setData] = useState(initialData);
  // const handleDataAdd = (key, name, content) => {
  //   console.log("Came into function", key, name, content)
  //   const newData = [...initialData, {
  //     id: key,
  //     title: name,
  //     content: content,
  //   }]
  //   setData(newData);
  // }

  const [homestate, sethomeState] = useState("Home");

  return (
    <>
      <ItemContextProvider>
        <Header homeState={homestate} setHomeState={sethomeState}></Header>
        <Routes>
          <Route path="/" element={<Thoughts />} />
          <Route path="/write" element={<Write />} />
          <Route path="/mythoughts" element={<MyThoughts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </ItemContextProvider>
    </>
  );
}

export default App;
