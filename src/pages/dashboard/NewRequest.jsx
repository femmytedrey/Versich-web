/**
 * Renders the NewRequest component, which is a form for creating a new request.
 * This component imports and renders various sub-components that handle different
 * sections of the request form, such as selecting a service, specifying service
 * requirements, and providing details about the business and industry type.
 * The component also includes various icons and images used throughout the form.
 */

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SelectService from "./RequestForms/SelectService";
import ServiceRequirement from "./RequestForms/ServiceRequirement";
import ServiceNeeds from "./RequestForms/ServiceNeeds";
import BusinessType from "./RequestForms/BusinessType";
import IndustryType from "./RequestForms/IndustryType";
import LiveDecision from "./RequestForms/LiveDecision";
import Budget from "./RequestForms/Budget";
import orgSize from "../../assets/icons/DataAnalyticsIcon/office 1.png";
import icon1 from "../../assets/icons/DataAnalyticsIcon/office 2.png";
import icon2 from "../../assets/icons/DataAnalyticsIcon/office 3.png";
import icon3 from "../../assets/icons/DataAnalyticsIcon/office 4.png";
import icon4 from "../../assets/icons/DataAnalyticsIcon/office 5.png";
import icon5 from "../../assets/icons/DataAnalyticsIcon/office 6.png";
import financeNeedIcon from "../../assets/icons/FinanceTransformationIcon/FinanceTransformationIcon.png";
import expertNeedIcon from "../../assets/icons/MachineLearningIcon/expertNeedIcon.png";
import projectCommencementIcon from "../../assets/icons/MachineLearningIcon/machineprojectCommencementIcon.png";
import DashboardStepButton from "../../components/Buttons/DashboardStepButton";
import { getCurrentFormTextAndIcon } from "./RequestForms/formUtils";
import OrganizationSize from "./RequestForms/Data Analytics/Business/OrganizationSize";
import DataServiceNeeds from "./RequestForms/Data Analytics/Business/DataServiceNeeds";
import DataChoiceOfTool from "./RequestForms/Data Analytics/Business/DataChoiceOfTool";
import DataProjectCommencement from "./RequestForms/Data Analytics/Business/DataProjectCommencement";
import DataBudget from "./RequestForms/Data Analytics/Business/DataBudget";
import DataDescription from "./RequestForms/Data Analytics/Business/DataDescription";
import FinanceNeed from "./RequestForms/FinancialTransformation/FinanceNeed";
import FinanceOrganizationSize from "./RequestForms/FinancialTransformation/FinanceOrganizationSize";
import FinanceServiceNeed from "./RequestForms/FinancialTransformation/FinanceServiceNeed";
import FinanceBudget from "./RequestForms/FinancialTransformation/FinanceBudget";
import FinanceProjectCommencement from "./RequestForms/FinancialTransformation/FinanceProjectCommencement";
import FinanceDescription from "./RequestForms/FinancialTransformation/FinanceDescription";
import MachineExpertNeed from "./RequestForms/Machine Learning/MachineExpertNeed";
import MachineBudget from "./RequestForms/Machine Learning/MachineBudget";
import MobileBudget from "./RequestForms/Mobile App/MobileBudget";
import SoftwareBudget from "./RequestForms/Software Development/SoftwareBudget";
import MachineProjectCommencement from "./RequestForms/Machine Learning/MachineProjectCommencement";
import MachineDescription from "./RequestForms/Machine Learning/MachineDescription";
import FinanceNeededTools from "./RequestForms/FinancialTransformation/FinanceNeededTools";
import FinanceServiceNeeds from "./RequestForms/FinancialTransformation/Financial Reporting/FinancialReportingServiceNeeds";
import FinanceReportingFinanceNeededTools from "./RequestForms/FinancialTransformation/Financial Reporting/FinanceServiceTools";
import ErpFinanceNeededTools from "./RequestForms/FinancialTransformation/ERP/FinanceNeededTools";
import SystemAdministratinoFinanceNeededTools from "./RequestForms/FinancialTransformation/System Administration/FinanceNeededTools";
import SystemAdministrationFinanceBudget from "./RequestForms/FinancialTransformation/System Administration/FinanceBudget";
import SystemAdministratinoFinanceProjectCommencement from "./RequestForms/FinancialTransformation/System Administration/FinanceProjectCommencement";
import SystemAdminFinanceDescription from "./RequestForms/FinancialTransformation/System Administration/FinanceDescription";
import ErpFinanceDescription from "./RequestForms/FinancialTransformation/ERP/FinanceDescription";
import ErpFinanceBudget from "./RequestForms/FinancialTransformation/ERP/FinanceBudget";
import DigitalTransformationFinanceBudget from "./RequestForms/FinancialTransformation/Digital Transformation/FinanceBudget";
import OtherFinanceBudget from "./RequestForms/FinancialTransformation/Other/FinanceBudget";
import DigitalTransformFinanceDescription from "./RequestForms/FinancialTransformation/Digital Transformation/FinanceDescription";
import OtherFinanceDescription from "./RequestForms/FinancialTransformation/Other/FinanceDescription";
import DigitalTransformFinanceNeededTools from "./RequestForms/FinancialTransformation/Digital Transformation/FinanceNeededTools";
import OtherFinanceNeededTools from "./RequestForms/FinancialTransformation/Other/FinanceNeededTools";
import DigitalTransformFinanceProjectCommencement from "./RequestForms/FinancialTransformation/Digital Transformation/FinanceProjectCommencement";
import OtherFinanceProjectCommencement from "./RequestForms/FinancialTransformation/Other/FinanceProjectCommencement";
import FinancialFinanceBudget from "./RequestForms/FinancialTransformation/Financial Reporting/FinanceBudget";
import FinancialFinanceProjectCommencement from "./RequestForms/FinancialTransformation/Financial Reporting/FinanceProjectCommencement";
import FinancialFinanceDescription from "./RequestForms/FinancialTransformation/Financial Reporting/FinanceDescription";
import ErpFinanceProjectCommencement from "./RequestForms/FinancialTransformation/ERP/FinanceProjectCommencement";
import DataAnalyticsServiceType from "./RequestForms/Data Analytics/DataAnalyticsServiceType";
import DataProfessionType from "./RequestForms/Data Analytics/Individual/DataProfessionType";
import IndividualDataChoicezOfTool from "./RequestForms/Data Analytics/Individual/IndividualDataChoiceOfTool";
import IndividualDataProjectCommencement from "./RequestForms/Data Analytics/Individual/IndividualDataProjectCommencement";
import IndividualDataBudget from "./RequestForms/Data Analytics/Individual/IndividualDataBudget";
import IndividualDataDescription from "./RequestForms/Data Analytics/Individual/IndividualDataDescription";

