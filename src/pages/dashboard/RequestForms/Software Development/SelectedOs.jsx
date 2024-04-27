import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const SelectedOs = ({ register, errors, setValue, formData, setFormData }) => {
  const [osOtherInputValue, setOsOtherInputValue] = useState(
    sessionStorage.getItem("osOtherInputValue") || ""
  );
  const [options, setOptions] = useState({
    option1: {
      value: "Android",
      label: "Android",
      selected: false,
    },
    option2: {
      value: "Apple iOS",
      label: "Apple iOS",
      selected: false,
    },
    option3: {
      value: "Apple Mac OS",
      label: "Apple Mac OS",
      selected: false,
    },
    option4: {
      value: "Linux",
      label: "Linux",
      selected: false,
    },
    option5: {
      value: "Microsoft Windows",
      label: "Microsoft Windows",
      selected: false,
    },
    other: {
      value: osOtherInputValue,
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
    setValue("osCompatibility", selectedValue);
    setFormData({ ...formData, osCompatibility: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("osOtherInputValue");
      setOsOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setOsOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("osCompatibility", value);
    setFormData({ ...formData, osCompatibility: value });

    sessionStorage.setItem("osOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.osCompatibility;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.osCompatibility, osOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          Which operating system compatibility would you like to have?
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
                  name="osCompatibility"
                  value={option.value}
                  className="appearance-none"
                  {...register("osCompatibility", {
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
                  htmlFor="osCompatibility"
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
                value={osOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.osCompatibility?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.osCompatibility && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedOs;
