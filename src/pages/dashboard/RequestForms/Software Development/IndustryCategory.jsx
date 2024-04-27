import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const IndustryCategory = ({ register, errors, setValue, formData, setFormData }) => {
  const [categoryOtherInputValue, setcategoryOtherInputValue] = useState(
    sessionStorage.getItem("categoryOtherInputValue") || ""
  );
  const [options, setOptions] = useState({
    option1: {
      value: "Banking, financial services and insurance",
      label: "Banking, financial services and insurance",
      selected: false,
    },
    option2: {
      value: "Education",
      label: "Education",
      selected: false,
    },
    option3: {
      value: "Entertainment",
      label: "Entertainment",
      selected: false,
    },
    option4: {
      value: "Fashion and furnishing",
      label: "Fashion and furnishing",
      selected: false,
    },
    option5: {
      value: "FMCG and durable goods",
      label: "FMCG and durable goods",
      selected: false,
    },
    option6: {
      value: "Food and hospitality",
      label: "Food and hospitality",
      selected: false,
    },
    option7: {
      value: "Health and pharmaceuticals",
      label: "Health and pharmaceuticals",
      selected: false,
    },
    option8: {
      value: "Industrial equipment",
      label: "Industrial equipment",
      selected: false,
    },
    option9: {
      value: "Retail",
      label: "Retail",
      selected: false,
    },
    other: {
      value: categoryOtherInputValue,
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
    setValue("industryCategory", selectedValue);
    setFormData({ ...formData, industryCategory: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("categoryOtherInputValue");
      setcategoryOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setcategoryOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("industryCategory", value);
    setFormData({ ...formData, industryCategory: value });

    sessionStorage.setItem("categoryOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.industryCategory;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.industryCategory, categoryOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What industry do you operate in?
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
                  name="industryCategory"
                  value={option.value}
                  className="appearance-none"
                  {...register("industryCategory", {
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
                  htmlFor="industryCategory"
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
                value={categoryOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.industryCategory?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.industryCategory && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryCategory;
