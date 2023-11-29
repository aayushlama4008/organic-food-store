import React from "react";
import "./Footer.scss";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import icons from "../../constants/icons";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-main">
        <div className="app__footer-logo ">
          <Link to={"/"}>
            <img src={images.logoFooter} alt="Logo" width={130} />
          </Link>
          <em className="footer-text-description">
            To us, health means providing organic, natural and sustainable
            products that you can trust, advice and guidance from trained
            experts, and acting sustainably and ethically as a business.
          </em>
        </div>
        <div className="app__footer-links">
          <div className="app__footer-quicklinks footer-text">
            <h2 className="footer-text-title">Quick Links</h2>
            <Link to={"/Home"}>Home</Link>
            <Link to={"/"}>Cart</Link>
            <Link to={"/"}>Checkout</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/Contact"}>Contact</Link>
            <Link to={"/"}>My Account</Link>
            <Link to={"/"}>Shop</Link>
          </div>
          <div className="app__footer-quicklinks footer-text">
            <h2 className="footer-text-title">Site Links</h2>
            <Link to={"/"}>Privacy Policy</Link>
            <Link to={"/"}>Shipping Details</Link>
            <Link to={"/"}>Offer Coupouns</Link>
            <Link to={"/"}>Terms & Conditions</Link>
          </div>
        </div>
        <div className="app__footer-description">
          <div className="app__footer-quicklinks ">
            <h2 className="footer-text-title">Download Our Mobile App</h2>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam gravida sollicitudin. Praesent porta enim mi, non
              tincidunt libero interdum sit amet.
            </p>
          </div>
          <div className="app__footer-quicklinks app__footer-mobile">
            <h2 className="footer-text-title">Quick Links</h2>
            <Link to={"/About"}>Know More About Us</Link>
            <Link to={"/Contact"}>Visit Us</Link>
            <Link to={"/Contact"}>Lets Connect</Link>
            <Link to={"/Contact"}>Locate Stores</Link>
            <Link to={"/"}>
              <img src={images.playStore} alt="Play-store" width={120} />
            </Link>
            <Link to={"/"}>
              <img src={images.appStore} alt="App-store" width={120} />
            </Link>
          </div>
        </div>
      </div>
      <div className="app__footer-bottom">
        <p className="footer-text">Copyright © 2023 | Organic Store</p>
        <div className="app__footer-social">
          <Link to={"/"}>
            <icons.facebook size={20}></icons.facebook>
          </Link>
          <Link to={"/"}>
            <icons.twitter size={20}></icons.twitter>
          </Link>
          <Link to={"/"}>
            <icons.insta size={20}></icons.insta>
          </Link>
          <Link
            to={"https://github.com/aayushlama4008/organic-food-store.git"}
            target="_blank"
          >
            <icons.github size={20}></icons.github>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
