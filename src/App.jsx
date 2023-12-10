import "./App.scss";
import { Footer, Navbar} from "./components";

import {
  Home,
  Contact,
  About,
  Shop,
  Cart,
  LogInSignUp,
  Product,
} from "./container";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="app">
      <Navbar></Navbar>
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Product" element={<Product></Product>}>
            <Route path=":productid" element={<Product />} />
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
