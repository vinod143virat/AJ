import React from 'react'
import '../Styles/Navbar.css'
import { Link } from "react-router-dom";
import Logo from '../Photos/AJlogo.jpg'


export default function Navbar() {
  return (
    <div className='Navbar'>
        <img src={Logo} alt='Navbar'></img>
      <ul >
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>AboutUs</li></Link>
          <Link to='/contact'><li>ContactUs</li></Link>
          <Link to='/signup'><li>Signup</li></Link>
          <Link to='/login'><li>Login</li></Link>
          
      </ul>
    </div>
  )
}
