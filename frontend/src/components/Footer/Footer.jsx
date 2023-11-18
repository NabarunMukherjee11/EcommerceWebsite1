import React from 'react'
import './Footer.css'
import Footer_logo from '../Assets/logo1.png'
import instagram from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <hr />
        <div className="footerlogo">
            <img src={Footer_logo} alt="" />
            <p>Dalmation Bear</p>
        </div>
        <div className="footer-social-icons">
            <div className="icon-container">
                <img src={instagram} alt="" />
            </div>
            <div className="icon-container">
                <img src={pintrest} alt="" />
            </div>
            <div className="icon-container">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @123- All rights reserved</p>
        </div>
    </div>
  )
}
export default Footer