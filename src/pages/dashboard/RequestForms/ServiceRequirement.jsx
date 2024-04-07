import { useEffect, useState } from "react";
import { MdOutlineWebhook, MdCreditCardOff } from "react-icons/md";

const ServiceRequirement = ({ register, errors, setValue, formData, setFormData }) => {
  const [options, setOptions] = useState([
    {
      value: "Create a new website",
      label: "Create a new website",
      icon: MdOutlineWebhook,
      selected: formData.serviceOption === "Create a new website",
    },
    {
      value: "Make changes to my current website",
      label: "Make changes to my current website",
      icon: MdCreditCardOff,
      selected: formData.serviceOption === "Make changes to my current website",
    },
  ]);

  const handleOptionSelect = (optionValue) => {
    const updatedOptions = options.map((option) => ({
      ...option,
      selected: option.value === optionValue,
    }));
    setOptions(updatedOptions);
    setValue("serviceOption", optionValue);
    setFormData({ ...formData, serviceOption: optionValue })
  };

  const isOptionSelected = options.some((option) => option.selected);

  useEffect(() => {
    const updatedOptions = options.map((option) => ({
      ...option,
      selected: option.value === formData.serviceOption,
    }));
    setOptions(updatedOptions);
  }, [formData]);

  return (
    <div className="relative ">
      <div>
        <p className="text-sm">What is your web design requirement?</p>
        <p className="text-xs pb-6">Once selected, please click ‘continue’</p>
      </div>

      <div className="grid grid-cols-2 gap-x-3 pb-5">
        {options.map((option) => (
          <div
            key={option.value}
            className={`flex flex-col justify-center items-center border ${
              option.selected
                ? "border-versich-blue border-2 bg-versich-blue/20"
                : "border-versich-border"
            } cursor-pointer rounded-lg gap-y-2 py-4`}
            onClick={() => handleOptionSelect(option.value)}
          >
            <input
              type="radio"
              name="serviceOption"
              value={option.value}
              className="appearance-none"
              {...register("serviceOption", { required: true })}
            />
            <option.icon
              className={`text-6xl ${
                option.selected ? "text-versich-dark-blue" : "text-black"
              }`}
            />
            <label htmlFor="serviceSelect" className="text-[10px] text-center">
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {!isOptionSelected && errors.serviceOption && (
        <div className="pb-3">
          <p className="text-red-500 text-sm">Please select an option</p>
        </div>
      )}
    </div>
  );
};

export default ServiceRequirement;
