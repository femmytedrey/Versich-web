import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const SoftwareTypeSelector = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [softwareSelectorOtherInputValue, setSoftwareSelectorOtherInputValue] =
    useState(sessionStorage.getItem("softwareSelectorOtherInputValue") || "");
  const [options, setOptions] = useState({
    option1: {
      value: "Custom build for my requirement",
      label: "Custom build for my requirement",
      selected: false,
    },
    option2: {
      value: "White label software, configured for my requirement",
      label: "White label software, configured for my requirement",
      selected: false,
    },
    option3: {
      value: "Ready to use software",
      label: "Ready to use software",
      selected: false,
    },
    option4: {
      value: "I would like to discuss this with the professional",
      label: "I would like to discuss this with the professional",
      selected: false,
    },

    other: {
      value: softwareSelectorOtherInputValue,
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
    setValue("softwareSelector", selectedValue);
    setFormData({ ...formData, softwareSelector: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("softwareSelectorOtherInputValue");
      setSoftwareSelectorOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSoftwareSelectorOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("softwareSelector", value);
    setFormData({ ...formData, softwareSelector: value });

    sessionStorage.setItem("softwareSelectorOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.softwareSelector;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.softwareSelector, softwareSelectorOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What type of software would you like?
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
                  name="softwareSelector"
                  value={option.value}
                  className="appearance-none"
                  {...register("softwareSelector", {
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
                  htmlFor="softwareSelector"
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
                value={softwareSelectorOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.softwareSelector?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.softwareSelector && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoftwareTypeSelector;
