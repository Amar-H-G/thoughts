import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import style from "./post.module.css"
import { AiFillEye } from "react-icons/ai";

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
              <div className={`${style.item}`}><span><AiOutlineLike /></span><p>{post.reactions.likes}</p></div>
              <div className={`${style.item}`}><span><AiOutlineDislike /></span><p>{post.reactions.dislikes}</p></div>
              <div className={`${style.item}`}><span><FaRegComments /></span><p>{post.views}</p></div>
            </div>
          </div>
          <div><p className={`card-text fs-5 fw-normal ${style.text}`}>{post.body}</p></div>
          <div className={style.tags}><button type="button" class="btn btn-primary btn-sm">{post.tags[0]}</button>
            <button type="button" class="btn btn-secondary btn-sm">{post.tags[1]}</button>
            <button type="button" class="btn btn-primary btn-sm">{post.tags[2]}</button><span className={style.view}><AiFillEye /><span>{post.views}</span></span>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Post;
