import React, { useState } from 'react';
import './navbar.css';
import { GiMushroomGills } from 'react-icons/gi';
import { FaHome, FaSearch } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
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
        <FaHome /> 
       <span className="text"> Home</span>
        </div>

        <div className='nav-btn'>
        <FiUser /> 
        <span className="text"> User</span>
        </div>
        
        <FiMenu className='nav-btn'
          onClick={handleMenu} />
          <span className="text"> Menu</span>
      </div>

      {isModalOpen && (
        <div className="modal">
          <h4>Select Language</h4>
          <ul className="language-options">
            <li onClick={() => handleLanguageSelect('English')}>English</li>
            <li onClick={() => handleLanguageSelect('Spanish')}>Spanish</li>
            <li onClick={() => handleLanguageSelect('French')}>French</li>
            <li onClick={() => handleLanguageSelect('German')}>German</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
