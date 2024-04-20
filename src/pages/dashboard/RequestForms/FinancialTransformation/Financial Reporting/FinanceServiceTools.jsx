import { useEffect, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const FinanceReportingFinanceNeededTools = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [financeServiceNeed, setFinanceServiceNeed] = useState([
    {
      value: "Excel",
      label: "Excel",
      selected: false,
    },
    {
      value: "Anaplan",
      label: "Anaplan",
      selected: false,
    },
    {
      value: "Prophix",
      label: "Prophix",
      selected: false,
    },
    {
      value: "Workday Adaptive planning",
      label: "Workday Adaptive planning",
      selected: false,
    },
    {
      value: "Onestream",
      label: "Onestream",
      selected: false,
    },
    {
      value: "Oracle Fusion cloud",
      label: "Oracle Fusion cloud",
      selected: false,
    },
    {
      value: "IBM Planning Analytics",
      label: "IBM Planning Analytics",
      selected: false,
    },
    {
      value: "Oracle Hyperion planning",
      label: "Oracle Hyperion planning",
      selected: false,
    },
    {
      value: "SAP",
      label: "SAP",
      selected: false,
    },
    {
      value: "Power BI",
      label: "Power BI",
      selected: false,
    },
    {
      value: "Tableau",
      label: "Tableau",
      selected: false,
    },
    {
      value: "Vena",
      label: "Vena",
      selected: false,
    },
    {
      value: "Alteryx",
      label: "Alteryx",
      selected: false,
    },
    {
      value: "Informatica",
      label: "Informatica",
      selected: false,
    },
    {
      value: "Sage",
      label: "Sage",
      selected: false,
    },
    {
      value: "Xero",
      label: "Xero",
      selected: false,
    },
    {
      value: "Datarails",
      label: "Datarails",
      selected: false,
    },
    {
      value: "Quickbooks",
      label: "Quickbooks",
      selected: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = financeServiceNeed.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, financeServiceNeed]);

  const handleCheckboxSelect = (optionKey) => {
    const updatedOptions = financeServiceNeed.map((option) => {
      if (option.label === optionKey) {
        option.selected = !option.selected;
      }
      return option;
    });

    const sortedOptions = updatedOptions.sort((a, b) =>
      a.selected === b.selected ? 0 : a.selected ? -1 : 1
    );

    setFinanceServiceNeed(sortedOptions);

    const selectedServices = sortedOptions
      .filter((option) => option.selected)
      .map((option) => option.value);

    setValue("financeTools", selectedServices);
    setFormData({ ...formData, financeTools: selectedServices });

    setSearchTerm("");
  };

  const isAnySelected = financeServiceNeed.some((option) => option.selected);

  return (
    <div>
      <div className="space-y-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="block w-full border border-gray-300 rounded-md px-4 py-2 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="space-y-3  h-[290px] overflow-y-scroll">
          {searchResults.map((option) => {
            return (
              <div
                key={option.value}
                className="flex items-center"
                onClick={() => handleCheckboxSelect(option.label)}
              >
                <input
                  type="checkbox"
                  checked={option.selected}
                  className="appearance-none"
                  {...register("financeTools", { required: true })}
                />
                {option.selected ? (
                  <MdCheckBox className="text-[#4F4F4F]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-[#4F4F4F]" />
                )}
                <label className="text-sm ps-2">{option.label}</label>
              </div>
            );
          })}
        </div>
        {!isAnySelected && errors.financeTools && (
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

export default FinanceReportingFinanceNeededTools;
