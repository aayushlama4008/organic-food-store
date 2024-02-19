import React from "react";
import "./item.scss";


import icons from "../../constants/icons";

const Item = (props) => {
  return (
    <div className="item-product grid-center">
      <img src={props.imgUrl} alt={props.title} />
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
