import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Item from "../../components/Item/Item";
import "./shopCategory.scss";

import Icons from "../../constants/icons";
const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);
 
  return (
    <div className="shop-category">
      <h1 className="green-text">{props.heading}</h1>
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-2</span> of 2 products
        </p>
        <div className="shopCategory-sort grid-center">
          Sort By <Icons.dropDown size={23} />
        </div>
      </div>
      <div className="shop-category-products">
        {allProducts.allProducts.map((product, i) => {
          if (props.category === product.category) {
            return (
              <Item
                key={i}
                id={product.id}
                title={product.title}
                imgUrl={product.imgUrl}
                price={product.price}
              ></Item>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
