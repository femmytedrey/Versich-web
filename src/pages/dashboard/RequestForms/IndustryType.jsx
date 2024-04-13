import { useEffect, useState } from "react";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";

const IndustryType = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [industryOtherInputValue, setIndustryOtherInputValue] = useState(
    sessionStorage.getItem("industryOtherInputValue") || ""
  );
  const [industries, setIndustries] = useState({
    Business: {
      value: "Business services",
      label: "Business services",
      selected: false,
    },
    Creative: {
      value: "Creative industries",
      label: "Creative industries",
      selected: false,
    },
    Entertainment: {
      value: "Entertainment & events",
      label: "Entertainment & events",
      selected: false,
    },
    Financial: {
      value: "Financial services",
      label: "Financial services",
      selected: false,
    },
    Health: {
      value: "Health & fitness",
      label: "Health & fitness",
      selected: false,
    },
    Home: {
      value: "Home services",
      label: "Home services",
      selected: false,
    },
    Restaurant: {
      value: "Restaurant/food",
      label: "Restaurant/food",
      selected: false,
    },
    other: {
      value: industryOtherInputValue,
      label: "Other",
      selected: false,
    },
  });

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleIndustrySelect = (optionKey) => {
    const updatedIndustry = { ...industries };
    Object.keys(updatedIndustry).forEach((key) => {
      updatedIndustry[key].selected = key === optionKey;
    });
    setIndustries(updatedIndustry);
    const selectedValue = updatedIndustry[optionKey].value;
    setValue("industryType", selectedValue);
    setFormData({ ...formData, industryType: selectedValue });
    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("industryOtherInputValue");
      setIndustryOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setIndustryOtherInputValue(value);
    const updatedIndustry = {
      ...industries,
      other: { ...industries.other, value },
    };
    setIndustries(updatedIndustry);
    setValue("industryType", value);
    setFormData({ ...formData, industryType: value });

    sessionStorage.setItem("industryOtherInputValue", value);
  };

  useEffect(() => {
    const updatedIndustry = { ...industries };
    Object.keys(updatedIndustry).forEach((key) => {
      updatedIndustry[key].selected =
        updatedIndustry[key].value === formData.industryType;
    });
    if (industries.other.value !== "" && industries.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.industryType, industryOtherInputValue]);

  const isIndustrySelected = Object.values(industries).some(
    (industry) => industry.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">What industry do you operate in?</p>
        <div className="space-y-3">
          {Object.keys(industries).map((key) => {
            const industry = industries[key];
            return (
              <div
                key={industry.value}
                className="flex items-center"
                onClick={() => handleIndustrySelect(key)}
              >
                <input
                  type="radio"
                  name="industryType"
                  value={industry.value}
                  className="appearance-none"
                  {...register("industryType", {
                    required: true,
                    validate: {
                      otherInput: () => {
                        if (
                          industries.other.selected &&
                          industries.other.value.trim() === ""
                        ) {
                          return false;
                        }
                        return true;
                      },
                    },
                  })}
                />
                {industry.selected ? (
                  <IoMdRadioButtonOn className="text-[#4F4F4F]" />
                ) : (
                  <IoMdRadioButtonOff className="text-[#4F4F4F]" />
                )}
                <label htmlFor="industryType" className="text-sm ps-2">
                  {industry.label}
                </label>
              </div>
            );
          })}
          <div className="flex gap-x-2 items-center">
            {showOtherInput && (
              <input
                type="text"
                name="otherOption"
                placeholder="other"
                className="border border-versich-border py-2 px-3 flex-1 rounded-lg outline-none"
                onChange={handleInputChange}
                value={industryOtherInputValue}
              />
            )}
          </div>
        </div>
        {errors.industryType?.type === "otherInput" && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">
              Please enter a value for Other
            </p>
          </div>
        )}
        {!isIndustrySelected && errors.industryType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndustryType;
