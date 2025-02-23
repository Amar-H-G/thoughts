import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import style from "./post.module.css"

const Post = ({ post }) => {
  return <>
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className={`${style.cardHead}`}>
            <div>
              <h4 className="card-title">{post.title}</h4>
            </div>
            <div className={`${style.Likes}`}>
              <div className={`${style.item}`}><span><AiOutlineLike /></span><p>0</p></div>
              <div className={`${style.item}`}><span><AiOutlineDislike /></span><p>0</p></div>
              <div className={`${style.item}`}><span><FaRegComments /></span><p>0</p></div>
            </div>
          </div>
          <p className={`card-text fs-5 fw-normal ${style.text}`}>{post.content}</p>
        </div>
      </div>
    </div>
  </>
}

export default Post;
