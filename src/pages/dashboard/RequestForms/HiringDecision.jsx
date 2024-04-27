import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const WebHiringDecision = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [webHiringOtherInputValue, setWebHiringOtherInputValue] = useState(
    sessionStorage.getItem("webHiringOtherInputValue") || ""
  );
  const [options, setOptions] = useState({
    option1: {
      value: "I'm ready to hire now",
      label: "I'm ready to hire now",
      selected: false,
    },
    option2: {
      value: "I'm definitely going to hire someone",
      label: "I'm definitely going to hire someone",
      selected: false,
    },
    option3: {
      value: "I'm likely to hire someone",
      label: "I'm likely to hire someone",
      selected: false,
    },
    option4: {
      value: "I will possibly hire someone",
      label: "I will possibly hire someone",
      selected: false,
    },
    option4: {
      value: "I'm planning and researching",
      label: "I'm planning and researching",
      selected: false,
    },
    other: {
      value: webHiringOtherInputValue,
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
    setValue("webHiringDecision", selectedValue);
    setFormData({ ...formData, webHiringDecision: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("webHiringOtherInputValue");
      setWebHiringOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setWebHiringOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("webHiringDecision", value);
    setFormData({ ...formData, webHiringDecision: value });

    sessionStorage.setItem("webHiringOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.webHiringDecision;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.webHiringDecision, webHiringOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          How likely are you to make a hiring decision?
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
                  name="webHiringDecision"
                  value={option.value}
                  className="appearance-none"
                  {...register("webHiringDecision", {
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
                  htmlFor="webHiringDecision"
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
                value={webHiringOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.webHiringDecision?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.webHiringDecision && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebHiringDecision;
