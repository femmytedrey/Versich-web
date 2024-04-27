import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const ServiceEngagement = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [engagementOtherInputValue, setEngagementOtherInputValue] = useState(
    sessionStorage.getItem("engagementOtherInputValue") || ""
  );
  const [options, setOptions] = useState({
    option1: {
      value: "One-time - project basis",
      label: "One-time - project basis",
      selected: false,
    },
    option2: {
      value: "Full-time - monthly contract",
      label: "Full-time - monthly contract",
      selected: false,
    },
    option3: {
      value: "Full-time - I need an employee",
      label: "Full-time - I need an employee",
      selected: false,
    },
    other: {
      value: engagementOtherInputValue,
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
    setValue("serviceEngagement", selectedValue);
    setFormData({ ...formData, serviceEngagement: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("engagementOtherInputValue");
      setEngagementOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEngagementOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("serviceEngagement", value);
    setFormData({ ...formData, serviceEngagement: value });

    sessionStorage.setItem("engagementOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.serviceEngagement;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.serviceEngagement, engagementOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What type of service engagement do you require?
        </p>
        <div className="">
          {Object.keys(options).map((key) => {
            const option = options[key];
            return (
              <div
                key={option.value}
                className="flex items-center cursor-pointer"
                onClick={() => handleOptionSelect(key)}
              >
                <input
                  type="radio"
                  name="serviceEngagement"
                  value={option.value}
                  className="appearance-none"
                  {...register("serviceEngagement", {
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
                  <IoMdRadioButtonOn className="text-[#4F4F4F]" />
                ) : (
                  <IoMdRadioButtonOff className="text-[#4F4F4F]" />
                )}
                <label
                  htmlFor="serviceEngagement"
                  className="text-sm ps-2 cursor-pointer w-full py-2 hover:text-versich-blue-hover transition-all duration-300"
                >
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
                value={engagementOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.serviceEngagement?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.serviceEngagement && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceEngagement;
