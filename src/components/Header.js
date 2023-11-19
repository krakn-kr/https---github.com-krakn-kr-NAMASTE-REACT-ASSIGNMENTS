import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";
const Title = () => {
  return (
    <Link to={"/about"}>
      <img src={Logo} alt="" />
    </Link>
  );
};
const Header = () => {
  return (
    <>
      <div className="nav">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
