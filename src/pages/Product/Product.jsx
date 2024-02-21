import React, { useContext } from "react";
import "./product.scss";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../../components/BreadCrums/BreadCrums";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";

import "./product.scss";
const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  // console.log(allProducts.allProducts)
  const product = allProducts.allProducts.find(
    (p) => p.id === Number(productId)
  );
  console.log(product);
  return (
    <div className="product-item">
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
