import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./components/header";
import Thoughts from "./components/body";
import { useRef, useState } from "react";
import Write from "./components/write"
import MyThoughts from "./components/myThoughts"
import Profile from "./components/profile";
import { Routes, Route } from "react-router-dom";
import { ItemsContext } from "./store/item";

function App() {

  const initialData = [
    {
      id: 1,
      title: "Patra",
      content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. ",
    }, {
      id: 2,
      title: "Patra",
      content: "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    }, {
      id: 3,
      title: "Patra",
      content: "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    }, {
      id: 4,
      title: "Patra",
      content: "This is a longer card with supporting text below as a natural lead-in to additional content. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ]

  const [data,setData] = useState(initialData);
  const handleDataAdd = (key, name, content) => {
    console.log("Came into function",key,name,content)
    const newData = [...initialData, {
      id: key,
      title: name,
      content: content,
    }]
    setData(newData);
  }

  // <Route path="/write" element={<Write newItemAdd={handleDataAdd} />} />

  const [homestate, sethomeState] = useState("Home");

  return (
    <><ItemsContext.Provider value={{ data, handleDataAdd }}>
      <Header homeState={homestate} setHomeState={sethomeState}></Header>
      <Routes>
        <Route path="/" element={<Thoughts />} />
        <Route path="/write" element={<Write />} />
        <Route path="/mythoughts" element={<MyThoughts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes></ItemsContext.Provider>
    </>
  )
}

export default App
