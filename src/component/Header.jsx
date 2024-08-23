import React, { useEffect, useRef } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFolderOpen, faHome, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isMobile, fullpageController }) => {
  const header = useRef(null)

  useEffect(()=>{
    setTimeout(() => {
      header.current.style.opacity = 1;
    }, 500);
  },[fullpageController])

  const handleClick = (section) => {
    if (fullpageController) {
      fullpageController.moveTo(section);
    }
  };

  const headerMenu = [
    { title: 'ABOUT ME', icon: faHome },
    { title: 'SKILLS', icon: faScrewdriverWrench },
    { title: 'EXPERIENCE', icon: faFolderOpen },
    { title: 'CONTACT', icon: faComment }
  ]

  return (
    <div className='header' ref={header}>
      {headerMenu.map((menu, index) => 
        <div key={index} onClick={() => handleClick(index+1)}>{isMobile ? <FontAwesomeIcon icon={menu.icon}/> : menu.title}</div>
      )}
    </div>
  );
}

export default Header;
