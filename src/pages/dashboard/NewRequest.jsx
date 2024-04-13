import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SelectService from "./RequestForms/SelectService";
import ServiceRequirement from "./RequestForms/ServiceRequirement";
import ServiceNeeds from "./RequestForms/ServiceNeeds";
import BusinessType from "./RequestForms/BusinessType";
import IndustryType from "./RequestForms/IndustryType";
import LiveDecision from "./RequestForms/LiveDecision";
import Budget from "./RequestForms/Budget";
import icon from "../../assets/icons/office 1.png";
import icon1 from "../../assets/icons/office 2.png";
import DashboardStepButton from "../../components/Buttons/DashboardStepButton";

const NewRequest = () => {
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
      <Budget
        key="budget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    ],
    "Mobile App": [],
    "Data and Analytics": [],
    "Software Development": [],
    "Finance Transformation": [],
    "Machine learning and AI": [],
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
        sessionStorage.clear();
        alert("Successfully submitted");
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

  const getCurrentFormTextAndIcon = () => {
    switch (selectedService) {
      case "":
        return { icon: icon, text: "Select your service" };
      case "Web design and development":
        switch (page) {
          case 0:
            return { icon: icon, text: "Text for SelectService" };
          case 1:
            return { icon: icon1, text: "Text for ServiceRequirement" };
          case 2:
            return { icon: icon, text: "Text for ServiceNeeds" };
          case 3:
            return { icon: icon1, text: "Text for BusinessType" };
          case 4:
            return { icon: icon, text: "Text for IndustryType" };
          case 5:
            return { icon: icon, text: "Text for LiveDecision" };
          case 6:
            return { icon: icon, text: "Text for Budget" };
          default:
            return { icon: null, text: null };
        }
      case "Mobile App":
      case "Data and Analytics":
      case "Software Development":
      case "Finance Transformation":
      case "Machine learning and AI":
        return { icon: icon, text: "Select your service" };
      default:
        return { icon: null, text: null };
    }
  };
  
  

  const { icon: currentIcon, text: currentText } = getCurrentFormTextAndIcon();

  return (
    <div className="flex justify-center my-8 mx-16">
      <div className="min-h-[30rem] w-[49rem] border flex rounded-lg shadow-lg overflow-hidden">
        <div className="bg-versich-dark-blue h-full flex justify-center items-center flex-col text-white w-[300px] px-12 gap-y-3">
          <img src={currentIcon} alt="icon" className="h-32" />
          <p>{currentText}</p>
        </div>

        <div className="flex justify-center text-start flex-1">
          <div className="flex flex-col w-[400px] py-6 bg-white p-3 rounded-md gap-3 flex-1 px-4">
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

            <hr className="pb-3" />

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
      </div>
    </div>
  );
};

export default NewRequest;
