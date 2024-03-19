import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import {
  homePath,
  loginPath,
  signupPath,
  dashboardPath,
} from "../../assets/constants";
// import ExploreDropDown from "./ExploreDropDown";
import { logoutUser } from "../../actions/auth";

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
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  }; // To logout user

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === homePath ? true : false;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menu = () => {
    setMobileMenu(!mobileMenu);
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

  // const menuOptions = [
  //   { id: 0, label: "Option 1", href: "#" },
  //   { id: 1, label: "Option 2", href: "#" },
  //   { id: 2, label: "Option 3", href: "#" },
  // ];

  const handleClick = () => {
    // Close the mobile menu when the "Login" button is clicked
    setMobileMenu(false);
  };

  return (
    <nav
      className={`flex justify-between items-center py-6 px-10 md:px-16 lg:px-28 md:px-25 relative ${
        isHome ? "bg-transparent" : "bg-white"
      } `}
    >
      <div>
        <Link to={homePath} className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-[48px] md:w-[52px]" />
          &nbsp;
          <span
            className={`font-semibold text-xl  ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            VersiMarket
          </span>
        </Link>
      </div>
      <div>
        <div
          className={`md:flex md:gap-x-7 flex-col md:flex-row shadow-lg md:shadow-none absolute md:relative bg-white bg-opacity-80 backdrop-filter backdrop-blur-md md:bg-transparent md:mt-0 w-full left-0 px-10 md:px-0 py-4 md:py-0  md:visible
          ${
            mobileMenu
              ? "top-[100%] visible  duration-500 transition-all ease-in"
              : "hidden  top-[-100%] duration-500 transition-all ease-in"
          }`}
        >
          {/* <div
            className="relative inline-block text-left w-full md:w-auto"
            ref={dropdownRef}
          >
            <div>
              <button
                type="button"
                className={`flex md:inline-flex w-full bg-transparent justify-center items-center gap-x-2.5 transition-all duration-3000 ease-in px-3 py-3 md:py-2 text-lg font-regular hover:text-versich-blue ${
                  isHome
                    ? "text-versich-darktext-color md:text-white"
                    : "text-versich-darktext-color md:text-versich-darktext-color"
                }`}
                id="menu-button"
                onClick={toggleMenu}
              >
                Explore
                <svg
                  className={`-mr-1 h-5 w-5 ${
                    isHome
                      ? "text-versich-darktext-color md:text-white"
                      : "text-versich-darktext-color md:text-versich-darktext-color"
                  }`}
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

            <ExploreDropDown
              isMenuOpen={isMenuOpen}
              menuOptions={menuOptions}
            />
          </div> */}

          {isAuthenticated && user != null ? (
            <div className="flex justify-center flex-col md:flex-row md:gap-x-7 text-white">
              <Link
                to={dashboardPath}
                type="button"
                onClick={handleClick}
                className={`px-4 md:px-0 py-3 md:py-2 text-lg font-regular hover:text-versich-blue ${
                  isHome
                    ? "text-versich-darktext-color md:text-white"
                    : "text-versich-darktext-color md:text-versich-darktext-color"
                }`}
              >
                Dashboard
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  handleClick();
                  handleLogout();
                }}
                className="bg-versich-blue hover:bg-[#0A6ECD] text-white text-lg px-4 py-3 md:py-2 rounded-lg font-regular"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex justify-center flex-col md:flex-row md:gap-x-7 text-white">
              <Link
                to={loginPath}
                type="button"
                onClick={handleClick}
                className={`px-4 md:px-0 py-3 md:py-2 text-lg font-regular hover:text-versich-blue ${
                  isHome
                    ? "text-versich-darktext-color md:text-white"
                    : "text-versich-darktext-color md:text-versich-darktext-color"
                }`}
              >
                Login
              </Link>
              <Link
                to={signupPath}
                type="button"
                onClick={handleClick}
                className="bg-versich-blue hover:bg-[#0A6ECD] text-white text-lg px-4 py-3 md:py-2 rounded-lg font-regular"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* {mobileMenu ? 'open' : 'close'} */}
      {mobileMenu ? (
        <div
          className={`cursor-pointer md:hidden ${
            isHome ? "text-white" : "text-versich-darktext-color"
          }`}
          onClick={menu}
        >
          <MdClose className="text-3xl" />
        </div>
      ) : (
        <div
          className={`cursor-pointer md:hidden ${
            isHome ? "text-white" : "text-versich-darktext-color"
          }`}
          onClick={menu}
        >
          <RxHamburgerMenu className="text-3xl" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
