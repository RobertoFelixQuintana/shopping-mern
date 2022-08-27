import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="cart__link">
          <span>MERN Shopping</span>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/create-product/" className="cart__link">
            Create Product
          </Link>
        </li>
        <li>
          <Link to="/" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge"></span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
