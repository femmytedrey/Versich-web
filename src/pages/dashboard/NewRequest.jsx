import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import SelectService from "./RequestForms/SelectService";
import ServiceRequirement from "./RequestForms/ServiceRequirement";
import DashboardStepButton from "../../components/Buttons/DashboardStepButton";
import ServiceNeeds from "./RequestForms/ServiceNeeds";

const NewRequest = ({ onClose }) => {
  const [page, setPage] = useState(0);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const formPages = [
    <SelectService register={register} errors={errors} setValue={setValue} />,
    <ServiceRequirement register={register} errors={errors} setValue={setValue} />,
    <ServiceNeeds register={register} errors={errors} setValue={setValue} />,
  ];

  const handleContinue = handleSubmit((data) => {
    if (page < formPages.length - 1) {
      setPage(page + 1);
    } else {
      // Check if the button text is "Submit"
      const buttonText = page === formPages.length - 1 ? "Submit" : "Continue";
      if (buttonText === "Submit") {
        console.log(getValues()); // Log form data when button text is "Submit"
      }
    }
  });

  const handleBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className="fixed top-[-20px] z-30 left-0 w-full h-screen bg-black/20 flex justify-center items-center">
      <div className="flex flex-col w-[360px] bg-white p-3 rounded-md gap-3">
        <div className="flex justify-between">
          <p className="text-sm">Request detail</p>
          <IoIosClose className="text-2xl cursor-pointer" onClick={onClose} />
        </div>

        {/* Progress Bar */}
        {page === 1 && (
          <div className="w-full h-1 bg-gray-300 rounded-lg overflow-hidden my-3">
            <div className="w-[20%] h-full bg-[#114B8A]"></div>
          </div>
        )}

        <div className="flex-1">{formPages[page]}</div>

        <div className="w-full justify-between flex">
          <DashboardStepButton
            text="back"
            handleButtonClick={handleBack}
            disabled={page === 0}
          />
          <DashboardStepButton
            type="submit"
            handleButtonClick={handleContinue}
            text={page === formPages.length - 1 ? "Submit" : "Continue"}
          />
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
