import style from "./myTHought.module.css"
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";

const MyThoughts = () => {
  return <>
    <div className={`row row-cols-1  row-cols-lg-3 row-cols-md-2 mx-1 my-1 g-2 `}>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className={`${style.cardHead}`}>
              <div>
                <h4 className="card-title">Card title</h4>
              </div>
              <div className={`${style.Likes}`}>
                <div className={`${style.item}`}><span><AiOutlineLike /></span><p>0</p></div>
                <div className={`${style.item}`}><span><AiOutlineDislike /></span><p>0</p></div>
                <div className={`${style.item}`}><span><FaRegComments /></span><p>0</p></div>
              </div>
            </div>
            <p className={`card-text fs-5 fw-normal ${style.text}`}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default MyThoughts;