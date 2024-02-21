import React from "react";
import Icons from "../../constants/icons";
import { Link } from "react-router-dom";

import "./breadcrumbs.scss";

function BreadCrums(props) {
  return (
    <div className="bread-crumbs">
      <p>
        <Link to={"/"}>Home</Link>
        <span>
          <Icons.breadCrumbs />
        </span>
        <Link to={"/Shop"}>Shop</Link>
        <span>
          <Icons.breadCrumbs />
        </span>
        <Link to={`/${props.product.category}`}>{props.product.category}</Link>
        <span>
          <Icons.breadCrumbs />
        </span>
        {props.product.title}
      </p>
    </div>
  );
}

export default BreadCrums;

{
  /* <Item
        id={props.product.id}
        title={props.product.title}
        imgUrl={props.product.imgUrl}
        price={props.product.price}
      ></Item> */
}