const NewRequest = () => {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({});
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [serviceSelected, setServiceSelected] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formPagesByService = {
    "Software Development": [
      <SoftwareBudget
        key="budget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    ],
    "Finance Transformation": [
      <FinanceNeed
        key="FinanceNeed"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
        setSelectedServiceType={setSelectedServiceType}
        selectedServiceType={selectedServiceType}
      />,
      <FinanceOrganizationSize
        key="FinanceOrganizationSize"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    ],
    "Machine learning and AI": [
      <MachineExpertNeed
        key="MachineExpertNeed"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <MachineBudget
        key="MachineBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <MachineProjectCommencement
        key="MachineProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
      <MachineDescription
        key="MachineDescription"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    ],
    "Web Design & Development": [
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
    "Mobile App": [
      <MobileBudget
        key="MobileBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    ],
    "Data & Analytics": [
      <DataAnalyticsServiceType
        key="DataAnalyticsServiceType"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
        setSelectedServiceType={setSelectedServiceType}
        selectedServiceType={selectedServiceType}
      />,
    ],
  };

  if (selectedServiceType === "Myself, personal Projects") {
    formPagesByService["Data & Analytics"].push(
      <DataProfessionType
        key="DataProfessionType"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Data & Analytics"].push(
      <IndividualDataChoicezOfTool
        key="IndividualDataChoicezOfTool"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    );
    formPagesByService["Data & Analytics"].push(
      <IndividualDataProjectCommencement
        key="IndividualDataProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    );
    formPagesByService["Data & Analytics"].push(
      <IndividualDataBudget
        key="IndividualDataBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    );
    formPagesByService["Data & Analytics"].push(
      <IndividualDataDescription
        key="IndividualDataDescription"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />,
    );
  } else if (selectedServiceType === "Team, Business, Company") {
    formPagesByService["Data & Analytics"].push(
      <OrganizationSize
        key="orginizationSize"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Data & Analytics"].push(
      <DataServiceNeeds
        key="DataServiceNeeds"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Data & Analytics"].push(
      <DataChoiceOfTool
        key="DataChoiceOfTool"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Data & Analytics"].push(
      <DataProjectCommencement
        key="DataProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Data & Analytics"].push(
      <DataBudget
        key="DataBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Data & Analytics"].push(
      <DataDescription
        key="DataDescription"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
  }

  if (selectedServiceType === "FP & A Revolution") {
    formPagesByService["Finance Transformation"].push(
      <FinanceServiceNeed
        key="FinanceServiceNeed"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <FinanceNeededTools
        key="FinanceNeededTools"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <FinanceBudget
        key="FinanceBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <FinanceProjectCommencement
        key="FinanceProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <FinanceDescription
        key="FinanceDescription"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
  } else if (
    selectedServiceType === "Financial reporting and Advanced Analytics"
  ) {
    formPagesByService["Finance Transformation"].push(
      <FinanceServiceNeeds
        key="FinanceServiceNeeds"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <FinanceReportingFinanceNeededTools
        key="FinanceReportingFinanceNeededTools"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <FinancialFinanceBudget
        key="FinancialFinanceBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <FinancialFinanceProjectCommencement
        key="FinancialFinanceProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <FinancialFinanceDescription
        key="FinanceDescription"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
  } else if (selectedServiceType === "ERP/EPM/ System Implementation") {
    formPagesByService["Finance Transformation"].push(
      <ErpFinanceNeededTools
        key="ErpFinanceNeededTools"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <ErpFinanceBudget
        key="ErpFinanceBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <ErpFinanceProjectCommencement
        key="ErpFinanceProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <ErpFinanceDescription
        key="ErpFinanceBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
  } else if (selectedServiceType === "Systems Administration") {
    formPagesByService["Finance Transformation"].push(
      <SystemAdministratinoFinanceNeededTools
        key="SoftwareAdministratinoFinanceNeededTools"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <SystemAdministrationFinanceBudget
        key="SystemAdministrationFinanceBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <SystemAdministratinoFinanceProjectCommencement
        key="SystemAdministratinoFinanceProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <SystemAdminFinanceDescription
        key="SystemAdminFinanceDescription"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
  } else if (selectedServiceType === "Digital Transformation") {
    formPagesByService["Finance Transformation"].push(
      <DigitalTransformFinanceNeededTools
        key="DigitalTransformFinanceNeededTools"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <DigitalTransformationFinanceBudget
        key="DigitalTransformationFinanceBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <DigitalTransformFinanceProjectCommencement
        key="DigitalTransformFinanceProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <DigitalTransformFinanceDescription
        key="DigitalTransformFinanceDescription"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
  } else if (selectedServiceType === "other") {
    formPagesByService["Finance Transformation"].push(
      <OtherFinanceNeededTools
        key="OtherFinanceNeededTools"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <OtherFinanceBudget
        key="OtherFinanceBudget"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <FinanceProjectCommencement
        key="FinanceProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <OtherFinanceProjectCommencement
        key="OtherFinanceProjectCommencement"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
    formPagesByService["Finance Transformation"].push(
      <OtherFinanceDescription
        key="OtherFinanceDescription"
        register={register}
        errors={errors}
        setValue={setValue}
        formData={formData}
        setFormData={setFormData}
      />
    );
  }

  useEffect(() => {
  if (serviceSelected) {
    const totalPages = formPagesByService[selectedService]?.length || 0;
    setTotalPages(totalPages);
    
    const isFirstFormSelected = Object.entries(formPagesByService).every(
      ([service, forms]) => {
        return service !== selectedService || forms[0].props.selectedServiceType !== "";
      }
    );

    if (isFirstFormSelected) {
      const calculateProgress = (page / totalPages) * 100;
      setProgress(calculateProgress);
    } else {
      setProgress(0);
    }
  }
}, [page, selectedService, selectedServiceType, formPagesByService, serviceSelected]);



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
        // window.location.reload();
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
    {
      orgSize,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      financeNeedIcon,
      expertNeedIcon,
      projectCommencementIcon,
      selectedServiceType,
    }
  );

  return (
    <div className="flex justify-center my-20 mx-6 md:mx-16">
      <div className="min-h-[30rem] w-[49rem]  flex flex-col md:flex-row rounded-lg shadow-form overflow-hidden">
        <div
          className={`${
            page === 0 ? "hidden" : "block"
          } bg-versich-dark-blue h-full flex justify-start items-center flex-col text-white w-full md:w-[300px]  px-12 gap-y-8 py-6 md:py-20`}
        >
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
                  style={{
                    width: `${progress}%`,
                    transition: "width 0.8s ease-in-out",
                  }}
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

              {/* {additionalFinanceForms.map((form, index) => (
                <div key={index}>{form}</div>
              ))} */}
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
