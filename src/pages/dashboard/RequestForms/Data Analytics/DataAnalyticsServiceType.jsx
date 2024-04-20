import { useEffect, useState } from "react";
import icon1 from "../../../../assets/icons/DataAnalyticsIcon/dataAnalyticsServiceNeedIcon1.png";
import icon2 from "../../../../assets/icons/DataAnalyticsIcon/dataAnalyticsServiceNeedIcon2.png";

const DataAnalyticsServiceType = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [options, setOptions] = useState([
    {
      value: "Myself, personal Projects",
      label: "Myself, personal Projects",
      icon: icon1,
      selected: formData.DataServiceType === "Myself, personal Projects",
    },
    {
      value: "Team, Business, Company",
      label: "Team, Business, Company",
      icon: icon2,
      selected:
        formData.DataServiceType === "Team, Business, Company",
    },
  ]);

  const handleOptionSelect = (optionValue) => {
    const updatedOptions = options.map((option) => ({
      ...option,
      selected: option.value === optionValue,
    }));
    setOptions(updatedOptions);
    setValue("DataServiceType", optionValue);
    setFormData({ ...formData, DataServiceType: optionValue });
  };

  const isOptionSelected = options.some((option) => option.selected);

  useEffect(() => {
    const updatedOptions = options.map((option) => ({
      ...option,
      selected: option.value === formData.DataServiceType,
    }));
    setOptions(updatedOptions);
  }, [formData]);

  return (
    <div className="relative ">
      <div>
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What do you need data analytics services for?
        </p>
        <p className="pb-6">Once selected, please click ‘continue’</p>
      </div>

      <div className="grid grid-cols-2 gap-x-5 pb-5">
        {options.map((option) => (
          <div
            key={option.value}
            className={`flex flex-col justify-center items-center border ${
              option.selected
                ? "border-versich-blue border-2 bg-versich-blue/20"
                : "border-versich-border"
            } cursor-pointer rounded-lg gap-y-2 py-4 px-3`}
            onClick={() => handleOptionSelect(option.value)}
          >
            <input
              type="radio"
              name="DataServiceType"
              value={option.value}
              className="appearance-none"
              {...register("DataServiceType", { required: true })}
            />
            {/* <option.icon
              className={`text-6xl ${
                option.selected ? "text-versich-dark-blue" : "text-black"
              }`}
            /> */}
            <img src={option.icon} alt="icons" className="w-20" />

            <label htmlFor="serviceSelect" className="text-xs text-center">
              {option.label}
            </label>
          </div>
        ))}
      </div>

      {!isOptionSelected && errors.DataServiceType && (
        <div className="pb-3">
          <p className="text-red-500 text-sm">Please select an option</p>
        </div>
      )}
    </div>
  );
};

export default DataAnalyticsServiceType;
