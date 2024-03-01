import React, { useState } from "react";
import StepButton from "../components/Buttons/StepButton";
import InputText from "../components/InputText";
import ChoiceButton from "../components/Buttons/ChoiceButton";
import DropdownField from "../components/DropdownField";
// import { useForm, FormProvider } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import PhoneNumber from "./SteptwoComponents/PhoneNumber";

const StepTwo = ({ methods }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [isWebsite, setIsWebsite] = useState(false);

  const [choiceButton, setChoiceButton] = useState([
    { text: "Yes", isSelected: false },
    { text: "No", isSelected: true },
  ]);

  const [choiceButton1, setChoiceButton1] = useState([
    { text: "Yes", isSelected: false },
    { text: "No", isSelected: true },
  ]);

  const [choiceButton2, setChoiceButton2] = useState([
    { text: "Yes", isSelected: true },
    { text: "No", isSelected: false },
  ]);

  const handleToggle = (index) => {
    const updatedButtons = choiceButton.map((button, i) => ({
      ...button,
      isSelected: i === index,
    }));
    setChoiceButton(updatedButtons);
    setIsWebsite(index === 0);
  };

  const handleToggle1 = (index) => {
    const updatedButtons = choiceButton1.map((button, i) => ({
      ...button,
      isSelected: i === index,
    }));
    setChoiceButton1(updatedButtons);
  };

  const handleToggle2 = (index) => {
    const updatedButtons = choiceButton2.map((button, i) => ({
      ...button,
      isSelected: i === index,
    }));
    setChoiceButton2(updatedButtons);
  };

  const employeeNumbers = [
    { value: "value1", label: "Self-employed, Sole trader" },
    { value: "value2", label: "2-10" },
    { value: "value3", label: "11-50" },
    { value: "value4", label: "51-200" },
  ];

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
    setPhoneNumberValid(validateNumber(value));
    methods.setValue("phoneNumber", `+${value}`);
  };

  const validateNumber = (phoneNumber) => {
    if (!phoneNumber.trim()) {
      return false;
    }

    const phoneNumberPattern = /^\+?\d{1,}$/;
    return phoneNumberPattern.test(phoneNumber);
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
      {/* InputText components */}
      <InputText
        label="Your Name"
        inputType="text"
        name="yourName"
        rules={{ required: "This field is required" }}
        methods={methods}
      />
      <InputText
        label="Company Name"
        inputType="text"
        name="companyName"
        rules={{ required: "This field is required" }}
        methods={methods}
      />
      <InputText
        label="Address"
        inputType="text"
        name="address"
        rules={{ required: "This field is required" }}
        methods={methods}
      />

      <PhoneNumber methods={methods} onChange={handlePhoneNumberChange} />

      {/* ChoiceButton component */}
      <div className="text-start flex flex-col">
        <p className="mb-2 text-versich-label text-sm">
          Does your company have a website?
        </p>
        <div className="flex gap-4">
          {choiceButton.map((button, index) => (
            <ChoiceButton
              key={index}
              isSelected={button.isSelected}
              text={button.text}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>

      {isWebsite && (
        <InputText
          label="Your Website"
          placeholder="Website address"
          inputType="text"
          name="website"
          rules={{required: "Field is required"}}
          methods={methods}
        />
      )}

      <DropdownField
        label="Company size, employees"
        options={employeeNumbers}
        placeholder="Select number of Employee"
        name="companySize"
        rules={{ required: "Field is required" }}
        methods={methods}
      />

      {/* ChoiceButton component */}
      <div className="text-start flex flex-col">
        <p className="mb-2 text-versich-label text-sm">
          Does your company have a sales team?
        </p>
        <div className="flex gap-4">
          {choiceButton1.map((button, index) => (
            <ChoiceButton
              key={index}
              text={button.text}
              isSelected={button.isSelected}
              onToggle={() => handleToggle1(index)}
              methods={methods}
            />
          ))}
        </div>
      </div>

      {/* ChoiceButton component */}
      <div className="text-start flex flex-col ">
        <p className="mb-2 text-versich-label text-sm">
          Does your company use social media?
        </p>
        <div className="flex gap-4">
          {choiceButton2.map((button, index) => (
            <ChoiceButton
              key={index}
              text={button.text}
              isSelected={button.isSelected}
              onToggle={() => handleToggle2(index)}
              methods={methods}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
