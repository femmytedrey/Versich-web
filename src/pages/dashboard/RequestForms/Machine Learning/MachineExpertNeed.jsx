import { useEffect, useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const MachineExpertNeed = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [expertNeed, SetExpertNeed] = useState({
    choice1: {
      value: "Prompt Engineers",
      label: "Prompt Engineers",
      selected: false,
    },
    choice2: {
      value: "Machine learning engineers",
      label: "Machine learning engineers",
      selected: false,
    },
    choice3: {
      value: "AI researchers",
      label: "AI researchers",
      selected: false,
    },
    choice4: {
      value: "Cybersecurity and other AI related services",
      label: "Cybersecurity and other AI related services",
      selected: false,
    },
  });

  const handleExpertSelect = (optionKey) => {
    const updatedExpert = { ...expertNeed };
    Object.keys(updatedExpert).forEach((key) => {
      updatedExpert[key].selected = key === optionKey;
    });
    SetExpertNeed(updatedExpert);
    const selectedExpert = updatedExpert[optionKey].value;
    setValue("expertType", selectedExpert);
    setFormData({ ...formData, expertType: selectedExpert });
  };

  const isExpertSelected = Object.values(expertNeed).some(
    (option) => option.selected
  );

  useEffect(() => {
    const updatedExpert = { ...expertNeed };
    Object.keys(updatedExpert).forEach((key) => {
      updatedExpert[key].selected =
        updatedExpert[key].value === formData.expertType;
    });
  }, [formData.expertType]);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What is your business/organization size?
        </p>
        <div className="space-y-3">
          {Object.keys(expertNeed).map((key) => {
            const expert = expertNeed[key];
            return (
              <div
                key={expert.value}
                className="flex items-center"
                onClick={() => handleExpertSelect(key)}
              >
                <input
                  type="radio"
                  name="expertType"
                  value={expert.value}
                  className="appearance-none"
                  {...register("expertType", { required: true })}
                />
                {expert.selected ? (
                  <IoMdRadioButtonOn className="text-[#4F4F4F]" />
                ) : (
                  <IoMdRadioButtonOff className="text-[#4F4F4F]" />
                )}
                <label htmlFor="expertType" className="text-sm ps-2">
                  {expert.label}
                </label>
              </div>
            );
          })}
        </div>

        {!isExpertSelected && errors.expertType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MachineExpertNeed;
