import React, { useState } from "react";
import "./Home.scss";

import {
  Hero,
  FreeShipping,
  BestProducts,
  FreshBanner,
  Discount,
  TrendingProducts,
  Review
} from "../../components/index";


const Home = () => {
  return (
    <div className="app__home">
      <Hero />
      <FreeShipping /> 
      <BestProducts />
      <FreshBanner />
      <Discount />
      <TrendingProducts/>
      <Review/>
    </div>
  );
};

export default Home;
