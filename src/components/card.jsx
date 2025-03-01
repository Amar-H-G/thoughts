import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../store/item";
import Post from "./post";
import Welcome from "./WelcomeMessage";
import LoadingSpinner from "./loadingSpinner";


const Card = () => {
  const { data, fetching } = useContext(ItemsContext);

  return <>
    {fetching && <LoadingSpinner />}
    {!fetching && data.length === 0 && <Welcome />}
    {!fetching && data.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
}
export default Card;
