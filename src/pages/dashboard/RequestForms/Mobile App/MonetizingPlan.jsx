import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const MonitizingPlan = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [monetisingOtherInputValue, setMonetisingOtherInputValue] = useState(
    sessionStorage.getItem("monetisingOtherInputValue") || ""
  );
  const [options, setOptions] = useState({
    option1: {
      value: "Cost to download",
      label: "Cost to download",
      selected: false,
    },
    option2: {
      value: "In-app advertising",
      label: "In-app advertising",
      selected: false,
    },
    option3: {
      value: "In-app purchases",
      label: "In-app purchases",
      selected: false,
    },
    option4: {
      value: "Sponsorships",
      label: "Sponsorships",
      selected: false,
    },
    option5: {
      value: "Subscription",
      label: "Subscription",
      selected: false,
    },
    option6: {
      value: "I will not be monetising the app",
      label: "I will not be monetising the app",
      selected: false,
    },
    option7: {
      value: "I need guidance from the pro",
      label: "I need guidance from the pro",
      selected: false,
    },
    other: {
      value: monetisingOtherInputValue,
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
    setValue("monetisingOption", selectedValue);
    setFormData({ ...formData, monetisingOption: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("monetisingOtherInputValue");
      setMonetisingOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setMonetisingOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("monetisingOption", value);
    setFormData({ ...formData, monetisingOption: value });

    sessionStorage.setItem("monetisingOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.monetisingOption;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.monetisingOption, monetisingOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          How do you plan on monetising the app?
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
                  name="monetisingOption"
                  value={option.value}
                  className="appearance-none"
                  {...register("monetisingOption", {
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
                  htmlFor="monetisingOption"
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
                value={monetisingOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.monetisingOption?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.monetisingOption && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonitizingPlan;
