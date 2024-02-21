import React, { useContext } from "react";
import "./relatedProducts.scss";
import { ShopContext } from "../../context/ShopContext";
import Item from "../Item/Item";

function RelatedProducts(props) {
  const { product } = props;
  const { allProducts } = useContext(ShopContext);

  const related = allProducts.allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  return (
    <div className="related--products">
      <h1 className="third-title-text">Related Products</h1>
      <div className="related--products-display">
        {related.slice(0, 3).map((product, i) => {
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
}

export default RelatedProducts;
