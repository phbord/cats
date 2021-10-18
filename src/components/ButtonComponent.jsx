import React from 'react';

const ButtonComponent = ({type, className, onClick, children}) => {
  return (
    <button type={type ? type : 'button'} 
            className={className} 
            onClick={onClick}>{children}</button>
  );
};

export default ButtonComponent;