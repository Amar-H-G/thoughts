import "bootstrap/dist/css/bootstrap.min.css";
import style from "./headers.module.css";
import { RiHomeSmile2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { SiLibreofficewriter } from "react-icons/si";
import { SiBookmyshow } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = ({ setHomeState }) => {

  return <>
    <div className={`d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ${style.header}`}>
      <Link to="/" className="d-flex align-items-center my-0 my-lg-2 me-lg-auto text-white text-decoration-none mx-4 mt-3">
        <h1>Thoughts</h1>
      </Link>


      <ul className="nav flex-nowrap col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small fw-semibold">
        <li className="">
          <Link to="/" onClick={() => setHomeState("Home")} className={`nav-link text-white ${style.right}`}>
            <span><RiHomeSmile2Line /></span>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/write" onClick={() => setHomeState("write")} className={`nav-link text-white ${style.right}`}>

            <span> <SiLibreofficewriter /></span>
            <span>Write</span>

          </Link>
        </li>
        <li>
          <Link to="/mythoughts" onClick={() => setHomeState("myThought")} className={`nav-link text-white ${style.right}`}>
            <span><SiBookmyshow /></span>
            <span>My Thoughts</span>

          </Link>
        </li>
        <li>
          <Link to="/profile" onClick={() => setHomeState("profile")} className={`nav-link text-white ${style.right}`}>
            <span><CgProfile /></span>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>

  </>
}
export default Header;