import { useContext, useState } from "react";
import { ItemsContext } from "../store/item";
import Post from "./post";
import Welcome from "./WelcomeMessage";


const Card = () => {
  const { data,addInitialFetch } = useContext(ItemsContext);
  const [fetchedData, setFetchedData] = useState(false);
  // console.log(dataFromContext);
  if (!fetchedData) {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data)=>{
        console.log(data)
        addInitialFetch(data.posts);
      });
      setFetchedData(true);
  }
  return <>
    {data.length === 0 && <Welcome />}
    {data.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
}
export default Card;
