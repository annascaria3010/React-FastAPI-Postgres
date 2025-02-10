import React from 'react';
import './Button.css';

const Button = ( {btnText, onClick}) => {
  return (
    <div>
        <Button className='search-btn' onClick={onClick}> {btnText }</Button>
    </div>
  )
}

export default Button