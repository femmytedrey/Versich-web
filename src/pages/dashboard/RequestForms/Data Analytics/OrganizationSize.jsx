import { useEffect, useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const OrganizationSize = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [sizeRanges, setSizeRanges] = useState({
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
    const updatedRange = { ...sizeRanges };
    Object.keys(updatedRange).forEach((key) => {
      updatedRange[key].selected = key === optionKey;
    });
    setSizeRanges(updatedRange);
    const selectedRange = updatedRange[optionKey].value;
    setValue("rangeType", selectedRange);
    setFormData({ ...formData, rangeType: selectedRange });
  };

  const isRangeSelected = Object.values(sizeRanges).some(
    (sizeRange) => sizeRange.selected
  );

  useEffect(() => {
    const updatedRange = { ...sizeRanges };
    Object.keys(updatedRange).forEach((key) => {
      updatedRange[key].selected =
        updatedRange[key].value === formData.rangeType;
    });
  }, [formData.rangeType]);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What is your business/organization size?
        </p>
        <div className="space-y-3">
          {Object.keys(sizeRanges).map((key) => {
            const range = sizeRanges[key];
            return (
              <div
                key={range.value}
                className="flex items-center"
                onClick={() => handleRangeSelect(key)}
              >
                <input
                  type="radio"
                  name="rangeType"
                  value={range.value}
                  className="appearance-none"
                  {...register("rangeType", { required: true })}
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

        {!isRangeSelected && errors.rangeType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizationSize;
