// CountryRegionGrid.jsx
import React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { IoIosArrowDown } from "react-icons/io";

const CountrySelection = ({ selectedCountry, selectedState, onCountryChange, onStateChange }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div className="relative">
        <CountryDropdown
          value={selectedCountry}
          onChange={onCountryChange}
          className="form-control w-full h-10 rounded-md border-[1px] border-versich-border px-3 pr-8 appearance-none focus:outline-none cursor-pointer hover:border-versich-blue"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <IoIosArrowDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="relative">
        <RegionDropdown
          country={selectedCountry}
          value={selectedState}
          onChange={onStateChange}
          className="form-control w-full h-10 rounded-md border-[1px] border-versich-border px-3 pr-8 appearance-none focus:outline-none cursor-pointer hover:border-versich-blue"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <IoIosArrowDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default CountrySelection;
