import { useContext, useRef, useState } from "react";
import style from "./write.module.css"
import { ItemsContext } from "../store/item";


const Write = () => {
  const { newItemAdd } = useContext(ItemsContext);
  const userID = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const tags = useRef();

  const handlePost = (event) => {
    event.preventDefault();
    const userId = userID.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const Tags = tags.current.value.split(" ");
    titleElement.current.value = "";
    contentElement.current.value = "";
    userID.current.value = "";
    tags.current.value = "";

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        body: content,
        reactions: { likes: 0, dislikes: 0, comments: 0 },
        userId: userId,
        views: 0,
        tags: Tags
      })
    })
      .then(res => res.json())
      .then(post => {
        newItemAdd(post)
      });
  }
  return <>
    <form onSubmit={handlePost}>
      <div className={`container-fluid ${style.container}`}>
        <div className={`${style.contain}`}>
          <input type="text" placeholder="Enter Your User ID(Up to 208)" className={` mt-5 ${style.title}`} ref={userID} />
          <input type="text" placeholder="Enter the Title of your Thought" className={` mt-2 ${style.title}`} ref={titleElement} />
          <textarea type="text" name="input" placeholder="Enter Your Thoughts" className={` mt-3 ${style.content}`} ref={contentElement}></textarea>
          <input type="text" placeholder="Enter Tags" className={` mt-2 ${style.title}`} ref={tags} />
          <button className={` mt-5 ${style.post}`} type="submit">Post</button>
        </div>
      </div>
    </form>
  </>
}
export default Write;