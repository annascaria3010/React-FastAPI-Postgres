import React from 'react'
import './navbar.css'
import { GiMushroomGills } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaSearch } from 'react-icons/fa'; // FaSearch is the search icon from Font Awesome
import { FiMenu } from "react-icons/fi";
import { FiUser } from "react-icons/fi";


const navbar = () => {
  
  const handleMenu = () => {
    openModel()
  }

  return (
    <div className='nav-main'>
      <h3 className='small-title'>
      <GiMushroomGills />
      <span>Mush.</span>
      </h3>  
      {/* <div className='info'>
        <div>
        <FaHome />Home 
        </div>
        <div>
        <IoMdCall />Contact
        </div>
      </div> */}
      <div className='icons'>
        <FaSearch />
        <FaHome />
        <FiUser />
        <FiMenu onClick={handleMenu}/>
      </div>
    </div>
  )
}

export default navbar