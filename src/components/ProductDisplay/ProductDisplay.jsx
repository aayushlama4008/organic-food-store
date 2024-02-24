import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./productDisplay.scss";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay(props) {
  const { addToCart ,removeFromCart} = useContext(ShopContext);
  const { product } = props;
  return (
    <div className="product-display">
      <div className="product--image">
        <img src={product.imgUrl} alt={product.title} />
      </div>
      <div className="product--desc">
        <h1 className="third-title-text">{product.title}</h1>
        <span>
          <h2 className="third-title-text">£{product.price}</h2>
          <p>+ Free Shipping</p>
        </span>
        <p>
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed quia non incidunt lores ta porro ame.
          numquam eius modi tempora incidunt lores ta porro ame.
        </p>
        <div className="product--quantity">
          <button onClick={() => addToCart(product.id)}>Add To Cart</button>
        </div>
        <hr color="#d2d0d0" />
        <div className="product--category">
          Categories:
          <Link to={"/Food"}> Food</Link>,<Link to={"/Juice"}> Juice</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
