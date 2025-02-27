import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import style from "./post.module.css"
import { AiFillEye } from "react-icons/ai";

const Post = ({ post }) => {
  return <>
    <div className="col">
      <div className={`card  ${style.card}`}>
        <div className="card-body">
          <div className={`${style.cardHead}`}>
            <div>
              <h4 className="card-title">{post.title}</h4>
            </div>
            <div className={`${style.Likes}`}>
              {post.reactions?.likes !== undefined && (
                <div className={`${style.item}`}>
                  <span><AiOutlineLike /></span>
                  <p>{post.reactions.likes}</p>
                </div>
              )}

              {post.reactions?.dislikes !== undefined && (
                <div className={`${style.item}`}>
                  <span><AiOutlineDislike /></span>
                  <p>{post.reactions.dislikes}</p>
                </div>
              )}

              {post.views !== undefined && (
                <div className={`${style.item}`}>
                  <span><FaRegComments /></span>
                  <p>{post.views}</p>
                </div>
              )}

            </div>


          </div>
          <div><p className={`card-text fs-5 fw-normal ${style.text}`}>{post.body}</p></div>
          <div className={style.tags}>
            <div className={`${style.but}`}>
              {post.tags?.map((tag, index) => (
                <button
                  key={index}
                  type="button"
                  className={`btn ${index === 0 ? 'btn-primary' : index === 1 ? 'btn-warning' : 'btn-light'} btn-sm`}
                >
                  {tag}
                </button>
              ))}</div>
            <div className={`${style.views}`}>
              <span className={style.view}>
                <AiFillEye />
                <span>{post.views ?? 0}</span>
              </span></div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Post;
