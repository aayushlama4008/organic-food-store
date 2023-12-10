import React from 'react'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
import icons from '../../constants/icons'
import './Hero.scss'
const Hero = () => {
  return (
    <div className="app__home-hero grid-center">
        <img src={images.hero} alt="Coffee" className="img" />
        <div className="app_home-title">
          <img src={images.smallLeaf} alt="small-leaf" />
          <p className="third-title-text">Best Quality Products</p>
          <h1 className="title-text">Join The Organic Movement!</h1>
          <p className="p-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            maiores dicta expedita quisquam dignissimos repellendus.
          </p>
          <Link to={"/Shop"}>
            <button className="button">
              <icons.cart size={21} /> SHOP NOW
            </button>
          </Link>
        </div>
      </div>
  )
}

export default Hero