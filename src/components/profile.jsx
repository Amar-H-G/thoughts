import style from "./profile.module.css"

const Profile = () => {
  return <>
    <div className={`${style.profile}`}>
      <div className={`mt-2 ${style.pic}`}>
        <img src="https://github.com/mdo.png" alt="" className="rounded-circle me-2 mt-1" />
        <button>Change</button></div>
      <div className={`${style.detailes}`}>
        <h5>Name: <span>Amar Patra</span></h5>
        <h5>Number: <span>8927426099</span></h5>
        <h5>Email: <span>patraamar187@gmail.com</span></h5>
        <h5>City: <span>Kolkata</span></h5>
        <h5>State: <span>West Bengal</span></h5>
        <h5>Zip: <span>721453</span></h5>
        <button>Update</button>
      </div></div>
  </>
}
export default Profile;