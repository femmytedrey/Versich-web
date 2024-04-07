import { useState, useEffect } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const ServiceNeeds = ({ register, errors, setValue, formData, setFormData }) => {
  const [otherInputValue, setOtherInputValue] = useState(sessionStorage.getItem('otherInputValue') || '');
  const [options, setOptions] = useState({
    advertise: {
      value: "To advertise my business/services",
      label: "To advertise my business/services",
      selected: false,
    },
    sell: {
      value: "To sell products/services e.g. e-commerce",
      label: "To sell products/services e.g. e-commerce",
      selected: false,
    },
    other: {
      value: otherInputValue,
      label: "Other",
      selected: false,
    },
  });

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleOptionSelect = (optionKey) => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected = key === optionKey;
    });

    setOptions(updatedOptions);
    const selectedValue = updatedOptions[optionKey].value;
    setValue("serviceNeeds", selectedValue);
    setFormData({ ...formData, serviceNeeds: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem('otherInputValue');
      setOtherInputValue('');
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("serviceNeeds", value);
    setFormData({ ...formData, serviceNeeds: value });

    sessionStorage.setItem('otherInputValue', value)
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected = updatedOptions[key].value === formData.serviceNeeds;
    });
    setOptions(updatedOptions);
  
    if (options.other.value !== '' && options.other.selected) {
      setShowOtherInput(true);
    } 
  }, [formData.serviceNeeds, otherInputValue]);
  

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-sm">What are your website needs?</p>
        <div className="space-y-3">
          {Object.keys(options).map((key) => {
            const option = options[key];
            return (
              <div
                key={option.value}
                className="flex items-center"
                onClick={() => handleOptionSelect(key)}
              >
                <input
                  type="radio"
                  name="serviceNeeds"
                  value={option.value}
                  className="appearance-none"
                  {...register("serviceNeeds", {
                    required: true,
                    validate: {
                      otherInput: () => {
                        if (
                          options.other.selected &&
                          options.other.value.trim() === ""
                        ) {
                          return false;
                        }
                        return true;
                      },
                    },
                  })}
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
            );
          })}
          {showOtherInput && (
            <div className="flex gap-x-2 items-center">
              <input
                type="text"
                name="otherOption"
                placeholder="other"
                className="border border-versich-border py-2 px-3 flex-1 rounded-lg outline-none"
                onChange={handleInputChange}
                value={otherInputValue} // Use otherInputValue as the value
              />
            </div>
          )}
        </div>

        {errors.serviceNeeds?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

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
