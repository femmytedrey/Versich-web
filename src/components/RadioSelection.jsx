import { useState } from "react";
import { MdRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

const RadioSelection = ({ label, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="space-y-2 text-start">
      <div>{label && <label>{label}</label>}</div>

      <div className="flex flex-col gap-y-5">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-x-3 cursor-pointer hover:text-versich-blue-hover"
          >
            <input
              type="radio"
              value={option.value}
              name={label}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
              className="appearance-none"
            />

            {selectedOption === option.value ? (
              <MdRadioButtonChecked className="text-versich-blue text-xl" />
            ) : (
              <MdOutlineRadioButtonUnchecked className="text-versich-blue text-xl" />
            )}
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioSelection;
