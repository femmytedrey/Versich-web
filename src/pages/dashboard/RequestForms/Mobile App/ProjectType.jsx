import { useState, useEffect } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const ProjectType = ({ register, errors, setValue, formData, setFormData }) => {
  const [projectOtherInputValue, setProjectOtherInputValue] = useState(
    sessionStorage.getItem("projectOtherInputValue") || ""
  );
  const [options, setOptions] = useState({
    option1: {
      value: "Application - business",
      label: "Application - business",
      selected: false,
    },
    option2: {
      value: "Application - game",
      label: "Application - game",
      selected: false,
    },
    option3: {
      value: "Application - mobile commerce",
      label: "Application - mobile commerce",
      selected: false,
    },
    option4: {
      value: "Application - social media",
      label: "Application - social media",
      selected: false,
    },
    option5: {
      value: "Application - utility",
      label: "Application - utility",
      selected: false,
    },
    option6: {
      value: "Application - other",
      label: "Application - other",
      selected: false,
    },
    option7: {
      value: "Plug-in",
      label: "Plug-in",
      selected: false,
    },
    other: {
      value: projectOtherInputValue,
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
    setValue("selectedProjectType", selectedValue);
    setFormData({ ...formData, selectedProjectType: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("projectOtherInputValue");
      setProjectOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setProjectOtherInputValue(value);
    const updatedOptions = { ...options, other: { ...options.other, value } };
    setOptions(updatedOptions);
    setValue("selectedProjectType", value);
    setFormData({ ...formData, selectedProjectType: value });

    sessionStorage.setItem("projectOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...options };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        updatedOptions[key].value === formData.selectedProjectType;
    });
    setOptions(updatedOptions);
    if (options.other.value !== "" && options.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.selectedProjectType, projectOtherInputValue]);

  const isOptionSelected = Object.values(options).some(
    (option) => option.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What type of project is this?
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
                  name="selectedProjectType"
                  value={option.value}
                  className="appearance-none"
                  {...register("selectedProjectType", {
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
                  htmlFor="selectedProjectType"
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
                value={projectOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.selectedProjectType?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isOptionSelected && errors.selectedProjectType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectType;
