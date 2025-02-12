import React from 'react';
import './Button.css';

const Button = ( {btnText, onClick}) => {
  return (
    <div>
        <button className='search-btn' onClick={onClick}> {btnText }</button>
    </div>
  )
}

export default Button