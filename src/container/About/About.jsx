import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";
import images from "../../constants/images";

import CountUp from "react-countup";
import icons from "../../constants/icons";

const About = () => {
  return (
    <div className="app__about">
      <div className="app__about-header grid-center">
        <h1 className="title-text">About Us</h1>
      </div>
      <section className="app__about-section grid-center">
        <div className="app__about-leaf grid-center">
          <img src={images.basilLeaf} alt="basil-leaf" width={150} />
        </div>
        <div className="app__about-main grid-center">
          <div className="app__about-detail ">
            <h4 className="semi-half-title-text">
              We Are Your Favourite Store
            </h4>
            <p className="p-text ">
              Tuas quisquam quo gravida proident harum, aptent ligula anim
              consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
              potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
              penatibus quasi! Nostra tenetur dignissimos ultrices natus
              distinctio ultrices consequuntur numqu.
            </p>
          </div>
          <img src={images.market} alt="organic-food" width={400} />
        </div>
      </section>
      <div className="app__about-customers grid-center">
        <div className="app__about-customers-text">
          <h3>Numbers Speaks For Themselves!</h3>
        </div>
        <div className="app__about-customers-numbers">
          <CountUp
            enableScrollSpy="true"
            end={5000}
            className="count-up-number"
          />
          <p>Curated Products</p>
        </div>
        <div className="app__about-customers-products">
          <CountUp
            enableScrollSpy="true"
            end={800}
            className="count-up-number"
          />
          <p>Curated Products</p>
        </div>
        <div className="app__about-customers-categories">
          <CountUp
            enableScrollSpy="true"
            end={50}
            className="count-up-number"
          />
          <p>Product Categries</p>
        </div>
      </div>
      <div className="app__about-review">
        <div className="app__about-comment grid-center">
          <img
            src={images.slider1}
            alt="grapes"
            className="about-img"
            width={50}
          />
          <section className="app__about-star">
            <icons.star></icons.star>
            <icons.star></icons.star>
            <icons.star></icons.star>
            <icons.star></icons.star>
            <icons.star></icons.star>
          </section>
          <p>
            Officiis fuga harum porro et? Similique rhoncus atque! Netus
            blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus
            elit, hic sem tenetur anim amet quas, malesuada proident platea
            corrupti expedita.
          </p>
          <span>
            <img src={images.random} alt="random" width={40} />
            <p className="p-text">User</p>
          </span>
        </div>
        <div className="app__about-certified ">
          <div className="app__about-products">
            <img src={images.organic} alt="organic" width={100} />
            <div>
              <h2 className="semi-half-title-text">Certified Products</h2>
              <p className="p-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                repudiandae!
              </p>
            </div>
          </div>
          <div className="app__about-products-title">
            <h1 className="semi-title-text">
              We Deal With Various Quality Organic Products
            </h1>
          </div>
          <div className="app__about-products-img">
            <img src={images.smallLeaf} alt="small-leaf" />
          </div>
          <div className="app__about-products-items">
            nubcuee
          </div>
          <div className="app__about-products-button">
            <Link to={"/Shop"}>
              <button className="button">
                <icons.cart size={21}/> SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
