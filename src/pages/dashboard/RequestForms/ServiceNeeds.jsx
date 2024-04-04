import { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

const ServiceNeeds = ({ register, errors, setValue }) => {
  const [options, setOptions] = useState([
    {
      value: "To advertise my business/services",
      label: "To advertise my business/services",
      selected: false,
    },
    {
      value: "To sell products/services e.g. e-commerce",
      label: "To sell products/services e.g. e-commerce",
      selected: false,
    },
  ]);

  const handleOptionSelect = (optionValue) => {
    const updatedOptions = options.map((option) => ({
      ...option,
      selected: option.value === optionValue,
    }));
    setOptions(updatedOptions);
    setValue("serviceNeeds", optionValue);
  };

  const isOptionSelected = options.some((option) => option.selected);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-sm">What are your website needs?</p>
        <div className="space-y-3">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center"
              onClick={() => handleOptionSelect(option.value)}
            >
              <input
                type="radio"
                name="serviceNeeds"
                value={option.value}
                className="appearance-none"
                {...register("serviceNeeds", { required: true })}
              />
              {option.selected ? (
                <MdCheckBox className="text-[#4F4F4F]" />
              ) : (
                <MdCheckBoxOutlineBlank className="text-[#4F4F4F]" />
              )}
              <label htmlFor="serviceNeeds" className="text-sm ps-2">
                {option.label}
              </label>
            </div>
          ))}
          <div className="flex gap-x-2 items-center">
            <MdCheckBox className="text-[#4f4f4f]" />
            <input
              type="text"
              name="otherOption"
              placeholder="other"
              className="border border-versich-border py-2 px-3 flex-1 rounded-lg outline-none"
            />
          </div>
        </div>

        {!isOptionSelected && errors.serviceNeeds && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceNeeds;
