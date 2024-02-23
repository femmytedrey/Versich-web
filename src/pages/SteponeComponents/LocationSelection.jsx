import React, { useState } from "react";
import DropdownField from "../../components/DropdownField";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { IoIosArrowDown } from "react-icons/io";

const LocationSelection = ({
  isFirstOptionSelected,
  milesCoverage,
  postcodes,
}) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  return (
    <div>
      {isFirstOptionSelected ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div className="relative">
            <CountryDropdown
              value={selectedCountry}
              onChange={(value) => setSelectedCountry(value)}
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
              onChange={(value) => setSelectedState(value)}
              className="form-control w-full h-10 rounded-md border-[1px] border-versich-border px-3 pr-8 appearance-none focus:outline-none cursor-pointer hover:border-versich-blue"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <IoIosArrowDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <DropdownField
            options={milesCoverage}
            placeholder="<-- Select -->"
            name="milesCoverage"
            rules={{ required: "Please select an option" }}
          />
          <DropdownField
            options={postcodes}
            placeholder="<-- Select -->"
            name="postcodes"
            rules={{ required: "Please select an option" }}
          />
        </div>
      )}
    </div>
  );
};

export default LocationSelection;
