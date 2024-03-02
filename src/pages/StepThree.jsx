import { useState } from "react";
import ComboInput from "./StepthreeComponents/ComboInput";

const StepThree = ({ handleSelectedServices }) => {
  const [selectedService, setSelectedService] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedService(option);
  };

  return (
    <div className="flex flex-col gap-y-6 my-4 mb-12">
      <div className="space-y-5 text-start">
        <h2 className="text-xl text-versich-dark-blue font-semibold">
          Where would you like to see leads from?
        </h2>
        <p>Add other services you can provide</p>
      </div>
      <div className="text-start">
        <p>You’ve signed up for</p>
        <button className="mt-2 flex gap-x-4 rounded-2xl cursor-default bg-gray-300 py-2 px-4 text-black items-center">
          Graphics Design
        </button>
      </div>
      <div className="text-start">
        <p>We will also show you leads from</p>
        <ComboInput onSelect={handleSelectedServices} />
      </div>

      <div className="flex bg-[#D9EBFC] py-8 px-4 items-center justify-between rounded-xl gap-x-2">
        <div className="text-start">
          <p className="text-versich-light-blue text-3xl md:text-5xl font-medium">
            799
          </p>
          <p className="text-xl text-versich-light-blue">
            Current available leads
          </p>
        </div>
        <div>
          <button className="bg-versich-blue hover:bg-versich-blue-hover py-3 px-6 text-white w-40 text-xl rounded-xl h-14">
            See Leads
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
