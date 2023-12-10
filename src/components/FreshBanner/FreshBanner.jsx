import React from "react";
import images from "../../constants/images";
import "./FreshBanner.scss";
import { Link } from "react-router-dom";
import icons from "../../constants/icons";

const FreshBanner = () => {
  return (
    <div className="app__fresh ">
      <section className="grid-center">
        <img
          src={images.basilLeaf}
          alt="basil-Leaf"
          width={150}
          className="app__fresh-leaf "
        />
      </section>

      <div className="app__fresh-boxes ">
        <div className="app__fresh-fruits app__fresh-fruits-box">
          <h4 className="semi-half-title-text">Farm Fresh Fruits</h4>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            harum?
          </p>
          <Link to={"/Shop"}>
            <button className="button">
              <icons.cart size={21} /> SHOP NOW
            </button>
          </Link>
        </div>
        <div className="app__fresh-vegetables app__fresh-fruits-box">
          <h4 className="semi-half-title-text">Fresh Vegetables</h4>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            harum?
          </p>
          <Link to={"/Shop"}>
            <button className="button">
              <icons.cart size={21} /> SHOP NOW
            </button>
          </Link>
        </div>

        <div className="app__fresh-organic app__fresh-fruits-box ">
          <h4 className="semi-half-title-text">Organic  Products</h4>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            harum?
          </p>
          <Link to={"/Shop"}>
            <button className="button">
              <icons.cart size={21} /> SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreshBanner;
