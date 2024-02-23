import React, { useState } from "react";
import RadioSelection from "../components/RadioSelection";
import { IoIosAlert } from "react-icons/io";
import StepButton from "../components/Buttons/StepButton";
import { useForm, FormProvider } from "react-hook-form";
import LocationSelection from "./SteponeComponents/LocationSelection";
import { useNavigate } from "react-router-dom";

// ... (existing imports)

const StepOne = () => {
  const methods = useForm();
  const { formState, handleSubmit } = methods;
  const navigate = useNavigate()

  const [isFirstOptionSelected, setIsFirstOptionSelected] = useState(true);

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

  const Country = [
    { value: "value1", label: "Nigeria" },
    { value: "value2", label: "Ghana" },
  ];

  const State = [
    { value: "value1", label: "Abuja" },
    { value: "value2", label: "Accra" },
  ];

  const handleRadioChange = (value) => {
    setIsFirstOptionSelected(value === "value1");
    // console.log(
    //   "Is first option selected?",
    //   value === "value2",
    //   isFirstOptionSelected
    // );
  };

  const handleButtonClick = async () => {
    try {
      const isValid = await methods.trigger();
  
      if (!isValid) {
        console.log("Form validation failed");
        return;
      } else {
        navigate('/steptwo')
      }
  
      handleSubmit((data) => {
        if (isFirstOptionSelected) {
          const selectedCountryLabel = Country.find(
            (option) => option.value === data.selectedCountry
          )?.label;
  
          const selectedStateLabel = State.find(
            (option) => option.value === data.selectedState
          )?.label;
  
          console.log("Form submitted successfully:");
          console.log("Selected Country:", selectedCountryLabel);
          console.log("Selected State:", selectedStateLabel);
  
          console.log("Navigating to StepTwo");
          navigate("/steptwo");
        } else {
          const selectedMilesCoverageLabel = milesCoverage.find(
            (option) => option.value === data.milesCoverage
          )?.label;
  
          const selectedPostcodesLabel = postcodes.find(
            (option) => option.value === data.postcodes
          )?.label;
  
          console.log("Form submitted successfully:");
          console.log("Selected Miles Coverage:", selectedMilesCoverageLabel);
          console.log("Selected Postcodes:", selectedPostcodesLabel);
        }
      })();
    } catch (error) {
      // Handle any error during form submission
      // Log the error and check if it's reaching this point
      console.error("Form submission error:", error);
    }
  };
  

  return (
    <FormProvider {...methods}>
      <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden bg-versich-primary-bg flex items center justify-center">
        <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md space-y-6">
          <div className="space-y-5">
            <h2 className="text-start text-xl text-versich-dark-blue font-semibold">
              Where would you like to see leads from?
            </h2>
            <p className="text-start">
              Tell us the area you cover so we can show you leads for your
              location
            </p>
          </div>
          <RadioSelection
            options={regionCoverage}
            onChange={handleRadioChange}
          />

          {/* Dropdown rendered dynamically */}
          <LocationSelection
            isFirstOptionSelected={isFirstOptionSelected}
            Country={Country}
            State={State}
            milesCoverage={milesCoverage}
            postcodes={postcodes}
          />

          <div className="flex gap-x-3 items-start text-start">
            <IoIosAlert className="text-gray-500 text-2xl" />
            <p>You can change your location at any time</p>
          </div>
          <StepButton text={"next"} handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </FormProvider>
  );
};

export default StepOne;
