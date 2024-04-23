import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const DataServiceNeeds = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [DataneedOtherInputValue, setDataNeedOtherInputValue] = useState(
    sessionStorage.getItem("DataneedOtherInputValue") || ""
  );
  const [options, setOptions] = useState({
    needs1: {
      value: "Data Analytics and Transformation",
      label: "Data Analytics and Transformation",
      selected: false,
    },
    needs2: {
      value: "Data Engineering",
      label: "Data Engineering",
      selected: false,
    },
    needs3: {
      value: "Data Integration & Reporting services",
      label: "Data Integration & Reporting services",
      selected: false,
    },
    needs4: {
      value: "Database Design and Development",
      label: "Database Design and Development",
      selected: false,
    },
    needs5: {
      value: "Data Modelling",
      label: "Data Modelling",
      selected: false,
    },
    other: {
      value: DataneedOtherInputValue,
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
    setValue("dataServiceNeeds", selectedValue);
    setFormData({ ...formData, dataServiceNeeds: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("DataneedOtherInputValue");
      setDataNeedOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setDataNeedOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("dataServiceNeeds", value);
    setFormData({ ...formData, dataServiceNeeds: value });

    sessionStorage.setItem("DataneedOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.dataServiceNeeds;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.dataServiceNeeds, DataneedOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What are your website needs?
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
                  name="dataServiceNeeds"
                  value={option.value}
                  className="appearance-none"
                  {...register("dataServiceNeeds", {
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
                  htmlFor="dataServiceNeeds"
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
                value={DataneedOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.dataServiceNeeds?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.dataServiceNeeds && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataServiceNeeds;
