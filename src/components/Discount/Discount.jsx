import { Link } from 'react-router-dom'
import icons from '../../constants/icons'
import './Discount.scss'


const Discount = () => {
  return (
    <div className="app__discount">
        <h1 className='semi-title-text ' style={{color:'white'}}>
        Get 25% Off On Your First Purchase!
        </h1>
        <Link to={"/Shop"} className='discount-button'>
            <button className="button ">
              <icons.cart size={21} /> SHOP NOW
            </button>
          </Link>
    </div>
  )
}

export default Discount