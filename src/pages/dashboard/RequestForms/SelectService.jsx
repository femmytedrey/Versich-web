import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";
import ServiceImages from "../../../assets/ServiceImages";
import icon from "../../../assets/icons/office 1.png";

const SelectService = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
  setSelectedService,
}) => {
  const [openList, setOpenList] = useState(false);
  const [selectedService, setSelectedServiceLocal] = useState(
    formData.selectedService || ""
  );

  const toggleList = () => {
    setOpenList(!openList);
  };

  const handleServiceSelect = (service) => {
    setSelectedServiceLocal(service);
    setValue("selectedService", service);
    setFormData({ ...formData, selectedService: service });
    setSelectedService(service);
    setOpenList(false);
  };

  return (
    <div className="relative space-y-2 mb-44">
      <label
        htmlFor="serviceSelect"
        className=" text-versich-dark-blue font-semibold pb-2"
      >
        What service do you need?
      </label>
      <div
        onClick={toggleList}
        className="w-full border px-5 py-3 flex justify-between items-center cursor-pointer rounded-lg"
      >
        <input
          type="text"
          id="serviceSelect"
          placeholder="Select Service"
          className="outline-none border-none cursor-pointer w-full text-sm"
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
          openList ? "h-48" : "h-0 max-h-0 border-none"
        }`}
      >
        {openList && (
          <ul className="max-h-36">
            {ServiceImages.map((data) => (
              <li
                key={data.id}
                onClick={() => handleServiceSelect(data.name)}
                className="hover:bg-versich-blue/20 p-2 text-sm"
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
