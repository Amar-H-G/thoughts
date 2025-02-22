import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from "./components/header";
import Thoughts from "./components/body";
import { useState } from "react";
import Write from "./components/write"
import MyThoughts from "./components/myThoughts"

function App() {
  const [homestate, sethomeState] = useState("Home");

  return (
    <>
      <Header homeState={homestate} setHomeState={sethomeState}></Header>
      {homestate === "Home" && <Thoughts />}
      {homestate === "write" && <Write />}
      {homestate === "myThought" && <MyThoughts />}
    </>
  )
}

export default App
