import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
// import {PiListBold} from 'react-icons/pi'

/**
 * Navbar component that renders a responsive navigation bar.
 *
 * Uses React state and hooks to handle menu open/close,
 * mobile menu toggle, and location awareness.
 *
 * Renders different content based on responsive breakpoints.
 * Includes navigation links, dropdown menu, and auth buttons.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === "/" ? true : false;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menu = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };

  const closeMenu = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const menuOptions = [
    { id: 0, label: "Option 1", href: "#" },
    { id: 1, label: "Option 2", href: "#" },
    { id: 2, label: "Option 3", href: "#" },
  ];

  const handleClick = () => {
    // Close the mobile menu when the "Login" button is clicked
    setMobileMenu(false);
  };

  return (
    <nav
      className={`flex justify-between items-center py-4 px-10 md:px-16 lg:px-28 md:px-25 relative ${
        isHome ? "bg-transparent" : "bg-yellow-500"
      } `}
    >
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-16" />
        </Link>
      </div>
      <div>
        <div
          className={`md:flex md:gap-x-7 flex-col md:flex-row absolute md:relative bg-white bg-opacity-80 backdrop-filter backdrop-blur-md md:bg-transparent md:mt-0 w-full left-0 px-10 md:px-0 py-4 md:py-0  md:visible 
          ${
            mobileMenu
              ? "top-[100%] visible  duration-500 transition-all ease-in"
              : "hidden  top-[-100%] duration-500 transition-all ease-in"
          }`}
        >
          <div
            className="relative inline-block text-left w-full md:w-auto"
            ref={dropdownRef}
          >
            <div>
              <button
                type="button"
                className="flex md:inline-flex w-full justify-center gap-x-2.5 px-3 py-3 md:py-2 text-sm font-semibold text-black md:text-white md:hover:text-white md:hover:opacity-90"
                id="menu-button"
                onClick={toggleMenu}
              >
                Explore
                <svg
                  className="-mr-1 h-5 w-5 text-black md:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isMenuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-80 m-auto md:m-0 md:w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {menuOptions.map((option) => (
                    <a
                      key={option.id}
                      href={option.href}
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center flex-col md:flex-row md:gap-x-7 text-white font-semibold">
            <Link
              to="/login"
              type="button"
              onClick={handleClick}
              className="px-4 md:px-0 py-3 md:py-2 text-black md:text-white"
            >
              Login
            </Link>
            <button
              type="button"
              onClick={handleClick}
              className="bg-versich-blue hover:bg-opacity-80 text-white px-4 py-3 md:py-2 rounded-lg"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      {/* {mobileMenu ? 'open' : 'close'} */}
      {mobileMenu ? (
        <div className="text-white cursor-pointer md:hidden" onClick={menu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      ) : (
        <div className="text-white cursor-pointer md:hidden " onClick={menu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
