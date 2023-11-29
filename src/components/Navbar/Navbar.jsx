import images from "../../constants/images";

import "./Navbar.scss";

import { NavLink } from "react-router-dom";
import { RiShoppingBasketFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo grid-center">
        <NavLink to={"/"}>
          <img src={images.logo} alt="logo" width={130} />
        </NavLink>
      </div>
      <div className="app__navbar-items ">
        <NavLink to={"/Shop/shop"}>Everything</NavLink>
        <NavLink to={"/Shop/Groceries"}>Groceries</NavLink>
        <NavLink to={"/Shop/Juice"}>Juice</NavLink>
      </div>
      <div className="app__navbar-details">
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
        <NavLink to={"/"}>
          $0.00
          <RiShoppingBasketFill size={23}/>
        </NavLink>
        <NavLink to={"/"}>
          <FaUser />
        </NavLink>
      </div>
      
    </nav>
  );
};

export default Navbar;
