// CustomCursor.js

import React, { useEffect, useState } from 'react';
import './CustomCursor.css';
import cursorImage from "../assests/Hamburger.png"

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const onMouseMove = (e) => {
    //   setPosition({ x: e.clientX, y: e.clientY });
        cursor.setAttribute("style","top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;");
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', ()=>{
        cursor.classList.add("expand");

        setTimeout(()=>{
            cursor.classList.remove("expand");
        },500);
    });

    // return () => {
    //   document.removeEventListener('mousemove', onMouseMove);
    // };
  }, []);

  return (
    <div className="cursor" >
      {/* <img src={cursorImage} alt="Custom Cursor" className="cursor-icon" /> */}
    </div>
  );
};

export default CustomCursor;
