import style from "./loading.module.css"
const LoadingSpinner = () => {
  return <center>
    <div className={`spinner-border text-dark ${style.spinner}`} role="status">
      <span className={` ${style.text}`}>Loading...</span>
    </div></center>

}
export default LoadingSpinner;