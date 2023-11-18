import React from 'react'
import './Hero.css'
import two_men from '../Assets/two_men_sitting.png'
import girlwithbags from '../Assets/girlwithbags.png'
import logo from '../Assets/logo.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={logo} alt=''/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
        </div>
        <div className="hero-right">
            <img src={girlwithbags} alt=''/>
            <button id='new-collection-button'><span>Latest Arrival</span></button>
        </div>
    </div>
  )
}

export default Hero;
