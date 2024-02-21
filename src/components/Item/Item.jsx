import React from "react";
import "./item.scss";

import icons from "../../constants/icons";
import { Link } from "react-router-dom";

const Item = (props) => {
  const scrollToTop = () => {
    window.scrollTo({top:0,left:0,behavior:"smooth"});
  };
  return (
    <div onClick={scrollToTop} className="item-product grid-center">
      <Link to={`/product/${props.id}`}>
        <img src={props.imgUrl} alt={props.title} />
      </Link>
      <h4 className="third-title-text">{props.title}</h4>
      <div className="product-rating">
        <icons.lightStar />
        <icons.lightStar />
        <icons.lightStar />
        <icons.lightStar />
        <icons.lightStar />
      </div>
      <h5 className="price">{props.price}</h5>
    </div>
  );
};

export default Item;
