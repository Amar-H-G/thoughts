import { useState } from "react";
import Post from "./post";

const Card = ({ initialData }) => {

  // const initialData = [
  //   {
  //     id: '1',
  //     title: "Patra",
  //     content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   }, {
  //     id: '2',
  //     title: "Patra",
  //     content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   }, {
  //     id: '3',
  //     title: "Patra",
  //     content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   }, {
  //     id: '4',
  //     title: "Patra",
  //     content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  //   },
  // ]

  const [data, setData] = useState(initialData);
  const handleDataAdd = (name, content) => {
    console.log(name, content);
  }


  return <>
    {initialData.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
}
export default Card;
