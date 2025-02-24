import { useState } from "react";
import Post from "./post";

const Card = ({ initialData }) => {

  return <>
    {initialData.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
}
export default Card;
