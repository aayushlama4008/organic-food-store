import React, { useState } from 'react'

import './shop.scss'
import allProducts from '../../constants/data'
import icons from '../../constants/icons'

const Shop = () => {
const [products,setProducts] = useState(allProducts)

  return (
    <div className="app__shop">
        <h1 className='green-text '>Shop</h1>
        <div className="app__shop-products">
          {products.allProducts.map((curPro) => (
            <div className="app__shop-product grid-center" key={curPro.id}>
              <img src={curPro.imgUrl} alt={curPro.title} className='img'/>
              <h4 className="third-title-text ">{curPro.title}</h4>
              <div className="product-rating">
                <icons.lightStar />
                <icons.lightStar />
                <icons.lightStar />
                <icons.lightStar />
                <icons.lightStar />
              </div>
              <h5 className="price">{curPro.price}</h5>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Shop