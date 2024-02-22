import React from "react";
import RadioSelection from "../components/RadioSelection";
import DropdownField from "../components/DropdownField";
import { IoIosAlert } from "react-icons/io";
import StepButton from "../components/Buttons/StepButton";
import { useForm, FormProvider } from "react-hook-form";

const StepOne = () => {
  const methods = useForm();
  const { formState, handleSubmit } = methods;

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

  const handleButtonClick = () => {
    handleSubmit((data) => {
      if (formState.errors["milesCoverage"] || formState.errors["postcodes"]) {
        console.log("Please select options for both dropdowns");
      } else {
        console.log("Form submitted successfully:", data);
      }
    })();
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
          <RadioSelection options={regionCoverage} />
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
