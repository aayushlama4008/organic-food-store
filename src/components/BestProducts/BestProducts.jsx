import React from "react";
import "./BestProducts.scss";

import images from "../../constants/images";
import { useState } from "react";
import icons from "../../constants/icons";

import bestProducts from "../../constants/data";

const BestProducts = () => {
  const [products, setProducts] = useState(bestProducts);
  return (
    <div className="app__home-best ">
      <div className="grid-center">
        <h1 className="semi-title-text ">Best Selling Products</h1>
        <img src={images.smallLeaf} alt="small-leaf" />
      </div>
      <div className="best-products ">
        {products.bestProducts.map((product) => {
          return (
            <div key={product.id} className="grid-center new-product">
              <img src={product.imgUrl} alt={product.title} className="img" />
              <h4 className="third-title-text ">{product.title}</h4>
              <div className="product-rating">
                <icons.lightStar />
                <icons.lightStar />
                <icons.lightStar />
                <icons.lightStar />
                <icons.lightStar />
              </div>
              <h5 className="price">{product.price}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestProducts;
