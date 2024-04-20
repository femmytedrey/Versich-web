import { useState, useEffect } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const ErpFinanceNeededTools = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [financeneedOtherInputValue, setFinanceneedOtherInputValue] = useState(
    sessionStorage.getItem("financeneedOtherInputValue") || ""
  );

  const [projectCommencements, setProjectCommencements] = useState({
    option1: {
      value: "Salesforce",
      label: "Salesforce",
      selected: false,
    },
    option2: {
      value: "CPQ",
      label: "CPQ",
      selected: false,
    },
    option3: {
      value: "Netsuite",
      label: "Netsuite",
      selected: false,
    },
    option4: {
      value: "Oracle",
      label: "Oracle",
      selected: false,
    },
    option5: {
      value: "Anaplan",
      label: "Anaplan",
      selected: false,
    },
    option6: {
      value: "Xero",
      label: "Xero",
      selected: false,
    },
    option7: {
      value: "Quick books",
      label: "Quick books",
      selected: false,
    },
    option8: {
      value: "SAP",
      label: "SAP",
      selected: false,
    },
    option9: {
      value: "Power BI",
      label: "Power BI",
      selected: false,
    },
    option10: {
      value: "Tableau",
      label: "Tableau",
      selected: false,
    },
    option11: {
      value: "IBM",
      label: "IBM",
      selected: false,
    },
    other: {
      value: financeneedOtherInputValue,
      label: "Other",
      selected: false,
    },
  });

  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleOptionSelect = (optionKey) => {
    const updatedOptions = { ...projectCommencements };
    updatedOptions[optionKey].selected = !updatedOptions[optionKey].selected;

    setProjectCommencements(updatedOptions);

    const selectedValues = Object.keys(updatedOptions)
      .filter((key) => updatedOptions[key].selected)
      .map((key) => updatedOptions[key].value);

    setValue("erpFinanceTools", selectedValues);
    setFormData({ ...formData, erpFinanceTools: selectedValues });

    setShowOtherInput(updatedOptions.other.selected);

    if (!updatedOptions.other.selected) {
      sessionStorage.removeItem("financeneedOtherInputValue");
      setFinanceneedOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFinanceneedOtherInputValue(value);

    const updatedOptions = {
      ...projectCommencements,
      other: { ...projectCommencements.other, value },
    };

    setProjectCommencements(updatedOptions);

    const selectedValues = Object.keys(updatedOptions)
      .filter((key) => updatedOptions[key].selected)
      .map((key) => updatedOptions[key].value);

    setValue("erpFinanceTools", selectedValues);
    setFormData({ ...formData, erpFinanceTools: selectedValues });

    sessionStorage.setItem("financeneedOtherInputValue", value);
  };

  useEffect(() => {
    const updatedOptions = { ...projectCommencements };
    Object.keys(updatedOptions).forEach((key) => {
      updatedOptions[key].selected =
        formData.erpFinanceTools &&
        formData.erpFinanceTools.includes(updatedOptions[key].value);
    });

    setProjectCommencements(updatedOptions);
    setShowOtherInput(updatedOptions.other.selected);
  }, [formData.erpFinanceTools, financeneedOtherInputValue]);

  const isProjectCommencementSelected = Object.values(
    projectCommencements
  ).some((projectCommencement) => projectCommencement.selected);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-versich-dark-blue font-semibold pb-2">
          What financial system do you want to implement?
        </p>
        <div className="space-y-3 h-[290px] overflow-y-scroll">
          {Object.keys(projectCommencements).map((key) => {
            const projectCommencement = projectCommencements[key];
            return (
              <div
                key={projectCommencement.value}
                className="flex items-center"
                onClick={() => handleOptionSelect(key)}
              >
                <input
                  type="checkbox"
                  name={projectCommencement.value}
                  checked={projectCommencement.selected}
                  className="appearance-none"
                  {...register("ProjectCommencement", {
                    required: true,
                    validate: {
                      otherInput: () => {
                        if (
                          projectCommencements.other.selected &&
                          projectCommencements.other.value.trim() === ""
                        ) {
                          return false;
                        }
                        return true;
                      },
                    },
                  })}
                />
                {projectCommencement.selected ? (
                  <MdCheckBox className="text-[#4F4F4F]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-[#4F4F4F]" />
                )}
                <label
                  htmlFor={projectCommencement.value}
                  className="text-sm ps-2"
                >
                  {projectCommencement.label}
                </label>
              </div>
            );
          })}
          {showOtherInput && (
            <div className="flex gap-x-2 items-center">
              <input
                type="text"
                name="otherOption"
                placeholder="other"
                className="border border-versich-border py-2 px-3 flex-1 rounded-lg outline-none"
                onChange={handleInputChange}
                value={financeneedOtherInputValue}
              />
            </div>
          )}
        </div>

        {errors.ProjectCommencement?.type === "otherInput" && (
          <p className="text-red-500 text-sm">Please enter a value for Other</p>
        )}

        {!isProjectCommencementSelected && errors.ProjectCommencement && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please select an option</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErpFinanceNeededTools;
