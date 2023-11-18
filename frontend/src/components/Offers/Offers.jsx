import React from 'react'
import './Offers.css'
import Sitting from '../Assets/guy_sitting.png'
import Logo from '../Assets/logo.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <button><span>Check Now</span></button>
            <img src={Logo} alt=''/>
        </div>
        <div className="offers-right">
            <img src={Sitting} alt=''/>
        </div>
    </div>
  )
}

export default Offers
