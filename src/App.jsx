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
  const [homestate, sethomeState] = useState("Home");

  return (
    <>
      <Header homeState={homestate} setHomeState={sethomeState}></Header>
      <Routes>
        {homestate === "Home" && <Route path="/" element={<Thoughts />} />}
        {homestate === "write" && <Route path="/write" element={<Write />} />}
        {homestate === "myThought" && <Route path="/mythoughts" element={<MyThoughts />} />}
        {homestate === "profile" && <Route path="/profile" element={<Profile />} />}
      </Routes>
    </>
  )
}

export default App
