import React, { useContext, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../Assets/logo1.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const[menu,setMenu]=useState("home");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p onClick={()=>{setMenu("home")}}>Dalmation Bear</p>
        </div>
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>SHOP</Link>{menu=="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>MEN</Link>{menu=="men"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>WOMEN</Link>{menu=="women"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>KIDS</Link>{menu=="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to='/login' style={{textDecoration:'none'}}><button><span>Login</span></button></Link>
          <Link to='/cart'>
            <div>
              <img src={cart_icon} alt="" />
              <div className='navbar-cart-count'>{getTotalCartItems()}</div>
            </div>
          </Link>
        </div>
    </div>
  );
};
export default Navbar;
