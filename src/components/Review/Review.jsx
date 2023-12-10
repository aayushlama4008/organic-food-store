import React from "react";
import "./Review.scss";
import images from "../../constants/images";
import icons from "../../constants/icons";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="app__home-review">
      <div className="app__home-review-title grid-center">
        <h1 className="semi-title-text">Customers Review</h1>
        <img src={images.smallLeaf} alt="small-leaf" />
      </div>
      <div className="app__home-review-main">
        <div className="app__home-review-single grid-center">
          <section className="app__review-star">
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
            <img src={images.random2} alt="random" width={40} />
            <p className="p-text">User</p>
          </span>
        </div>
        <div className="app__home-review-middle grid-center">
          <h1 className="semi-title-text">
            Deal Of The Day 15% Off On All Vegetables!
          </h1>
          <p className="p-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            consequatur!
          </p>
          <Link to={"/Shop"}>
            <button className="button">
              <icons.cart size={21} /> SHOP NOW
            </button>
          </Link>
        </div>
        <div className="app__home-review-single grid-center">
          <section className="app__review-star">
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
            <img src={images.random3} alt="random" width={40} />
            <p className="p-text">User</p>
          </span>
        </div>
      </div>
      <div className="app__review-company grid-center">
        <img src={images.logo1} alt="logo-1" />
        <img src={images.logo2} alt="logo-2" />
        <img src={images.logo3} alt="logo-3" />
        <img src={images.logo4} alt="logo-4" />
        <img src={images.logo5} alt="logo-5" />
      </div>
    </div>
  );
};

export default Review;
