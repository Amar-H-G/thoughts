import { useContext } from "react";
import { ItemsContext } from "../store/item";
import Post from "./post";


const Card = () => {
  const { data } = useContext(ItemsContext);
  // console.log(dataFromContext);
  return <>
    {data.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
}
export default Card;
