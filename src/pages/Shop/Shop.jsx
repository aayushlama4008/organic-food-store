import React, { useState } from "react";

import "./shop.scss";
import allProducts from "../../constants/data";

import Item  from "../../components/Item/Item";

const Shop = () => {
  return (
    <div className="app__shop">
      <h1 className="green-text ">Shop</h1>
      <div className="app__shop-products">
        {allProducts.allProducts.map((product, i) => {
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

export default Shop;
