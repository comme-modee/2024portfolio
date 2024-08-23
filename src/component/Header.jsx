import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = ({ fullpageController }) => {

  const header = useRef(null)

  useEffect(()=>{
    header.current.style.opacity = 1
  },[])

  const handleClick = (section) => {
    if (fullpageController) {
      fullpageController.moveTo(section);
    }
  };

  return (
    <div className='header' ref={header}>
        <div onClick={() => handleClick(1)}>ABOUT ME</div>
        <div onClick={() => handleClick(2)}>SKILLS</div>
        <div onClick={() => handleClick(3)}>EXPERIENCE</div>
        <div onClick={() => handleClick(4)}>CONTACT</div>
    </div>
  );
}

export default Header;
