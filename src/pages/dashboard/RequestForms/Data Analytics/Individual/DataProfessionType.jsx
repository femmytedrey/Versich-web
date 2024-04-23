import { useEffect, useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

const DataProfessionType = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [types, setTypes] = useState({
    option1: {
      value: "A freelancer/professional to teach data analytics",
      label: "A freelancer/professional to teach data analytics",
      selected: false,
    },
    option2: {
      value: "Render assistance for a project",
      label: "Render assistance for a project",
      selected: false,
    },
  });

  const handleProfessionSelect = (optionKey) => {
    const updatedProfession = { ...types };
    Object.keys(updatedProfession).forEach((key) => {
      updatedProfession[key].selected = key === optionKey;
    });
    setTypes(updatedProfession);
    const selectedProfession = updatedProfession[optionKey].value;
    setValue("professionType", selectedProfession);
    setFormData({ ...formData, professionType: selectedProfession });
  };

  const isProfessionSelected = Object.values(types).some(
    (profession) => profession.selected
  );

  useEffect(() => {
    const updatedProfession = { ...types };
    Object.keys(updatedProfession).forEach((key) => {
      updatedProfession[key].selected =
        updatedProfession[key].value === formData.professionType;
    });
  }, [formData.professionType]);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">
          What do you need?
        </p>
        <div className="">
          {Object.keys(types).map((key) => {
            const type = types[key];
            return (
              <div
                key={type.value}
                className="flex items-center cursor-pointer"
                onClick={() => handleProfessionSelect(key)}
              >
                <input
                  type="radio"
                  name="professionType"
                  value={type.value}
                  className="appearance-none"
                  {...register("professionType", { required: true })}
                />
                {type.selected ? (
                  <IoMdRadioButtonOn className="text-[#4F4F4F]" />
                ) : (
                  <IoMdRadioButtonOff className="text-[#4F4F4F]" />
                )}
                <label
                  htmlFor="industryType"
                  className="text-sm ps-2 cursor-pointer w-full py-2 hover:text-versich-blue-hover transition-all duration-300"
                >
                  {type.label}
                </label>
              </div>
            );
          })}
        </div>

        {!isProfessionSelected && errors.professionType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataProfessionType;
