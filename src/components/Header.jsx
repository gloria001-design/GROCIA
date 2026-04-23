import "./styles/Header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Header = ({ cartCount = null }) => {
  const count =
    cartCount !== null
      ? cartCount
      : (JSON.parse(localStorage.getItem("cart")) || []).length;

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
            <Link to="/card">
              <div>
                <IoCartOutline size="2em" color="green" />
                <span>{count}</span>
              </div>
            </Link>
            <Link to="/register">
              <button className="rbtn">Register</button>
            </Link>
            <Link to="/login">
              <button className="rbtn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
