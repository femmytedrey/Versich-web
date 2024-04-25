import { useEffect, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const SystemAdministratinoFinanceNeededTools = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const [financeServiceNeed, setFinanceServiceNeed] = useState([
    { value: "Excel", label: "Excel", selected: false },
    { value: "Anaplan", label: "Anaplan", selected: false },
    { value: "Prophix", label: "Prophix", selected: false },
    {
      value: "Workday Adaptive Planning",
      label: "Workday Adaptive Planning",
      selected: false,
    },
    { value: "Onestream", label: "Onestream", selected: false },
    {
      value: "Oracle Fusion Cloud",
      label: "Oracle Fusion Cloud",
      selected: false,
    },
    {
      value: "IBM Planning Analytics",
      label: "IBM Planning Analytics",
      selected: false,
    },
    {
      value: "Oracle Hyperion Planning",
      label: "Oracle Hyperion Planning",
      selected: false,
    },
    { value: "SAP", label: "SAP", selected: false },
    { value: "Power BI", label: "Power BI", selected: false },
    { value: "Tableau", label: "Tableau", selected: false },
    { value: "Vena", label: "Vena", selected: false },
    { value: "Alteryx", label: "Alteryx", selected: false },
    { value: "Informatica", label: "Informatica", selected: false },
    { value: "Sage", label: "Sage", selected: false },
    { value: "Xero", label: "Xero", selected: false },
    { value: "Datarails", label: "Datarails", selected: false },
    { value: "Quickbooks", label: "Quickbooks", selected: false },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const storedOptions = formData.SystemFinanceTools || [];
    const updatedOptions = financeServiceNeed.map((option) => ({
      ...option,
      selected: storedOptions.includes(option.value),
    }));
    setFinanceServiceNeed(updatedOptions);
    setSelectedOptions(updatedOptions.filter((option) => option.selected));
  }, [formData.SystemFinanceTools]);

  useEffect(() => {
    const results = financeServiceNeed.filter((option) =>
      option.label.toLocaleLowerCase().includes(searchTerm.toLowerCase())
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

    setFinanceServiceNeed(updatedOptions);

    const selectedOption = updatedOptions.find(
      (option) => option.label === optionKey
    );

    const updatedSelectedOptions = selectedOption.selected
      ? [...selectedOptions, selectedOption]
      : selectedOptions.filter((option) => option.label !== optionKey);

    setSelectedOptions(updatedSelectedOptions);

    const selectedServices = updatedSelectedOptions.map(
      (option) => option.value
    );

    setValue("SystemFinanceTools", selectedServices);
    setFormData({ ...formData, SystemFinanceTools: selectedServices });
    setSearchTerm("");
  };

  const isAnySelected = financeServiceNeed.some((option) => option.selected);

  const handleOptionDeselect = (optionKey) => {
    const updatedOptions = financeServiceNeed.map((option) => {
      if (option.label === optionKey) {
        option.selected = false;
      }
      return option;
    });

    setFinanceServiceNeed(updatedOptions);

    const updatedSelectedOptions = selectedOptions.filter(
      (option) => option.label !== optionKey
    );

    setSelectedOptions(updatedSelectedOptions);

    const selectedServices = updatedSelectedOptions.map(
      (option) => option.value
    );

    setValue("SystemFinanceTools", selectedServices);
    setFormData({ ...formData, SystemFinanceTools: selectedServices });
  };

  // useEffect(() => {
  //   console.log(searchTerm)
  // },[searchTerm])

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

        <div className="h-[290px] overflow-y-scroll">
          {searchResults.map((option) => {
            return (
              <div
                key={option.value}
                className="flex items-center cursor-pointer"
                onClick={() => handleCheckboxSelect(option.label)}
              >
                <input
                  type="checkbox"
                  checked={option.selected}
                  className="appearance-none"
                  {...register("SystemFinanceTools", { required: true })}
                />
                {option.selected ? (
                  <MdCheckBox className="text-[#4F4F4F]" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-[#4F4F4F]" />
                )}
                <label className="text-sm ps-2 cursor-pointer w-full py-2 hover:text-versich-blue-hover transition-all duration-300">
                  {option.label}
                </label>
              </div>
            );
          })}
        </div>

        {/* Organizing users selection */}
        <div className="w-full flex gap-x-2 flex-wrap gap-y-2">
          {selectedOptions.map((option) => (
            <div
              key={option.value}
              className="border-versich-lighter-blue/80 bg-anti-flash-white border-2 w-fit flex py-1 px-2 items-center gap-x-2 rounded-3xl cursor-pointer text-versich-lighter-blue/80 font-semibold"
              onClick={() => handleOptionDeselect(option.label)}
            >
              <p className="text-xs">{option.label}</p>
              <IoIosClose className="text-2xl" />
            </div>
          ))}
        </div>
        {!isAnySelected && errors.SystemFinanceTools && (
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

export default SystemAdministratinoFinanceNeededTools;
