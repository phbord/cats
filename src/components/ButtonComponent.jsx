import React, { useRef, useState, useEffect } from 'react';

const ButtonComponent = ({type, className, onClick, disabled, children}) => {
  useEffect(() => {}, [disabled]);

  return (
    <button type={type ? type : 'button'} 
            className={className} 
            onClick={onClick} 
            disabled={disabled ? 'disabled' : ''}>{children}</button>
  );
};

export default ButtonComponent;