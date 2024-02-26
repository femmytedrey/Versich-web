import React, { useState } from "react";
import RadioSelection from "../components/RadioSelection";
import { IoIosAlert } from "react-icons/io";
import LocationSelection from "./SteponeComponents/LocationSelection";

const StepOne = ({
  selectedCountry: propSelectedCountry,
  selectedState: propSelectedState,
  onLocationChange,
  regionError,
}) => {
  const [isFirstOptionSelected, setIsFirstOptionSelected] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const regionCoverage = [
    { value: "value1", label: "I serve customers worldwide" },
    { value: "value2", label: "I serve customers within" },
  ];

  const milesCoverage = [
    { value: "value1", label: "3 miles" },
    { value: "value2", label: "20 miles" },
  ];

  const postcodes = [
    { value: "value1", label: "option 1" },
    { value: "value2", label: "option 2" },
  ];

  const handleRadioChange = (value) => {
    setIsFirstOptionSelected(value === "value1");
  };

  const handleLocationChange = (country, state) => {
    setSelectedCountry(country);
    setSelectedState(state);
    onLocationChange(country, state);
  };

  return (
    <div className="flex flex-col gap-y-6 my-4 mb-12">
      <div className="space-y-5">
        <h2 className="text-start text-xl text-versich-dark-blue font-semibold">
          Where would you like to see leads from?
        </h2>
        <p className="text-start">
          Tell us the area you cover so we can show you leads for your location
        </p>
      </div>
      <RadioSelection options={regionCoverage} onChange={handleRadioChange} />

      {/* Dropdown rendered dynamically */}
      <LocationSelection
        isFirstOptionSelected={isFirstOptionSelected}
        milesCoverage={milesCoverage}
        postcodes={postcodes}
        onLocationChange={handleLocationChange}
        selectedCountry={propSelectedCountry}
        selectedState={propSelectedState}
        regionError={regionError}
      />

      <div className="flex gap-x-3 items-start text-start">
        <IoIosAlert className="text-gray-500 text-2xl" />
        <p>You can change your location at any time</p>
      </div>
    </div>
  );
};

export default StepOne;
