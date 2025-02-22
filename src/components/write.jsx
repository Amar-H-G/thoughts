import style from "./write.module.css"
const Write = () => {
  return <>
    <div className={`container-fluid ${style.container}`}>
      <div className={`${style.contain}`}>
        <input type="text" placeholder="Enter the Title of your Thought" className={` mt-5 ${style.title}`} />
        <textarea type="text" name="input" placeholder="Enter Your Thoughts" className={` mt-3 ${style.content}`}></textarea>
        <button type="button" className={` mt-5 ${style.post}`}>Post</button>
      </div>

    </div>
  </>
}
export default Write;