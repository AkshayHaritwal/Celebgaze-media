import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menuicon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);

  const [menu, setmenu] = useState(false);
  const toggleMenu = () => {
    menu ? setmenu(false) : setmenu(true);
  };

  return (
    <nav className={`container ${sticky ? "white-nav" : ""}`} id="nav-bar">
      <div className="logo">
        <img src={logo} alt="Clebgaze media logo" />
      </div>

      <ul className={menu ? "" : "hide-menu"}>
        <li>
          {" "}
          <Link to="home" smooth={true} offset={100} duration={500}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link to="aboutus" smooth={true} offset={-100} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="ourproduct" smooth={true} offset={-100} duration={500}>
            Our Products
          </Link>
        </li>
        <li>
          <Link to="whyus" smooth={true} offset={-420} duration={500}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="contactus" smooth={true} offset={-100} duration={500}>
            Contact us
          </Link>
        </li>
        <li>
          <Link to="connect" smooth={true} offset={220} duration={500}>
            Connect
          </Link>
        </li>
      </ul>
      <div className="menu">
        <i
          className={`fa-solid fa-bars menu-icon ${menu ? "show-menu" : ""}`}
          onClick={toggleMenu}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
