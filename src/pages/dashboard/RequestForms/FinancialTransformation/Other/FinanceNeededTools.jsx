import { useEffect, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const OtherFinanceNeedTools = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [financeServiceNeed, setFinanceServiceNeed] = useState({
    option1: {
      value: "Digital Strategy & Transformation",
      label: "Digital Strategy & Transformation",
      selected: false,
    },
    option2: {
      value: "Digital & Mobile Strategy",
      label: "Digital & Mobile Strategy",
      selected: false,
    },
    option3: {
      value: "Cloud Strategy",
      label: "Cloud Strategy",
      selected: false,
    },
    option4: {
      value: "Digital Transformation Roadmapping",
      label: "Digital Transformation Roadmapping",
      selected: false,
    },
    option5: {
      value: "Product Management",
      label: "Product Management",
      selected: false,
    },
    option6: {
      value: "Digital Strategy Project Management",
      label: "Digital Strategy Project Management",
      selected: false,
    },
    option7: {
      value: "Technology Assessment & Implementation",
      label: "Technology Assessment & Implementation",
      selected: false,
    },
    option8: {
      value: "Software Implementation",
      label: "Software Implementation",
      selected: false,
    },
    option9: {
      value: "Technology Assessment",
      label: "Technology Assessment",
      selected: false,
    },
    option10: {
      value: "Technology Implementation Project Management",
      label: "Technology Implementation Project Management",
      selected: false,
    },
    option11: {
      value: "Digital Transformation & Technology",
      label: "Digital Transformation & Technology",
      selected: false,
    },
    option12: {
      value: "Operations & Process Improvement",
      label: "Operations & Process Improvement",
      selected: false,
    },
    option13: {
      value: "Business Process Redesign",
      label: "Business Process Redesign",
      selected: false,
    },
    option14: {
      value: "Commercial Operations",
      label: "Commercial Operations",
      selected: false,
    },
    option15: {
      value: "Process Improvement",
      label: "Process Improvement",
      selected: false,
    },
    option16: {
      value: "Operations Project Management",
      label: "Operations Project Management",
      selected: false,
    },
    option17: {
      value: "Supply Chain Strategy & Transformation",
      label: "Supply Chain Strategy & Transformation",
      selected: false,
    },
  });

  const handleCheckboxSelect = (optionKey) => {
    const updatedOptions = { ...financeServiceNeed };
    updatedOptions[optionKey].selected = !updatedOptions[optionKey].selected;
    setFinanceServiceNeed(updatedOptions);

    const selectedServices = Object.keys(updatedOptions)
      .filter((key) => updatedOptions[key].selected)
      .map((key) => updatedOptions[key].value);

    setValue("otherFinanceTools", selectedServices);
    setFormData({ ...formData, otherFinanceTools: selectedServices });
  };

  const isAnySelected = Object.values(financeServiceNeed).some(
    (option) => option.selected
  );

  useEffect(() => {
    if (formData.otherFinanceTools) {
      const updatedOptions = { ...financeServiceNeed };
      formData.otherFinanceTools.forEach((selected) => {
        Object.keys(updatedOptions).forEach((key) => {
          if (updatedOptions[key].value === selected) {
            updatedOptions[key].selected = true;
          }
        });
      });
      setFinanceServiceNeed(updatedOptions);
    }
  }, [formData.otherFinanceTools]);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-versich-dark-blue font-semibold pb-2">
          Select services you need
        </p>
        <div className="h-[290px] overflow-y-scroll">
          {Object.keys(financeServiceNeed).map((key) => {
            const option = financeServiceNeed[key];
            return (
              <div
                key={option.value}
                className="flex items-center cursor-pointer"
                onClick={() => handleCheckboxSelect(key)}
              >
                <input
                  type="checkbox"
                  name={option.value}
                  checked={option.selected}
                  className="appearance-none"
                  {...register("otherFinanceTools", { required: true })}
                />
                {option.selected ? (
                  <MdCheckBox className="text-[#4F4F4F]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-[#4F4F4F]" />
                )}
                <label
                  htmlFor={option.value}
                  className="text-sm ps-2 cursor-pointer w-full py-2 hover:text-versich-blue-hover transition-all duration-300"
                >
                  {option.label}
                </label>
              </div>
            );
          })}
        </div>

        {!isAnySelected && errors.otherFinanceTools && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">
              Please select at least one option
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherFinanceNeedTools;
