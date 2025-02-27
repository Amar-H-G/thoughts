import { useContext, useRef, useState } from "react";
import style from "./write.module.css"
import { ItemsContext } from "../store/item";


const Write = () => {
  const { newItemAdd } = useContext(ItemsContext);
  const titleElement = useRef();
  const contentElement = useRef();
  // const [key, setKey] = useState(41);

  const handlePost = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    // const setKey = key + 1;
    titleElement.current.value = "";
    contentElement.current.value = "";
    newItemAdd(title, content);
  }
  return <>
    <form onSubmit={handlePost}>
      <div className={`container-fluid ${style.container}`}>
        <div className={`${style.contain}`}>
          <input type="text" placeholder="Enter the Title of your Thought" className={` mt-5 ${style.title}`} ref={titleElement} />
          <textarea type="text" name="input" placeholder="Enter Your Thoughts" className={` mt-3 ${style.content}`} ref={contentElement}></textarea>
          {console.log("Before Post")}
          <button className={` mt-5 ${style.post}`} type="submit">Post</button>
        </div>
      </div>
    </form>
  </>
}
export default Write;