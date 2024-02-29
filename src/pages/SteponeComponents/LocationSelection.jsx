import React, { useEffect, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { IoIosArrowDown } from "react-icons/io";

const LocationSelection = ({
  isFirstOptionSelected: InitializeIsFIrstOptionSelected,
  onLocationChange,
  regionError,
}) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [isFirstOptionSelected, setIsFirstOptionSelected] = useState(true)

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    onLocationChange(value, selectedState);
  };

  const handleStateChange = (value) => {
    setSelectedState(value);
    onLocationChange(selectedCountry, value);
  };

  useEffect(() => {
    onLocationChange(selectedCountry, selectedState);
  }, [selectedCountry, selectedState, onLocationChange, regionError]);

  return (
    <div>
      {InitializeIsFIrstOptionSelected ? null : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 text-start">
          <div>
            <div className="relative">
              <CountryDropdown
                value={selectedCountry}
                onChange={handleCountryChange}
                className="form-control w-full h-10 rounded-md border-[1px] border-versich-border px-3 pr-8 appearance-none focus:outline-none cursor-pointer hover:border-versich-blue"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <IoIosArrowDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              {regionError && (
                <p className="text-red-600 text-sm">Please select a Country.</p>
              )}
            </div>
          </div>

          <div>
            <div className="relative">
              <RegionDropdown
                country={selectedCountry}
                value={selectedState}
                onChange={handleStateChange}
                className="form-control w-full h-10 rounded-md border-[1px] border-versich-border px-3 pr-8 appearance-none focus:outline-none cursor-pointer hover:border-versich-blue"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <IoIosArrowDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              {regionError && (
                <p className="text-red-600 text-sm">Please select a region.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelection;
