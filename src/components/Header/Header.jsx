import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header bg-none'>
      <div className="container flex justify-between h-[60px] py-3 items-center bg-none px-3 w-full">
        <div className="logo ">
          <span className='text-lg md:text-xl font-bold text-slate-200'>Mohapatra</span>
          <span className='text-lg md:text-xl font-bold text-slate-400'>Estate</span>
        </div>
        <div className="links hidden sm:flex">
          <ul className='flex space-x-6 font-semibold text-lg items-center text-slate-300'>
            <li><a href="#" className='hover:text-blue-400'>Residencies</a></li>
            <li><a href="#" className='hover:text-blue-400'>Our Values</a></li>
            <li><a href="#" className='hover:text-blue-400'>Contact us</a></li>
            <li><a href="#" className='hover:text-blue-400'>Get Started</a></li>
            <li><a href="#" className='hover:text-blue-400'>
              <button className='bg-blue-600 py-2 px-5 text-white rounded-3xl border-none transition-all duration-[300ms] ease-in hover:cursor-pointer hover:scale-[1.1]'>
                Contact
              </button>
            </a></li>
          </ul>
        </div>
        <div className="mobile-links md:hidden z-50">
          <button className="text-slate-300" onClick={toggleMenu}>Menu</button>
          {isOpen && (
            <ul className="absolute top-12 right-0 bg-white shadow-lg py-5 px-7 rounded-md">
              <li><a href="#" className="block py-1 hover:text-blue-400" onClick={toggleMenu}>Residencies</a></li>
              <li><a href="#" className="block py-1 hover:text-blue-400" onClick={toggleMenu}>Our Values</a></li>
              <li><a href="#" className="block py-1 hover:text-blue-400" onClick={toggleMenu}>Contact us</a></li>
              <li><a href="#" className="block py-1 hover:text-blue-400" onClick={toggleMenu}>Get Started</a></li>
              <li>
                <a href="#" className="block py-1">
                  <button className='bg-blue-600 py-2 px-5 text-white rounded-3xl border-none transition-all duration-[300ms] ease-in hover:cursor-pointer hover:scale-[1.1]'>
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
