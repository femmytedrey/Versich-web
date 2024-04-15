import { useEffect, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
const DataChoicezOfTool = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [choices, setChoices] = useState({
    choice1: {
      value: "Power BI",
      label: "Power BI",
      selected: false,
    },
    choice2: {
      value: "Tableau",
      label: "Tableau",
      selected: false,
    },
    choice3: {
      value: "SQL",
      label: "SQL",
      selected: false,
    },
    choice4: {
      value: "Python",
      label: "Python",
      selected: false,
    },
    choice5: {
      value: "Alteryx",
      label: "Alteryx",
      selected: false,
    },
    choice6: {
      value: "Collibra",
      label: "Collibra",
      selected: false,
    },
    choice7: {
      value: "Snowflake",
      label: "Snowflake",
      selected: false,
    },
    choice8: {
      value: "R",
      label: "R",
      selected: false,
    },
    choice9: {
      value: "Excel",
      label: "Excel",
      selected: false,
    },
    choice10: {
      value: "Power Automate",
      label: "Power Automate",
      selected: false,
    },
    choice11: {
      value: "Azure",
      label: "Azure",
      selected: false,
    },
    choice12: {
      value: "AWS",
      label: "AWS",
      selected: false,
    },
  });

  const handleRangeSelect = (optionKey) => {
    const updatedRange = { ...choices };
    Object.keys(updatedRange).forEach((key) => {
      updatedRange[key].selected = key === optionKey;
    });
    setChoices(updatedRange);
    const selectedRange = updatedRange[optionKey].value;
    setValue("choiceType", selectedRange);
    setFormData({ ...formData, choiceType: selectedRange });
  };

  const isRangeSelected = Object.values(choices).some(
    (choice) => choice.selected
  );

  useEffect(() => {
    const updatedRange = { ...choices };
    Object.keys(updatedRange).forEach((key) => {
      updatedRange[key].selected =
        updatedRange[key].value === formData.choiceType;
    });
  }, [formData.choiceType]);

  return (
    <div>
      <div className="space-y-4">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          Choice of Tool Select below:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2  gap-y-5">
          {Object.keys(choices).map((key) => {
            const range = choices[key];
            return (
              <div
                key={range.value}
                className="flex items-center"
                onClick={() => handleRangeSelect(key)}
              >
                <input
                  type="radio"
                  name="choiceType"
                  value={range.value}
                  className="appearance-none"
                  {...register("choiceType", { required: true })}
                />
                {range.selected ? (
                  <MdCheckBox className="text-[#4F4F4F]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-[#4F4F4F]" />
                )}
                <label htmlFor="industryType" className="text-sm ps-2">
                  {range.label}
                </label>
              </div>
            );
          })}
        </div>

        {!isRangeSelected && errors.choiceType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataChoicezOfTool;
