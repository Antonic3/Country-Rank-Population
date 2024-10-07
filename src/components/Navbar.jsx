import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#EAF9FF] px-4 py-2 flex items-center justify-between">
      <div className="flex items-center"/>
      <Link to="/" className="text-xl font-bold center text-[#10718E]">
        Country Rank Population
      </Link>
      
      <div className="flex space-x-4">
        <Link
          to="/"
          className="px-3 py-2 rounded-md text-[#10718E] hover:bg-[#D2F2E6] transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/compare"
          className="px-3 py-2 rounded-md text-[#10718E] hover:bg-[#D2F2E6] transition duration-300"
        >
          Compare Form
        </Link>
        <Link
          to="/news"
          className="px-3 py-2 rounded-md text-[#10718E] hover:bg-[#D2F2E6] transition duration-300"
        >
          News
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
