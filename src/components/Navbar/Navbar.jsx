import images from "../../constants/images";

import "./Navbar.scss";

import { NavLink } from "react-router-dom";
import { RiShoppingBasketFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

import icons from "../../constants/icons";
import { useState } from "react";

import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo grid-center">
        <NavLink to={"/"}>
          <img src={images.logo} alt="logo" width={130} />
        </NavLink>
      </div>
      <div className="app__navbar-items ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Shop"}>Shop</NavLink>
        <NavLink to={"/Food"}>Food</NavLink>
        <NavLink to={"/Juice"}>Juice</NavLink>
      </div>
      <div className="app__navbar-details">
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
        <NavLink to={"/Cart"} className={"cart"}>
          $0.00
          <RiShoppingBasketFill size={23} />
          <div className="nav-cart-count grid-center">0</div>
        </NavLink>
        <NavLink to={"/LogInSignUp"}>
          <FaUser />
        </NavLink>
      </div>

      <div className="app__navbar-hamburger grid-center">
        <icons.hamBurger
          size={30}
          onClick={() => setToggle(true)}
          className="hamburger"
        />
        {toggle && (
          <motion.div
            className="app__navbar-hamburger-open "
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <NavLink to={"/"} onClick={() => setToggle(false)}>
              Home
            </NavLink>
            <NavLink to={"/Shop"} onClick={() => setToggle(false)}>
              Shop
            </NavLink>
            <NavLink to={"/Food"} onClick={() => setToggle(false)}>
              Food
            </NavLink>
            <NavLink to={"/Juice"} onClick={() => setToggle(false)}>
              Juice
            </NavLink>
            <NavLink to={"/About"} onClick={() => setToggle(false)}>
              About
            </NavLink>
            <NavLink to={"/Contact"} onClick={() => setToggle(false)}>
              Contact
            </NavLink>
            <NavLink
              to={"/Cart"}
              className={"cart"}
              onClick={() => setToggle(false)}
            >
              $0.00
              <RiShoppingBasketFill
                size={23}
                onClick={() => setToggle(false)}
              />
              <div className="nav-cart-count grid-center">0</div>
            </NavLink>
            <NavLink to={"/LogInSignUp"} onClick={() => setToggle(false)}>
              <FaUser />
            </NavLink>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
