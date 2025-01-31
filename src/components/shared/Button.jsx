import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-6 py-2 rounded-full font-bold transition-colors duration-300';
  const variants = {
    primary: 'bg-[#FF6F61] text-white hover:bg-[#A6E22E]',
    secondary: 'bg-[#A6E22E]/10 text-[#A6E22E] hover:bg-[#A6E22E] hover:text-white',
    outline: 'border-2 border-[#A6E22E] text-[#A6E22E] hover:bg-[#A6E22E] hover:text-white'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;