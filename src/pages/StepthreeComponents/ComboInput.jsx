import { useEffect, useState, useRef } from "react";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ServiceImages from "../../assets/ServiceImages";

const ComboInput = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const comboInputRef = useRef(null);

  const defaultOptions = ServiceImages.map((service) => service.name);

  const [filteredOptions, setFilteredOptions] = useState(defaultOptions);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

    const filtered = defaultOptions.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelectedOptions) => [
      ...prevSelectedOptions,
      option,
    ]);
    setFilteredOptions((prevFilteredOptions) =>
      prevFilteredOptions.filter((o) => o !== option)
    );
    setIsOpen(false);
  };

  useEffect(() => {
    onSelect(selectedOptions);
  }, [selectedOptions, onSelect]);

  const removeSelection = (optionToRemove) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter((option) => option !== optionToRemove)
    );
    setFilteredOptions((prevFilteredOptions) => [
      ...prevFilteredOptions,
      optionToRemove,
    ]);
  };

  const handleClickOutside = (event) => {
    if (
      comboInputRef.current &&
      !comboInputRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleIconClick = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-y-4 mt-2" ref={comboInputRef}>
      {selectedOptions.length > 0 && (
        <div className="flex gap-x-4 flex-wrap gap-y-2">
          {selectedOptions.map((option) => (
            <button
              className="flex items-center gap-x-2 hover:gap-x-4 hover:bg-versich-blue-hover transition-all ease-out duration-600 py-2 rounded-2xl text-sm text-white px-6 bg-versich-blue"
              key={option}
            >
              {option}
              <MdClose onClick={() => removeSelection(option)} />
            </button>
          ))}
        </div>
      )}
      <div className="relative z-50">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search Services..."
          onClick={() => setIsOpen(true)}
          className="relative w-full h-10 rounded-md border-[1px] border-versich-border px-3"
          name="selectedServices"
        />
        <button
          onClick={handleIconClick}
          className={`absolute top-3 right-4 text-xl transition-transform ease-in duration-600 transform ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        >
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowDown />}
        </button>

        {isOpen && (
          <div className="absolute bg-white mt-2 overflow-y-auto max-h-48 w-full rounded-md border-[1px] border-versich-border">
            {filteredOptions.map((option) => (
              <ul key={option}>
                <li
                  onClick={() => handleOptionClick(option)}
                  className="p-2 border-b border-gray-200"
                >
                  {option}
                </li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboInput;
