import { useEffect, useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const FinanceOrganizationSize = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [financeSizeRanges, setFinanceSizeRanges] = useState({
    Range_1_to_10: {
      value: "1 - 10 employees",
      label: "1 - 10 employees",
      selected: false,
    },
    Range_11_to_50: {
      value: "11 - 50 employees",
      label: "11 - 50 employees",
      selected: false,
    },
    Range_51_to_100: {
      value: "51 - 100 employees",
      label: "51 - 100 employees",
      selected: false,
    },
    Range_101_to_500: {
      value: "101 - 500 employees",
      label: "101 - 500 employees",
      selected: false,
    },
    Range_501_to_1000: {
      value: "501 - 1000 employees",
      label: "501 - 1000 employees",
      selected: false,
    },
    More_Than_1000: {
      value: "More than 1000 employees",
      label: "More than 1000 employees",
      selected: false,
    },
  });

  const handleRangeSelect = (optionKey) => {
    const updatedRange = { ...financeSizeRanges };
    Object.keys(updatedRange).forEach((key) => {
      updatedRange[key].selected = key === optionKey;
    });
    setFinanceSizeRanges(updatedRange);
    const financeSelectedRange = updatedRange[optionKey].value;
    setValue("financeRangeType", financeSelectedRange);
    setFormData({ ...formData, financeRangeType: financeSelectedRange });
  };

  const isRangeSelected = Object.values(financeSizeRanges).some(
    (sizeRange) => sizeRange.selected
  );

  useEffect(() => {
    const updatedRange = { ...financeSizeRanges };
    Object.keys(updatedRange).forEach((key) => {
      updatedRange[key].selected =
        updatedRange[key].value === formData.financeRangeType;
    });
  }, [formData.financeRangeType]);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What is your business/organization size?
        </p>
        <div className="">
          {Object.keys(financeSizeRanges).map((key) => {
            const range = financeSizeRanges[key];
            return (
              <div
                key={range.value}
                className="flex items-center cursor-pointer"
                onClick={() => handleRangeSelect(key)}
              >
                <input
                  type="radio"
                  name="financeRangeType"
                  value={range.value}
                  className="appearance-none"
                  {...register("financeRangeType", { required: true })}
                />
                {range.selected ? (
                  <IoMdRadioButtonOn className="text-[#4F4F4F]" />
                ) : (
                  <IoMdRadioButtonOff className="text-[#4F4F4F]" />
                )}
                <label
                  htmlFor="industryType"
                  className="text-sm ps-2 cursor-pointer w-full py-2 hover:text-versich-blue-hover transition-all duration-300"
                >
                  {range.label}
                </label>
              </div>
            );
          })}
        </div>

        {!isRangeSelected && errors.financeRangeType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceOrganizationSize;
