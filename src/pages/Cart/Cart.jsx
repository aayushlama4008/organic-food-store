import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Icon from "../../constants/icons";
import "./cart.scss";
import { Link } from "react-router-dom";
const Cart = () => {
  const { addToCart, removeFromCart, cart, allProducts } =
    useContext(ShopContext);
  console.log(cart);
  console.log(allProducts.allProducts);

  return (
    <div className="cart-main">
      <h1>Cart</h1>
      <div className="cart--format">
        <p></p>
        <p></p>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>SubTotal</p>
      </div>
      <div className="cart--main-items">
        {allProducts.allProducts.map((product) => {
          const quantity = cart[product.id];
          console.log('---',quantity)
          if (quantity > 0) {
            return (
              <>
                <div className="cart--main-item">
                  <Icon.remove
                    size={26}
                    onClick={() => removeFromCart(product.id)}
                    className="remove"
                  />
                  <img src={product.imgUrl} alt={product.title} />
                  <Link to={`/Product/${product.id}`}>
                    <p>{product.title}</p>
                  </Link>
                  <p>£{product.price}</p>
                  <p>{cart[product.id]}</p>
                  <p>£{product.price * quantity}</p>
                </div>
              </>
            );
          } else null;
        })}
      </div>
    </div>
  );
};

export default Cart;
