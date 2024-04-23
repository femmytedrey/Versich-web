import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const FinancialFinanceProjectCommencement = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [financeneedOtherInputValue, setFinanceneedOtherInputValue] = useState(
    sessionStorage.getItem("financeneedOtherInputValue") || ""
  );
  const [projectCommencements, setProjectCommencements] = useState({
    option1: {
      value: "ASAP",
      label: "ASAP",
      selected: false,
    },
    option2: {
      value: "Within a week",
      label: "Within a week",
      selected: false,
    },
    option3: {
      value: "Within a month",
      label: "Within a month",
      selected: false,
    },
    option4: {
      value: "Within 3 months",
      label: "Within 3 months",
      selected: false,
    },
    option5: {
      value: "I’m not sure",
      label: "I’m not sure",
      selected: false,
    },
    other: {
      value: financeneedOtherInputValue,
      label: "Other",
      selected: false,
    },
  });

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleOptionSelect = (optionKey) => {
    const updatedOptions = { ...projectCommencements };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected = key === optionKey;
    });

    setProjectCommencements(updatedOptions);
    const selectedValue = updatedOptions[optionKey].value;
    setValue("FinancialProjectCommencement", selectedValue);
    setFormData({ ...formData, FinancialProjectCommencement: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("financeneedOtherInputValue");
      setFinanceneedOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFinanceneedOtherInputValue(value);
    const updatedOptions = {
      ...projectCommencements,
      other: { ...projectCommencements.other, value },
    };
    setProjectCommencements(updatedOptions);
    setValue("FinancialProjectCommencement", value);
    setFormData({ ...formData, FinancialProjectCommencement: value });

    sessionStorage.setItem("financeneedOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...projectCommencements };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.FinancialProjectCommencement;
    });
    setProjectCommencements(updatedOptions);
    if (
      projectCommencements.other.value !== "" &&
      projectCommencements.other.selected
    ) {
      setShowOtherInput(true);
    }
  }, [formData.FinancialProjectCommencement, financeneedOtherInputValue]);

  const isprojectCommencementSelected = Object.values(
    projectCommencements
  ).some((projectCommencement) => projectCommencement.selected);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          How soon would you like the projects to begin?
        </p>
        <div className="">
          {Object.keys(projectCommencements).map((key) => {
            const projectCommencement = projectCommencements[key];
            return (
              <div
                key={projectCommencement.value}
                className="flex items-center cursor-pointer"
                onClick={() => handleOptionSelect(key)}
              >
                <input
                  type="radio"
                  name="FinancialProjectCommencement"
                  value={projectCommencement.value}
                  className="appearance-none"
                  {...register("FinancialProjectCommencement", {
                    required: true,
                    validate: {
                      otherInput: () => {
                        if (
                          projectCommencements.other.selected &&
                          projectCommencements.other.value.trim() === ""
                        ) {
                          return false;
                        }
                        return true;
                      },
                    },
                  })}
                />
                {projectCommencement.selected ? (
                  <IoMdRadioButtonOn className="text-[#4F4F4F]" />
                ) : (
                  <IoMdRadioButtonOff className="text-[#4F4F4F]" />
                )}
                <label
                  htmlFor="FinancialProjectCommencement"
                  className="text-sm ps-2 cursor-pointer w-full py-2 hover:text-versich-blue-hover transition-all duration-300"
                >
                  {projectCommencement.label}
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
                value={financeneedOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.FinancialProjectCommencement?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isprojectCommencementSelected &&
          errors.FinancialProjectCommencement && (
            <div className="pb-3">
              <p className="text-red-500 text-sm">Please select an option</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default FinancialFinanceProjectCommencement;
