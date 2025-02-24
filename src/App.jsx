import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./components/header";
import Thoughts from "./components/body";
import { useState } from "react";
import Write from "./components/write"
import MyThoughts from "./components/myThoughts"
import Profile from "./components/profile";
import { Routes, Route } from "react-router-dom";

function App() {

  const initialData = [
    {
      id: '1',
      title: "Patra",
      content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    }, {
      id: '2',
      title: "Patra",
      content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    }, {
      id: '3',
      title: "Patra",
      content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    }, {
      id: '4',
      title: "Patra",
      content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ]

  const [data, setData] = useState(initialData);
  const handleDataAdd = (name, content) => {
    const newData = [...initialData, {
      title: name,
      content: content,
    },]
    setData(newData);
  }

  const [homestate, sethomeState] = useState("Home");

  return (
    <>
      <Header homeState={homestate} setHomeState={sethomeState}></Header>
      <Routes>
        <Route path="/" element={<Thoughts data={data} />} />
        <Route path="/write" element={<Write newItemAdd={handleDataAdd} />} />
        <Route path="/mythoughts" element={<MyThoughts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </>
  )
}

export default App
