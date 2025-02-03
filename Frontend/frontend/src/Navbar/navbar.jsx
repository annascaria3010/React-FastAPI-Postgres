import React, { useState } from 'react';
import './navbar.css';
import { GiMushroomGills } from 'react-icons/gi';
import { FaHome, FaSearch } from 'react-icons/fa';
import { MdLanguage } from "react-icons/md";
import { FiMenu, FiUser } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const  {i18n, t } = useTranslation();
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  

  const handleMenu = () => {
    setIsModalOpen((prev) => !prev); // Toggle modal visibility
  };


  return (
    <div className="nav-main">
      <h3 className="small-title">
        <GiMushroomGills />
        <span>{t('navbar.mush')}</span>
      </h3>
      <div className="icons">
      
      <div className="search">
        <FaSearch className="search-icon" />
        <span className="text">Search</span>
      </div>

      

        <div className='nav-btn'>
        <FiUser className='user'/> 
        {/* <span className="nav-text"> User</span> */}
        </div>

        <div className='nav-btn'>
        <MdLanguage  className='lang'
          onClick={handleMenu} />
          {/* <span className="nav-text"> Menu</span> */}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <h4>Language</h4>
         
          <div className="language-options">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ja')}>日本語</button>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Navbar;