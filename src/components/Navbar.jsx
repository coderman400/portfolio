import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className="w-full mt-4 p-4">
      <div className="mx-auto rounded-lg px-4 py-6 bg-dun text-white shadow-lg flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Arvind</div>
        </div>
        
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
        
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className='h-8 w-8' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
