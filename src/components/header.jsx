import "bootstrap/dist/css/bootstrap.min.css";
import style from "./headers.module.css";
import { RiHomeSmile2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { SiLibreofficewriter } from "react-icons/si";
import { SiBookmyshow } from "react-icons/si";

const Header = () => {
  return <>
    <div className={`d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ${style.header}`}>
      <a href="/" className="d-flex align-items-center my-0 my-lg-2 me-lg-auto text-white text-decoration-none mx-4 mt-3">
        <h1>Thoughts</h1>
      </a>

      <ul className="nav flex-nowrap col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small fw-semibold">
        <li className="">
          <a href="#" className={`nav-link text-white ${style.right}`}>
            <span><RiHomeSmile2Line /></span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className={`nav-link text-white ${style.right}`}>

            <span> <SiLibreofficewriter /></span>
            <span>Write</span>

          </a>
        </li>
        <li>
          <a href="#" className={`nav-link text-white ${style.right}`}>
            <span><SiBookmyshow /></span>
            <span>My Thoughts</span>

          </a>
        </li>
        <li>
          <a href="#" className={`nav-link text-white ${style.right}`}>
            <span><CgProfile /></span>
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </div>
  </>
}
export default Header;