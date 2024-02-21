import { createContext, useState } from "react";
import allProducts from "../constants/data";

export const ShopContext = createContext(null);
const getDefualtCart = () => {
  let cart = {};
  for (let i = 0; i < allProducts.allProducts.length; i++) {
    cart[i]= 0;
  }
  console.log(cart);

  return cart;

};
const ShopContextProvider = (props) => {
  const [cart, setCart] = useState(getDefualtCart());

  const addToCart = (productId) => {
    setCart((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  const contextValue = { allProducts, cart, addToCart, removeFromCart };
  console.log(cart);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
