import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const FinanceNeed = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
  setSelectedServiceType,
}) => {
  const [FinanceneedOtherInputValue, setFinanceNeedOtherInputValue] = useState(
    sessionStorage.getItem("FinanceneedOtherInputValue") || ""
  );
  const [options, setOptions] = useState({
    needs1: {
      value: "FP & A Revolution",
      label: "FP & A Revolution",
      selected: false,
    },
    needs2: {
      value: "Financial reporting and Advanced Analytics",
      label: "Financial reporting and Advanced Analytics",
      selected: false,
    },
    needs3: {
      value: "ERP/EPM/ System Implementation",
      label: "ERP/EPM/ System Implementation",
      selected: false,
    },
    needs4: {
      value: "Systems Administration",
      label: "Systems Administration",
      selected: false,
    },
    needs5: {
      value: "Digital Transformation",
      label: "Digital Transformation",
      selected: false,
    },
    other: {
      value: FinanceneedOtherInputValue,
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
    setValue("financeServiceNeeds", selectedValue);
    setFormData({ ...formData, financeServiceNeeds: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("FinanceneedOtherInputValue");
      setFinanceNeedOtherInputValue("");
    }
    if (optionKey === "other") {
      setSelectedServiceType("other");
    } else {
      setSelectedServiceType(selectedValue);
    }

  };

  // useEffect(() => {
  //   console.log(selectedFinanceNeed);
  // }, [selectedFinanceNeed]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFinanceNeedOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("financeServiceNeeds", value);
    setFormData({ ...formData, financeServiceNeeds: value });

    sessionStorage.setItem("FinanceneedOtherInputValue", value);

    // setSelectedServiceType(value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.financeServiceNeeds;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.financeServiceNeeds, FinanceneedOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What finance transformation service do you need an expert for?
        </p>
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
                  name="financeServiceNeeds"
                  value={option.value}
                  className="appearance-none"
                  {...register("financeServiceNeeds", {
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
                <label htmlFor="financeServiceNeeds" className="text-sm ps-2">
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
                value={FinanceneedOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.financeServiceNeeds?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.financeServiceNeeds && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceNeed;
