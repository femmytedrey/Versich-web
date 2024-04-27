import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const MobileBusinessType = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [businessTypeOtherInputValue, setBusinessTypeOtherInputValue] =
    useState(sessionStorage.getItem("businessTypeOtherInputValue") || "");
  const [options, setOptions] = useState({
    option1: {
      value: "Personal project",
      label: "Personal project",
      selected: false,
    },
    option2: {
      value: "Sole trader/self-employed",
      label: "Sole trader/self-employed",
      selected: false,
    },
    option3: {
      value: "Small business (1 - 9 employees)",
      label: "Small business (1 - 9 employees)",
      selected: false,
    },
    option4: {
      value: "Medium business (10 - 29 employees)",
      label: "Medium business (10 - 29 employees)",
      selected: false,
    },
    option5: {
      value: "Large business (30 - 99 employees)",
      label: "Large business (30 - 99 employees)",
      selected: false,
    },
    option6: {
      value: "Extra large business (100 or more employees)",
      label: "Extra large business (100 or more employees)",
      selected: false,
    },
    option7: {
      value: "Charity/non-profit",
      label: "Charity/non-profit",
      selected: false,
    },
    other: {
      value: businessTypeOtherInputValue,
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
    setValue("mobileBusinessType", selectedValue);
    setFormData({ ...formData, mobileBusinessType: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("businessTypeOtherInputValue");
      setBusinessTypeOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setBusinessTypeOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("mobileBusinessType", value);
    setFormData({ ...formData, mobileBusinessType: value });

    sessionStorage.setItem("businessTypeOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.mobileBusinessType;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.mobileBusinessType, businessTypeOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What type of business is this for?
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
                  name="mobileBusinessType"
                  value={option.value}
                  className="appearance-none"
                  {...register("mobileBusinessType", {
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
                  htmlFor="mobileBusinessType"
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
                value={businessTypeOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.mobileBusinessType?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.mobileBusinessType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileBusinessType;
