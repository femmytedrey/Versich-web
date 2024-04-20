import { useEffect, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const FinanceServiceNeeds = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [financeServiceNeed, setFinanceServiceNeed] = useState({
    option1: {
      value: "Big Data & Analytics",
      label: "Big Data & Analytics",
      selected: false,
    },
    option2: {
      value: "Business Impact Analysis",
      label: "Business Impact Analysis",
      selected: false,
    },
    option3: {
      value: "Data Science & Analysis",
      label: "Data Science & Analysis",
      selected: false,
    },
    option4: {
      value: "Data Visualization",
      label: "Data Visualization",
      selected: false,
    },
    option5: {
      value: "Value Creation Strategy",
      label: "Value Creation Strategy",
      selected: false,
    },
    option6: {
      value: "Strategic Planning",
      label: "Strategic Planning",
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

    setValue("financeServices", selectedServices);
    setFormData({ ...formData, financeServices: selectedServices });
  };

  const isAnySelected = Object.values(financeServiceNeed).some(
    (option) => option.selected
  );

  useEffect(() => {
    if (formData.financeServices) {
      const updatedOptions = { ...financeServiceNeed };
      formData.financeServices.forEach((selected) => {
        Object.keys(updatedOptions).forEach((key) => {
          if (updatedOptions[key].value === selected) {
            updatedOptions[key].selected = true;
          }
        });
      });
      setFinanceServiceNeed(updatedOptions);
    }
  }, [formData.financeServices]);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-versich-dark-blue font-semibold pb-2">
          Select services you need
        </p>
        <div className="space-y-3">
          {Object.keys(financeServiceNeed).map((key) => {
            const option = financeServiceNeed[key];
            return (
              <div
                key={option.value}
                className="flex items-center"
                onClick={() => handleCheckboxSelect(key)}
              >
                <input
                  type="checkbox"
                  name={option.value}
                  checked={option.selected}
                  className="appearance-none"
                  {...register("financeServices", { required: true })}
                />
                {option.selected ? (
                  <MdCheckBox className="text-[#4F4F4F]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-[#4F4F4F]" />
                )}
                <label htmlFor={option.value} className="text-sm ps-2">
                  {option.label}
                </label>
              </div>
            );
          })}
        </div>

        {!isAnySelected && errors.financeServices && (
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

export default FinanceServiceNeeds;
