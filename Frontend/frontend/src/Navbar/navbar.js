import React, { useState } from 'react';
import './navbar.css';
import { GiMushroomGills } from 'react-icons/gi';
import { FaHome, FaSearch } from 'react-icons/fa';
import { MdLanguage } from "react-icons/md";
import { FiMenu, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenu = () => {
    setIsModalOpen((prev) => !prev); // Toggle modal visibility
  };

  const handleLanguageSelect = (language) => {
    alert(`Selected language: ${language}`);
    setIsModalOpen(false); // Close modal after selection
  };

  return (
    <div className="nav-main">
      <h3 className="small-title">
        <GiMushroomGills />
        <span>Mush.</span>
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
          <ul className="language-options">
            <li onClick={() => handleLanguageSelect('English')}>English</li>
            <li onClick={() => handleLanguageSelect('Japanese')}>Spanish</li>
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
