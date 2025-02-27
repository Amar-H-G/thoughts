import { useContext, useEffect,useState } from "react";
import { ItemsContext } from "../store/item";
import Post from "./post";
import Welcome from "./WelcomeMessage";
import LoadingSpinner from "./loadingSpinner";


const Card = () => {
  const { data, addInitialFetch } = useContext(ItemsContext);
  const [fetching, setFetching] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    setFetching(true);
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addInitialFetch(data.posts);
        setFetching(false);
      });
      return ()=>{
        controller.abort();
      }
  }, []
  );


  return <>
    {fetching && <LoadingSpinner />}
    {!fetching && data.length === 0 && <Welcome />}
    {!fetching && data.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
}
export default Card;
