import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const DevelopmentWork = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [developmentOtherInputValue, setDevelopmentOtherInputValue] = useState(
    sessionStorage.getItem("developmentOtherInputValue") || ""
  );
  const [options, setOptions] = useState({
    option1: {
      value: "Develop a new app",
      label: "Develop a new app",
      selected: false,
    },
    option2: {
      value: "Changes to an app that already exists",
      label: "Changes to an app that already exists",
      selected: false,
    },
    option3: {
      value: "I would like to discuss this with the pro",
      label: "I would like to discuss this with the pro",
      selected: false,
    },
    other: {
      value: developmentOtherInputValue,
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
    setValue("selectdDevelopment", selectedValue);
    setFormData({ ...formData, selectdDevelopment: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("developmentOtherInputValue");
      setDevelopmentOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setDevelopmentOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("selectdDevelopment", value);
    setFormData({ ...formData, selectdDevelopment: value });

    sessionStorage.setItem("developmentOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.selectdDevelopment;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.selectdDevelopment, developmentOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What sort of development work do you need?
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
                  name="selectdDevelopment"
                  value={option.value}
                  className="appearance-none"
                  {...register("selectdDevelopment", {
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
                  htmlFor="selectdDevelopment"
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
                value={developmentOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.selectdDevelopment?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.selectdDevelopment && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevelopmentWork;
