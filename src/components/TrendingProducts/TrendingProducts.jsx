import React from "react";
import "../BestProducts/BestProducts.scss";

import images from "../../constants/images";


import Item from '../../components/Item/Item'
import bestProducts from "../../constants/data";
const TrendingProducts = () => {
  return (
    <div className="app__home-best ">
      <div className="grid-center">
        <h1 className="semi-title-text ">Trending Products</h1>
        <img src={images.smallLeaf} alt="small-leaf" />
      </div>
      <div className="best-products ">
        {bestProducts.trendingProducts.map((product, i) => {
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

export default TrendingProducts;
