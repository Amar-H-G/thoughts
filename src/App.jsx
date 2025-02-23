import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./components/header";
import Thoughts from "./components/body";
import { useState } from "react";
import Write from "./components/write"
import MyThoughts from "./components/myThoughts"
import Profile from "./components/profile";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  const [homestate, sethomeState] = useState("Home");

  return (
    <>
      <Header homeState={homestate} setHomeState={sethomeState}></Header>
      <Routes>
        <Route path="/" element={<Thoughts />} />
        <Route path="/write" element={homestate === "write" ? <Write /> : <Navigate to="/" />} />
        <Route path="/mythoughts" element={homestate === "myThought" ? <MyThoughts /> : <Navigate to="/" />} />
        <Route path="/profile" element={homestate === "profile" ? <Profile /> : <Navigate to="/" />} />
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </>
  )
}

export default App
