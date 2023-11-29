import "./App.scss";
import { Navbar, Footer } from "./components";

import { Home, About, Contact } from "./container";

import { Routes,Route,NavLink } from "react-router-dom";

function App() {
  return (
    <main className="app">
      <Navbar></Navbar>
      <div className="app__container">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
