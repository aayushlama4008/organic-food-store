import React from 'react'

import { Link } from 'react-router-dom'
import icons from '../../constants/icons'
import './FreeShipping.scss'
const FreeShipping = () => {
  return (
    <div className="app__home-options grid-center">
        <div className="app__home-option">
          <Link to={"/"}>
            <h3>
              <icons.truck size={22} /> Free Shipping
            </h3>
          </Link>
          <p>Above 5£ Only</p>
        </div>
        <div className="app__home-option">
          <Link to={"/"}>
            <h3>
              <icons.certified size={22} /> Certified Organic
            </h3>
          </Link>
          <p>100% Guarantee</p>
        </div>
        <div className="app__home-option">
          <Link to={"/"}>
            <h3>
              <icons.note size={22} /> Huge Saving
            </h3>
          </Link>
          <p>At Lowest Rate</p>
        </div> 
        <div className="app__home-option">
          <Link to={"/"}>
            <h3>
              <icons.recycle size={22} /> Easy Returns
            </h3>
          </Link>
          <p>No Questions </p>
        </div>
      </div>
  )
}

export default FreeShipping