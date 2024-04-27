import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const SoftwareType = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [softwareTypeOtherInputValue, setSoftwareTypeOtherInputValue] =
    useState(sessionStorage.getItem("softwareTypeOtherInputValue") || "");
  const [options, setOptions] = useState({
    option1: {
      value: "Accounting software",
      label: "Accounting software",
      selected: false,
    },
    option2: {
      value: "Customer relationship management systems",
      label: "Customer relationship management systems",
      selected: false,
    },
    option3: {
      value: "Enterprise resource planning system",
      label: "Enterprise resource planning system",
      selected: false,
    },
    option4: {
      value: "Human Resource Information System",
      label: "Human Resource Information System",
      selected: false,
    },
    option5: {
      value: "Learning and development system",
      label: "Learning and development system",
      selected: false,
    },
    option6: {
      value: "Reservation/scheduling/ticketing system",
      label: "Reservation/scheduling/ticketing system",
      selected: false,
    },
    option7: {
      value: "Sales and marketing management system",
      label: "Sales and marketing management system",
      selected: false,
    },

    other: {
      value: softwareTypeOtherInputValue,
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
    setValue("softwareType", selectedValue);
    setFormData({ ...formData, softwareType: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("softwareTypeOtherInputValue");
      setSoftwareTypeOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSoftwareTypeOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("softwareType", value);
    setFormData({ ...formData, softwareType: value });

    sessionStorage.setItem("softwareTypeOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.softwareType;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.softwareType, softwareTypeOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What type of software do you want to develop?
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
                  name="softwareType"
                  value={option.value}
                  className="appearance-none"
                  {...register("softwareType", {
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
                  htmlFor="softwareType"
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
                value={softwareTypeOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.softwareType?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.softwareType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoftwareType;
