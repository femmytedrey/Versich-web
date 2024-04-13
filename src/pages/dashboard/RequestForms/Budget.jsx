import { useState } from "react";
import currencies from "../../../assets/currencies";
import { IoChevronDownOutline } from "react-icons/io5";

const Budget = ({ register, errors, setValue, formData, setFormData }) => {
  const [budgets, setBudgets] = useState({
    Budget_Less_Than_1k: {
      value: "0 - 999",
      label: "0 - 999",
      selected: false,
    },
    Budget_1k_To_10k: {
      value: "1000 - 10000",
      label: "1000 - 10000",
      selected: false,
    },
    Budget_10k_To_50k: {
      value: "10000 - 50000",
      label: "10000 - 50000",
      selected: false,
    },
    Budget_More_Than_50k: {
      value: "More than 50000",
      label: "More than 50000",
      selected: false,
    },
    Other: {
      value: "industryOtherInputValue",
      label: "Other",
      selected: false,
    },
  });
  
  const [selectedCurrency, setSelectedCurrency] = useState(
    formData.selectedCurrency || currencies.find(currency => currency.code === "USD")
  );
  const [openList, setOpenList] = useState(false);
  const handleCurrencySelection = (currency) => {
    setSelectedCurrency(currency);
    setValue("selectedCurrency", currency);
    setFormData({ ...formData, selectedCurrency: currency });
    setOpenList(false);
  };
  const toggleList = () => {
    setOpenList(!openList);
  };
  
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
              id="selectedCurrency"
              placeholder="Select Service"
              className="outline-none border-none cursor-pointer w-full text-sm "
              value={selectedCurrency.code} // Use the code property for the input value
              readOnly
              {...register("selectedCurrency")}
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
                <div key={budget.value} className="flex items-center">
                  <input type="radio" name="budgetOption" value={budget.value} />
                  <label htmlFor="budgetOption" className="text-sm ps-2">{budget.label}</label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
