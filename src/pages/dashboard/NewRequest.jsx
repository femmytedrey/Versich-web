import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import SelectService from "./RequestForms/SelectService";
import ServiceRequirement from "./RequestForms/ServiceRequirement";
import DashboardStepButton from "../../components/Buttons/DashboardStepButton";
import ServiceNeeds from "./RequestForms/ServiceNeeds";

const NewRequest = ({ onClose }) => {
  const [page, setPage] = useState(0);
  const { register, setValue, handleSubmit, formState: { errors } } = useForm();
  
  const formPages = [
    <SelectService register={register} errors={errors} setValue={setValue} />,
    <ServiceRequirement register={register} errors={errors} />,
    <ServiceNeeds register={register} errors={errors} />,
  ];

  const handleContinue = handleSubmit((data) => {
    if (page < formPages.length - 1) {
      setPage(page + 1);
    }
  });

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="fixed top-[-20px] z-50 left-0 w-full h-screen bg-black/20 flex justify-center items-center">
      <div className="flex flex-col h-[350px] w-[350px] bg-white p-3 rounded-md gap-3">
        <div className="flex justify-between">
          <p className="text-sm">Request detail</p>
          <IoIosClose className="text-2xl cursor-pointer" onClick={onClose} />
        </div>

        <div className="flex-1">{formPages[page]}</div>

        <div className="w-full justify-between flex">
          <DashboardStepButton
            text="back"
            handleButtonClick={handleBack}
            disabled={page === 0}
          />
          <button
            className="bg-versich-blue hover:bg-[#0A6ECD] text-white text-xs rounded-md py-2 px-4"
            onClick={handleContinue}
          >
            {page === formPages.length - 1 ? "Submit" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
