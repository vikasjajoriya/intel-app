import React from 'react'
import NavLogo from "./Images/Logo powered by.svg";
import "./style.css"
const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="nav-logo">
            <img src={NavLogo} alt="navlogo" />
        </div>
        <div className="nav-links">
            <button className='nav-btn1'>Log in</button>
            <button className='nav-btn2'>Contact Sales</button>
        </div>
    </nav>
  )
}

export default Navbar
