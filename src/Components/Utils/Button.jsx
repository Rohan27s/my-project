import React from 'react';

const Button = ({ text="", onClick , id=""}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[#8766FF] text-white font-semibold p-2 rounded-3xl mb-4`}
      id={id}
    >
      {text}
    </button>
  );
};

export default Button;
