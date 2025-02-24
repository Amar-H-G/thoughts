import { useState } from "react";
import style from "./write.module.css"
const Write = ({ newItemAdd }) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const handleNewTitle = (event) => {
    setTitle(event.target.value);
  }
  const handleNewContent = (event) => {
    setContent(event.target.value);
  }
  const handlePost = () => {
    newItemAdd(title, content);
    setTitle("");
    setContent("");
  }
  return <>
    <div className={`container-fluid ${style.container}`}>
      <div className={`${style.contain}`}>
        <input type="text" placeholder="Enter the Title of your Thought" className={` mt-5 ${style.title}`} onChange={handleNewTitle} />
        <textarea type="text" name="input" placeholder="Enter Your Thoughts" className={` mt-3 ${style.content}`} onChange={handleNewContent}></textarea>
        <button type="submit" className={` mt-5 ${style.post}`} onClick={handlePost}>Post</button>
      </div>
    </div>
  </>
}
export default Write;