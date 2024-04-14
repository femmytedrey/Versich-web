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
import icon2 from "../../assets/icons/office 3.png";
import icon3 from "../../assets/icons/office 4.png";
import icon4 from "../../assets/icons/office 5.png";
import icon5 from "../../assets/icons/office 6.png";
import DashboardStepButton from "../../components/Buttons/DashboardStepButton";
import { getCurrentFormTextAndIcon } from "./RequestForms/formUtils";
import OrganizationSize from "./RequestForms/Data Analytics/OrganizationSize";
import DataServiceNeeds from "./RequestForms/Data Analytics/DataServiceNeeds";
import DataChoiceOfTool from "./RequestForms/Data Analytics/DataChoiceOfTool";
import DataProjectCommencement from "./RequestForms/Data Analytics/DataProjectCommencement";
import DataBudget from "./RequestForms/Data Analytics/DataBudget";
import DataDescription from "./RequestForms/Data Analytics/DataDescription";

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
    "Data and Analytics": [
      <OrganizationSize
        key="budget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <DataServiceNeeds
        key="budget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <DataChoiceOfTool
        key="budget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <DataProjectCommencement
        key="budget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <DataBudget
        key="budget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <DataDescription
        key="budget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    ],
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

  const { icon: currentIcon, text: currentText } = getCurrentFormTextAndIcon(
    selectedService,
    page,
    { icon, icon1, icon2, icon3, icon4, icon5 }
  );
  return (
    <div className="flex justify-center my-8 mx-6 md:mx-16">
      <div className="min-h-[30rem] w-[49rem] border flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        <div className="bg-versich-dark-blue h-full flex justify-start items-center flex-col text-white w-full md:w-[300px]  px-12 gap-y-8 py-6 md:py-20">
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
