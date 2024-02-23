import React, { useState } from "react";
import StepButton from "../components/Buttons/StepButton";
import InputText from "../components/InputText";
import ChoiceButton from "../components/Buttons/ChoiceButton";
import DropdownField from "../components/DropdownField";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const [choiceButton, setChoiceButton] = useState([
    { text: "Yes", isSelected: true },
    { text: "No", isSelected: false },
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

  const handleButtonClickBack = () => {
    navigate("/stepone");
  };

  const handleButtonClickNext = async () => {
    try {
      const isValid = await methods.trigger();

      if (!isValid) {
        console.log("Form validation failed");
        return;
      }

      await methods.handleSubmit(onSubmit)();
      console.log("Form submitted successfully");
      navigate("/stepthree");
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const onSubmit = (data) => {
    const selectedCompanySizeLabel = employeeNumbers.find(
      (option) => option.value === data.companySize
    )?.label;

    const WebOption = choiceButton.find((button) => button.isSelected)?.text;

    const selectedSalesTeamLabel = choiceButton1.find(
      (button) => button.isSelected
    )?.text;

    const selectedSocialMediaLabel = choiceButton2.find(
      (button) => button.isSelected
    )?.text;

    // console.log("Form submitted successfully:");
    // console.log("Your Name:", data.yourName);
    // console.log("Company Name:", data.companyName);
    // console.log("Address:", data.address);
    // console.log("Phone Number:", data.phoneNumber);
    // console.log('Website ?', WebOption)
    // console.log("Your Website:", data.website);
    // console.log("Company Size:", selectedCompanySizeLabel);
    // console.log("Sales Team:", selectedSalesTeamLabel);
    // console.log("Social Media:", selectedSocialMediaLabel);

    methods.reset();
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
          <form
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* InputText components */}
            <InputText
              label="Your Name"
              inputType="text"
              name="yourName"
              rules={{ required: "Field is required" }}
            />
            <InputText
              label="Company Name"
              inputType="text"
              name="companyName"
              rules={{ required: "Field is required" }}
            />
            <InputText
              label="Address"
              inputType="text"
              name="address"
              rules={{ required: "Field is required" }}
            />
            <InputText
              label="Phone Number"
              inputType="number"
              name="phoneNumber"
              rules={{ required: "Field is required" }}
            />

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

            <InputText
              label="Your Website"
              placeholder="Website address (optional)"
              inputType="text"
              name="website"
            />

            <DropdownField
              label="Company size, employees"
              options={employeeNumbers}
              placeholder="Select number of Employee"
              name="companySize"
              rules={{ required: "Field is required" }}
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
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-16">
              <StepButton
                type="button"
                text="Back"
                handleButtonClick={handleButtonClickBack}
              />
              <StepButton
                text="Next"
                handleButtonClick={handleButtonClickNext}
              />
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default StepTwo;
