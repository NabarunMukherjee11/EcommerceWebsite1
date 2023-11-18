import React from 'react'
import './CSS/LoginSignup.css'
const Login_SignUP = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your email'/>
          <input type="password" placeholder='password'/>
        </div>
        <button><span>Continue</span></button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>I agree to use the terms and policy of the Dalmation Bear.</p>
        </div>
      </div>
    </div>
  )
}
export default Login_SignUP;
