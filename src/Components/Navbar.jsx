import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#8766FF] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold"><Link to="/">Blue Pigeon</Link></div>
      </div>
    </nav>
  );
};

export default Navbar;
