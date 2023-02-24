import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="inner-content">
            <div className="brand">
              <Link to={"/"}>wird gelesen</Link>
            </div>

            <ul className="nav-links">
              <li>
                <Link to={"/watched"}> wurde gelesen </Link>
              </li>
              <li>
                <Link to={"/add"} className="btn"  >
                  <i className="fas fa-plus"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
