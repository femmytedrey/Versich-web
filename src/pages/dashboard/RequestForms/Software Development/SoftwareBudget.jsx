import React, { useState, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import currencies from "../../../../assets/currencies";

const SoftwareBudget = ({ register, errors, setValue, formData, setFormData }) => {
  const [budgetOtherInputValue, setBudgetOtherInputValue] = useState(
    sessionStorage.getItem("budgetOtherInputValue") || ""
  );
  const [budgets, setBudgets] = useState({
    Budget_1k_To_10k: {
      value: "1000 - 10000",
      label: "1000 - 10000",
      selected: false,
    },
    Budget_10k_To_50k: {
      value: "10000 - 100000",
      label: "10000 - 100000",
      selected: false,
    },
    Budget_100k_To_500k: {
      value: "100000 - 500000",
      label: "100000 - 500000",
      selected: false,
    },
    Budget_More_Than_50k: {
      value: "More than 500k",
      label: "More than 500k",
      selected: false,
    },
    other: {
      value: budgetOtherInputValue,
      label: "Other",
      selected: false,
    },
  });

  const [showOtherInput, setShowOtherInput] = useState(false);
  const [softareSelectedCurrency, setSoftwareSelectedCurrency] = useState(
    formData.softareSelectedCurrency ||
      currencies.find((currency) => currency.code === "USD")
  );
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    const updatedBudgets = { ...budgets };
    Object.keys(updatedBudgets).forEach((key) => {
      updatedBudgets[key].selected =
        updatedBudgets[key].value === formData.softwareBudgetOption;
    });
    if (budgets.other.value !== "" && budgets.other.selected) {
      setShowOtherInput(true);
    }
  }, [formData.softwareBudgetOption, budgetOtherInputValue]);

  const handleBudgetSelect = (optionKey) => {
    const updatedBudgets = { ...budgets };
    Object.keys(updatedBudgets).forEach((key) => {
      updatedBudgets[key].selected = key === optionKey;
    });
    setBudgets(updatedBudgets);

    const selectedValue = updatedBudgets[optionKey].value;
    setValue("softwareBudgetOption", selectedValue);
    setFormData({ ...formData, softwareBudgetOption: selectedValue });

    setShowOtherInput(optionKey === "other");

    if (optionKey !== "other") {
      sessionStorage.removeItem("budgetOtherInputValue");
      setBudgetOtherInputValue("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setBudgetOtherInputValue(value);
    const updatedBudgets = {
      ...budgets,
      other: { ...budgets.other, value },
    };
    setBudgets(updatedBudgets);

    setValue("softwareBudgetOption", value);
    setFormData({ ...formData, softwareBudgetOption: value });

    sessionStorage.setItem("budgetOtherInputValue", value);
  };

  const handleCurrencySelection = (currency) => {
    setSoftwareSelectedCurrency(currency);
    setValue("softareSelectedCurrency", currency);
    setFormData({ ...formData, softareSelectedCurrency: currency });
    setOpenList(false);
  };

  const toggleList = () => {
    setOpenList(!openList);
  };

  const isBudgetSelected = Object.values(budgets).some(
    (budget) => budget.selected
  );

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-versich-dark-blue font-semibold pb-2">
          What is your estimated budget for this project?
        </p>
        <div className="relative space-y-3">
          <div
            onClick={toggleList}
            className="w-full border px-5 py-3 flex justify-between items-center cursor-pointer rounded-lg"
          >
            <input
              type="text"
              id="softareSelectedCurrency"
              placeholder="Select Currency"
              className="outline-none border-none cursor-pointer w-full text-sm "
              value={softareSelectedCurrency.code}
              readOnly
              {...register("softareSelectedCurrency")}
            />
            <IoChevronDownOutline
              className={`transform ${
                openList ? "rotate-180" : "rotate-0"
              } transition-transform duration-300`}
            />
          </div>
          <div
            className={`absolute bg-white border w-full overflow-hidden overflow-y-scroll transition-all duration-300 ${
              openList ? "h-auto max-h-36" : "h-0 max-h-0 border-none"
            }`}
          >
            {openList && (
              <ul className="max-h-36">
                {currencies.map((data) => (
                  <li
                    key={data.id}
                    onClick={() => handleCurrencySelection(data)}
                    className="hover:bg-versich-blue/20 p-2 text-sm"
                  >
                    {`${data.symbol} ${data.code}`}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="space-y-3">
            {Object.keys(budgets).map((key) => {
              const budget = budgets[key];
              return (
                <div
                  key={budget.value}
                  className="flex items-center"
                  onClick={() => handleBudgetSelect(key)}
                >
                  <input
                    type="radio"
                    name="softwareBudgetOption"
                    value={budget.value}
                    className="appearance-none"
                    {...register("softwareBudgetOption", {
                      required: true,
                      validate: {
                        otherInput: () => {
                          if (
                            budgets.other.selected &&
                            budgets.other.value.trim() === ""
                          ) {
                            return false;
                          }
                          return true;
                        },
                      },
                    })}
                  />
                  {budget.selected ? (
                    <IoMdRadioButtonOn className="text-[#4F4F4F]" />
                  ) : (
                    <IoMdRadioButtonOff className="text-[#4F4F4F]" />
                  )}
                  <label htmlFor="softwareBudgetOption" className="text-sm ps-2">
                    {budget.label}
                  </label>
                </div>
              );
            })}
            <div className="flex gap-x-2 items-center">
              {showOtherInput && (
                <input
                  type="text"
                  name="otherOption"
                  placeholder="Other"
                  className="border border-versich-border py-2 px-3 flex-1 rounded-lg outline-none"
                  onChange={handleInputChange}
                  value={budgetOtherInputValue}
                />
              )}
            </div>
          </div>
          {errors.softwareBudgetOption?.type === "otherInput" && (
            <div className="pb-3">
              <p className="text-red-500 text-sm">
                Please enter a value for Other
              </p>
            </div>
          )}
          {!isBudgetSelected && errors.softwareBudgetOption && (
            <div className="pb-3">
              <p className="text-red-500 text-sm">Please select an option</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SoftwareBudget;
