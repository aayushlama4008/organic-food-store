import React from "react";
import "./BestProducts.scss";

import images from "../../constants/images";

import bestProducts from "../../constants/data";
import Item from "../Item/Item";

const BestProducts = () => {
  return (
    <div className="app__home-best ">
      <div className="grid-center">
        <h1 className="semi-title-text ">Best Selling Products</h1>
        <img src={images.smallLeaf} alt="small-leaf" />
      </div>
      <div className="best-products">
        {bestProducts.bestProducts.map((product, i) => {
          return (
            <Item
              key={i}
              id={product.id}
              title={product.title}
              imgUrl={product.imgUrl}
              price={product.price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default BestProducts;
