import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Icon from "../../constants/icons";
import "./cart.scss";
import { Link } from "react-router-dom";
const Cart = () => {
  const { addToCart, removeFromCart, cart, allProducts, getTotalAmount } =
    useContext(ShopContext);
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
        {allProducts.allProducts.map((product,i) => {
          const quantity = cart[product.id];
          if (quantity > 0) {
            return (
                <div className="cart--main-item" key={i}>
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
            );
          } else null;
        })}
      </div>
      <div className="cart--total">
        <div className="total-checkout">
          <h3>Card Totals</h3>
          <div className="cart-subtotal">
            <p>Subtotal</p>
            <p>£{getTotalAmount()}</p>
          </div>
          <div className="cart-subtotal">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="cart-subtotal">
            <p>Total</p>
            <p>£{getTotalAmount()}</p>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="coupoun">
          <span>
            <input type="text" name="promo" id="" placeholder="Coupoun Code" />
            <button>Submit</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
