// import { useContext } from "react";
import Card from "./card";
// import { ItemsContext } from "../store/item";

const MyThoughts = () => {
  // const { data } = useContext(ItemsContext);
  return <>
    <div className={`row row-cols-1  row-cols-lg-3 row-cols-md-2 mx-1 my-1 g-2 `}>
      <Card />
    </div>
  </>
}
export default MyThoughts;