import { IoChevronDownOutline } from "react-icons/io5";
import ServiceImages from "../../../assets/ServiceImages";
import { useState } from "react";

const SelectService = ({ register, errors, setValue }) => {
  const [openList, setOpenList] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const toggleList = () => {
    setOpenList(!openList);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setValue("selectedService", service);
    setOpenList(false);
  };

  return (
    <div className="relative space-y-2">
      <label htmlFor="serviceSelect" className="text-sm">
        What service do you need?
      </label>
      <div
        onClick={toggleList}
        className="w-full border px-5 py-2 flex justify-between items-center cursor-pointer rounded-lg"
      >
        <input
          type="text"
          id="serviceSelect"
          placeholder="Select Service"
          className="outline-none border-none cursor-pointer w-full text-xs"
          value={selectedService}
          readOnly
          {...register("selectedService", { required: true })}
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
            {ServiceImages.map((data) => (
              <li
                key={data.id}
                onClick={() => handleServiceSelect(data.name)}
                className="hover:bg-versich-blue/20 p-2 text-xs"
              >
                {data.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {errors.selectedService && selectedService.trim() === "" && (
        <p className="text-red-500 text-sm">Please select a service.</p>
      )}
    </div>
  );
};

export default SelectService;
