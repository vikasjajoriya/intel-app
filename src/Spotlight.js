import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Spotlight.css";
import Navbar from "./Navbar.js"
import Logowithbg from "./Logowithbg.js";

const Spotlight = () => {
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div className="spotlight" onMouseMove={handleMouseMove}>
        <Navbar/>
        <Logowithbg />
        <motion.div
          className="spotlight-circle"
          style={{
            top: mousePosition.y,
            left: mousePosition.x,
          }}
          initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>
    </>
  );
};

export default Spotlight;