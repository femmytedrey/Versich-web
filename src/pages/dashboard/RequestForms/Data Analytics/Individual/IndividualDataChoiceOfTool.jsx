import { useEffect, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const IndividualDataChoicezOfTool = ({
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
      value: "Informatica",
      label: "Informatica",
      selected: false,
    },
    choice7: {
      value: "Celligo",
      label: "Celligo",
      selected: false,
    },
    choice8: {
      value: "Collibra",
      label: "Collibra",
      selected: false,
    },
    choice9: {
      value: "Oracle",
      label: "Oracle",
      selected: false,
    },
    choice10: {
      value: "Snowflake",
      label: "Snowflake",
      selected: false,
    },
    choice11: {
      value: "R",
      label: "R",
      selected: false,
    },
    choice12: {
      value: "Excel",
      label: "Excel",
      selected: false,
    },
    choice13: {
      value: "Power Automate",
      label: "Power Automate",
      selected: false,
    },
    choice14: {
      value: "Azure",
      label: "Azure",
      selected: false,
    },
    choice15: {
      value: "AWS",
      label: "AWS",
      selected: false,
    },
  });

  const handleCheckboxSelect = (optionKey) => {
    const updatedChoices = { ...choices };
    updatedChoices[optionKey].selected = !updatedChoices[optionKey].selected;
    setChoices(updatedChoices);

    const selectedChoices = Object.keys(updatedChoices)
      .filter((key) => updatedChoices[key].selected)
      .map((key) => updatedChoices[key].value);

    setValue("IndividualChoiceType", selectedChoices);
    setFormData({ ...formData, IndividualChoiceType: selectedChoices });
  };

  const isAnySelected = Object.values(choices).some(
    (choice) => choice.selected
  );

  useEffect(() => {
    if (formData.IndividualChoiceType) {
      const updatedChoices = { ...choices };
      formData.IndividualChoiceType.forEach((selected) => {
        Object.keys(updatedChoices).forEach((key) => {
          if (updatedChoices[key].value === selected) {
            updatedChoices[key].selected = true;
          }
        });
      });
      setChoices(updatedChoices);
    }
  }, [formData.IndividualChoiceType]);

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
                onClick={() => handleCheckboxSelect(key)}
              >
                <input
                  type="checkbox"
                  name={range.value}
                  checked={range.selected}
                  className="appearance-none"
                  {...register("IndividualChoiceType", { required: true })}
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

        {!isAnySelected && errors.IndividualChoiceType && (
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

export default IndividualDataChoicezOfTool;
