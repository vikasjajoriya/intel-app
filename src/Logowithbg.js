import React from 'react'
import imageblur from "./Images/Blurr Bg.png"
import Logo from "./Images/Intellivisa Logo with AI Final.svg";
import "./style.css";
const Logowithbg = () => {
  return (
    <div  style={{zIndex:"1"}}>
      <div className="blur">
        <img src={imageblur} alt="" />
      </div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Logowithbg
