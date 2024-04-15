import { useState } from "react";
import ServiceList from "../../../assets/serviceList";

const SelectService = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
  setSelectedService,
}) => {
  const [selectedService, setSelectedServiceLocal] = useState(
    formData.selectedService || ""
  );

  const handleServiceSelect = (service) => {
    setSelectedServiceLocal(service);
    setValue("selectedService", service);
    setFormData({ ...formData, selectedService: service });
    setSelectedService(service);
  };

  return (
    <div className="relative space-y-2">
      <label
        htmlFor="serviceSelect"
        className="text-versich-dark-blue font-semibold pb-2 flex justify-center text-lg"
      >
        What service do you need?
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 py-8 px-4">
        {ServiceList.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col justify-center items-center border ${
              selectedService === service.name
                ? "border-versich-blue border-2 bg-versich-blue/20"
                : "border-versich-border"
            } cursor-pointer rounded-lg gap-y-2 py-4 h-44`}
            onClick={() => handleServiceSelect(service.name)}
          >
            <input
              type="radio"
              name="selectedService"
              value={service.name}
              className="appearance-none"
              {...register("selectedService", { required: true })}
            />
            <img src={service.img} alt={service.name} />
            <label
              htmlFor={service.name}
              className="ml-2 text-sm text-versich-dark-blue text-center"
            >
              {service.name}
            </label>
          </div>
        ))}
      </div>
      {errors.selectedService && selectedService.trim() === "" && (
        <p className="text-red-500 text-sm">Please select a service.</p>
      )}
    </div>
  );
};

export default SelectService;
