import { createContext, useState } from "react";
import allProducts from "../constants/data";

export const ShopContext = createContext(null);
const getDefualtCart = () => {
  let cart = {};
  for (let i = 0; i < allProducts.allProducts.length; i++) {
    cart[i] = 0;
  }

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

  const getTotalAmount = () => {
    let totalAmount = 0.00;

    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = allProducts.allProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.price * cart[item];
      }
    }
    return totalAmount;
    // return totalAmount.toFixed(2);

  };
  const getTotalItem = () => {
    let totalItems = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        totalItems += cart[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    allProducts,
    cart,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
