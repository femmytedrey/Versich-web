import { useEffect, useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const FinanceServiceNeed = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [financeServiceNeed, setFinanceServiceNeed] = useState({
    option1: {
      value: "Financial Planning & Analysis",
      label: "Financial Planning & Analysis",
      selected: false,
    },
    option2: {
      value: "Demand Forecasting",
      label: "Demand Forecasting",
      selected: false,
    },
    option3: {
      value: "Financial Modeling",
      label: "Financial Modeling",
      selected: false,
    },
    oprion4: {
      value: "Finance Project Management",
      label: "Finance Project Management",
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

  const handleRangeSelect = (optionKey) => {
    const updatedRange = { ...financeServiceNeed };
    Object.keys(updatedRange).forEach((key) => {
      updatedRange[key].selected = key === optionKey;
    });
    setFinanceServiceNeed(updatedRange);
    const financeSelectedService = updatedRange[optionKey].value;
    setValue("financeService", financeSelectedService);
    setFormData({ ...formData, financeService: financeSelectedService });
  };

  const isRangeSelected = Object.values(financeServiceNeed).some(
    (sizeRange) => sizeRange.selected
  );

  useEffect(() => {
    const updatedRange = { ...financeServiceNeed };
    Object.keys(updatedRange).forEach((key) => {
      updatedRange[key].selected =
        updatedRange[key].value === formData.financeService;
    });
  }, [formData.financeService]);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          Select services you need
        </p>
        <div className="space-y-3">
          {Object.keys(financeServiceNeed).map((key) => {
            const range = financeServiceNeed[key];
            return (
              <div
                key={range.value}
                className="flex items-center"
                onClick={() => handleRangeSelect(key)}
              >
                <input
                  type="radio"
                  name="financeService"
                  value={range.value}
                  className="appearance-none"
                  {...register("financeService", { required: true })}
                />
                {range.selected ? (
                  <IoMdRadioButtonOn className="text-[#4F4F4F]" />
                ) : (
                  <IoMdRadioButtonOff className="text-[#4F4F4F]" />
                )}
                <label htmlFor="industryType" className="text-sm ps-2">
                  {range.label}
                </label>
              </div>
            );
          })}
        </div>

        {!isRangeSelected && errors.financeService && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceServiceNeed;
