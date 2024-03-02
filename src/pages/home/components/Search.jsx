const Search = () => {
  return (
    <div className="flex gap-x-4 mt-6 ">
      <input
        type="text"
        placeholder="What service are you looking for?"
        className="flex-1 min-w-0 h-16 rounded-lg px-[15px] py-3 focus:outline-versich-dark-blue   text-black text-base md:text-2xl"
      />
      <button
        type="submit"
        className="p-2 bg-versich-blue rounded-lg px-6 hover:bg-opacity-80 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
