import { useEffect, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const DataChoicezOfTool = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const initialChoices = {
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
  };

  const [choices, setChoices] = useState(initialChoices);
  const [searchInput, setSearchInput] = useState("");

  const handleCheckboxSelect = (optionKey) => {
    const updatedChoices = { ...choices };
    updatedChoices[optionKey].selected = !updatedChoices[optionKey].selected;
    setChoices(updatedChoices);

    const selectedChoices = Object.keys(updatedChoices)
      .filter((key) => updatedChoices[key].selected)
      .map((key) => updatedChoices[key].value);

    setValue("choiceType", selectedChoices);
    setFormData({ ...formData, choiceType: selectedChoices });
  };

  useEffect(() => {
    if (formData.choiceType) {
      const updatedChoices = { ...initialChoices };
      formData.choiceType.forEach((selected) => {
        Object.keys(updatedChoices).forEach((key) => {
          if (updatedChoices[key].value === selected) {
            updatedChoices[key].selected = true;
          }
        });
      });
      setChoices(updatedChoices);
    }
  }, [formData.choiceType]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredChoices = Object.values(choices)
    .filter(
      (choice) =>
        choice.label.toLowerCase().includes(searchInput.toLowerCase()) ||
        choice.value.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => {
      if (a.selected === b.selected) {
        return 0;
      }
      return a.selected ? -1 : 1;
    });

  return (
    <div>
      <div className="space-y-4">
        <p className="text-versich-dark-blue font-semibold pb-2">
          Choice of Tool: Select below
        </p>
        <input
          type="text"
          className="w-full border py-2 px-2 rounded-lg text-sm outline-none"
          placeholder="Search for your choice of tool"
          value={searchInput}
          onChange={handleInputChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-5">
          {filteredChoices.map((choice, index) => (
            <div
              key={index}
              className="flex items-center"
              onClick={() => handleCheckboxSelect(`choice${index + 1}`)}
            >
              <input
                type="checkbox"
                name={choice.value}
                checked={choice.selected}
                className="appearance-none"
                {...register("choiceType", { required: true })}
              />
              {choice.selected ? (
                <MdCheckBox className="text-[#4F4F4F]" />
              ) : (
                <MdCheckBoxOutlineBlank className="text-[#4F4F4F]" />
              )}
              <label htmlFor={choice.value} className="text-sm ps-2">
                {choice.label}
              </label>
            </div>
          ))}
        </div>
        {!filteredChoices.some((choice) => choice.selected) && errors.choiceType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select at least one option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataChoicezOfTool;
