
const ExploreDropDown = ({ isMenuOpen, menuOptions }) => {
  return (
    <>
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
    </>
  );
}

export default ExploreDropDown;
