import React, { useContext } from "react";

import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../../components/BreadCrums/BreadCrums";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import Description from "../../components/Description/Description";

import './product.scss'
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();

  const product = allProducts.allProducts.find(
    (p) => p.id === Number(productId)
  );
  return (
    <div className="product-item">
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <Description/>
      <RelatedProducts product={product}/>
    </div>
  );
};

export default Product;
