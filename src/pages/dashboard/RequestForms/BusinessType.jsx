import { useState } from "react";
import { IoMdRadioButtonOff } from "react-icons/io";
import { IoMdRadioButtonOn } from "react-icons/io";

const BusinessType = ({ register, errors, setValue }) => {
  const [types, setTypes] = useState({
    Personal: {
      value: "Personal project",
      label: "Personal project",
      selected: false,
    },
    SoleTrader: {
      value: "Sole trader/self-employed",
      label: "Sole trader/self-employed",
      selected: false,
    },
    SmallBusiness: {
      value: "Small business (1 - 9 employees)",
      label: "Small business (1 - 9 employees)",
      selected: false,
    },
    MediumBusiness: {
      value: "Medium business (10 - 29 employees)",
      label: "Medium business (10 - 29 employees)",
      selected: false,
    },
    LargeBusiness: {
      value: "Large business (30 - 99 employees)",
      label: "Large business (30 - 99 employees)",
      selected: false,
    },
    ExtraLargeBusiness: {
      value: "Extra large business (100 or more employees)",
      label: "Extra large business (100 or more employees)",
      selected: false,
    },
    Charity: {
      value: "Charity/non-profit",
      label: "Charity/non-profit",
      selected: false,
    },
    other: {
      value: "",
      label: "Other",
      selected: false,
    },
  });

  const handleInputChange = (event) => {
    const { value } = event.target;
    const updatedTypes = { ...types, other: { ...types.other, value } };
    setTypes(updatedTypes);
    setValue("businessType", value);
  };

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleTypeSelect = (optionKey) => {
    const updatedTypes = { ...types };
    Object.keys(updatedTypes).forEach((key) => {
      updatedTypes[key].selected = key === optionKey;
    });
    setTypes(updatedTypes);
    setValue("businessType", updatedTypes[optionKey].value);
    setShowOtherInput(optionKey === "other");
  };

  const isTypeSelected = Object.values(types).some((type) => type.selected);
  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-sm">What are your website needs?</p>
        <div className="space-y-3">
          {Object.keys(types).map((key) => {
            // Get the value of each key
            const type = types[key];
            return (
              <div
                key={type.value}
                className="flex items-center"
                onClick={() => handleTypeSelect(key)}
              >
                <input
                  type="radio"
                  name="businessType"
                  value={type.value}
                  className="appearance-none"
                  {...register("businessType", {
                    required: true,
                    validate: {
                      otherInput: () => {
                        if (
                          types.other.selected &&
                          types.other.value.trim() === ""
                        ) {
                          return false;
                        }
                        return true;
                      },
                    },
                  })}
                />
                {type.selected ? (
                  <IoMdRadioButtonOn className="text-[#4F4F4F]" />
                ) : (
                  <IoMdRadioButtonOff className="text-[#4F4F4F]" />
                )}
                <label htmlFor="businessType" className="text-sm ps-2">
                  {type.label}
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
              />
            )}
          </div>
        </div>
        {errors.businessType?.type === "otherInput" && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">
              Please enter a value for Other
            </p>
          </div>
        )}
        {!isTypeSelected && errors.businessType && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessType;
