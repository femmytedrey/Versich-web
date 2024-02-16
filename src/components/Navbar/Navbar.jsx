import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation()

  const isHome = location.pathname === '/' ? true : false
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    console.log(location)
    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center py-8 px-8 md:px-20 lg:px-28 relative ${
        isHome ? "bg-transparent" : "bg-yellow-500"
      } `}
    >
      <div>
        <img src={logo} alt="logo" className='w-16' />
      </div>
      <div>
        <div className='flex gap-x-7'>
          <div className='relative inline-block text-left' ref={dropdownRef}>
            <div>
              <button type="button" className="inline-flex w-full justify-center gap-x-2.5 px-3 py-2 text-sm font-semibold text-white hover:text-white hover:opacity-90" id="menu-button" onClick={toggleMenu} >
                Explore
                <svg className="-mr-1 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            {isMenuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-0">Option 1</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-1">Option 2</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabIndex="-1" id="menu-item-2">Option 3</a>
                </div>
              </div>
            )}
          </div>
          <div className='flex gap-x-7 text-white font-semibold'>
            <button type='button' >Login</button>
            <button type='button' className='bg-versich-blue text-white px-4 py-2 rounded-lg hidden md:block'>Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
