import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";

import SelectService from "./RequestForms/SelectService";
import ServiceRequirement from "./RequestForms/ServiceRequirement";
import DashboardStepButton from "../../components/Buttons/DashboardStepButton";
import ServiceNeeds from "./RequestForms/ServiceNeeds";
import BusinessType from "./RequestForms/BusinessType";
import IndustryType from "./RequestForms/IndustryType";
import LiveDecision from "./RequestForms/LiveDecision";

const NewRequest = ({ onClose }) => {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({});
  const [selectedService, setSelectedService] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [serviceSelected, setServiceSelected] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formPagesByService = {
    "Web design and development": [
      <ServiceRequirement
        key="service-requirement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <ServiceNeeds
        key="service-needs"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <BusinessType
        key="business-type"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <IndustryType
        key="industry-type"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <LiveDecision
        key="live-decision"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    ],
    "Mobile App": [
      // Add the form components for Data and Analytics service here
    ],
    "Data and Analytics": [
      // Add the form components for Data and Analytics service here
    ],
    "Software Development": [
      // Add the form components for Software Development service here
    ],
    "Finance Transformation": [
      // Add the form components for Finance Transformation service here
    ],
    "Machine learning and AI": [
      // Add the form components for Machine learning and AI service here
    ],
  };

  useEffect(() => {
    if (serviceSelected) {
      const totalPages = formPagesByService[selectedService]?.length || 0;
      setTotalPages(totalPages);
      const calculateProgress = (page / totalPages) * 100;
      setProgress(calculateProgress);
    }
  }, [page, selectedService, formPagesByService, serviceSelected]);

  const handleContinue = handleSubmit((data) => {
    const updatedFormData = { ...formData, ...data };
    setFormData(updatedFormData);
    if (page < totalPages) {
      setPage(page + 1);
    } else {
      const buttonText = page === totalPages ? "Submit" : "Continue";
      if (buttonText === "Submit") {
        console.log(updatedFormData);
      }
    }
  });

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setValue("selectedService", service);
    setFormData({ ...formData, selectedService: service });
    setServiceSelected(true);
  };

  return (
    <div className="fixed top-[-20px] z-30 left-0 w-full h-screen bg-black/20 flex justify-center items-center px-6">
      <div className="flex flex-col w-[400px] py-6 bg-white p-3 rounded-md gap-3">
        <div className="flex justify-between">
          <p className="text-sm">Request detail</p>
          <IoIosClose className="text-2xl cursor-pointer" onClick={onClose} />
        </div>

        {/* Progress Bar */}
        {serviceSelected && page > 0 && (
          <div className="w-full h-1 bg-gray-300 rounded-lg overflow-hidden my-3">
            <div
              className="h-full bg-[#114B8A]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        <div className="flex-1">
          {page === 0 ? (
            <SelectService
              register={register}
              errors={errors}
              setValue={setValue}
              formData={formData}
              setFormData={setFormData}
              setSelectedService={handleServiceSelect}
            />
          ) : (
            formPagesByService[selectedService][page - 1]
          )}
        </div>

        <div className="w-full justify-between flex">
          <DashboardStepButton
            text="back"
            handleButtonClick={handleBack}
            disabled={page === 0}
          />
          <DashboardStepButton
            type="submit"
            handleButtonClick={handleContinue}
            text={page === totalPages ? "Submit" : "Continue"}
          />
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
