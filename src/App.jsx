import "./App.scss";
import { Footer, Navbar } from "./components";

import {
  Home,
  Contact,
  About,
  Shop,
  Cart,
  LogInSignUp,
  Product,
} from "./pages";

import { Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory/ShopCategory";

function App() {
  return (
    <main className="app">
      <Navbar></Navbar>
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route
            path="/Food"
            element={<ShopCategory category="food" heading="Food" />}
          ></Route>
          <Route
            path="/Juice"
            element={<ShopCategory category="juice" heading="Juice" />}
          ></Route>
          <Route path="/Product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/LogInSignUp" element={<LogInSignUp />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
