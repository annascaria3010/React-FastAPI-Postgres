import React from 'react'
import './navbar.css'
import { GiMushroomGills } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaSearch } from 'react-icons/fa'; // FaSearch is the search icon from Font Awesome
import { FiMenu } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const navbar = () => {
  return (
    <div className='nav-main'>
      <h3 className='small-title'>
      <GiMushroomGills />Mush.
      </h3>  
      <div className='pages'>
        <FaHome />Home 
        
        <FiPhone />Contact
      </div>
      <div className='icons'>
        <FaSearch />
        <FiUser />
        <FiMenu />
      </div>
    </div>
  )
}

export default navbar