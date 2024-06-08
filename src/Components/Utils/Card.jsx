import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ children, showBackButton = false }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md w-auto max-w-[30rem]">
      {showBackButton && (
        <div className="absolute top-1 left-4">
          <button onClick={handleGoBack} className="mb-4 font-extrabold text-3xl">
            &larr;
          </button>
        </div>
      )}
      <div className="py-8 px-16">{children}</div>
    </div>
  );
};

export default Card;
