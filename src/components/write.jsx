import { useRef, useState } from "react";
import style from "./write.module.css"
const Write = ({ newItemAdd }) => {
  const titleElement = useRef();
  const contentElement = useRef();
  const key = useRef(4);

  const handlePost = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const setKey = key.current.value + 1;
    titleElement.current.value = "";
    contentElement.current.value = "";
    newItemAdd(key, title, content);
  }
  return <>
    <form onSubmit={handlePost}>
      <div className={`container-fluid ${style.container}`}>
        <div className={`${style.contain}`}>
          <input type="text" placeholder="Enter the Title of your Thought" className={` mt-5 ${style.title}`} ref={titleElement} />
          <textarea type="text" name="input" placeholder="Enter Your Thoughts" className={` mt-3 ${style.content}`} ref={contentElement}></textarea>
          <button className={` mt-5 ${style.post}`} type="submit">Post</button>
        </div>
      </div>
    </form>
  </>
}
export default Write;