import "./styles/Header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerholder">
      <div className="headerbody">
        <div
          className="
        logo"
        >
          EKURUME
        </div>
        <div>
          <ul>
            <NavLink to="/">
              <li>Home</li>{" "}
            </NavLink>

            <li className="lis">Service</li>
          </ul>
        </div>
        <div className="inputholder">
          <input type="text" />
          <button className="ibtn">Search</button>
        </div>
        <div className="btn">
          <div className="btn">
            <Link to="/register">
              <button className="rbtn">Register</button>
            </Link>

            <Link to="/login">
              <button className="loginbtn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
