import React, { useState } from "react";
import StepButton from "../components/Buttons/StepButton";
import InputText from "../components/InputText";
import ChoiceButton from "../components/Buttons/ChoiceButton";
import DropdownField from "../components/DropdownField";

const StepTwo = () => {
  const [choiceButton, setChoiceButton] = useState([
    { text: "Yes", isSelect: false },
    { text: "No", isSelect: false },
  ]);

  const [choiceButton1, setChoiceButton1] = useState([
    { text: "Yes", isSelect: false },
    { text: "No", isSelect: false },
  ]);

  const [choiceButton2, setChoiceButton2] = useState([
    { text: "Yes", isSelect: false },
    { text: "No", isSelect: false },
  ]);

  const handleToggle = (index) => {
    const updatedButtons = choiceButton.map((button, i) => ({
      ...button,
      isSelected: i === index,
    }));
    setChoiceButton(updatedButtons);
  };

  const handleToggle1 = (index) => {
    const updatedButtons = choiceButton.map((button, i) => ({
      ...button,
      isSelected: i === index,
    }));
    setChoiceButton1(updatedButtons);
  };

  const handleToggle2 = (index) => {
    const updatedButtons = choiceButton.map((button, i) => ({
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

  const handleButtonClickBack = () => {
    console.log("step back");
  };

  const handleButtonClickNext = () => {
    console.log("step forword");
  };

  return (
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
        <InputText label="Your Name" inputType="text" />
        <InputText label="Company Name" inputType="text" />
        <InputText label="Address" inputType="text" />
        <InputText label="Phone Number" inputType="text" />
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
        <InputText
          label="Your Website"
          placeholder="Website address (optional)"
          inputType="text"
        />
        <DropdownField
          label="Company size, employees"
          options={employeeNumbers}
          placeholder="Select number of Employee"
        />
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
              />
            ))}
          </div>
        </div>
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
              />
            ))}
          </div>
        </div>
        <div className="flex justify-between pt-16">
          <StepButton text="Back" handleButtonClick={handleButtonClickBack} />
          <StepButton text="Next" handleButtonClick={handleButtonClickNext} />
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
