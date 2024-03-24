import BackBtn from "../../components/Buttons/BackBtn";
import planet from "../../assets/planet.png";
import ConfirmButton from "../../components/Buttons/ConfirmButton";
import DashboardConfirmBtn from "../../components/Buttons/DashboardConfirmBtn";
import Meta from "../../components/Meta";
import ServiceImages from "../../assets/ServiceImages";
import { PiArrowRightThin } from "react-icons/pi";
import { useState } from "react";

const Response = () => {
  const [isResquestEmpty, setIsRequestEmpty] = useState(true);
  const newRequest = () => {
    console.log("New request");
  };
  return (
    <div className="py-10 md:py-14 px-6 md:px-16 lg:px-28 text-start mb-12 overflow-hidden bg-versich-primary-bg space-y-8">
      <Meta
        title="VersiMarket | Request Page"
        description="Response page for requests"
      />
      <div className="bg-white shadow-lg rounded-lg w-full">
        <div className="border-b-2 px-3 py-3 md:py-5">
          <BackBtn />
        </div>
        <div className="px-3 py-6 space-y-4 pb-12">
          {isResquestEmpty && (
            <div>
              <div className="flex justify-center">
                <img src={planet} alt="planet" />
              </div>
              <div className="space-y-1">
                <p className=" text-center text-lg font-semibold text-versich-dark-blue">
                  There are no active requests
                </p>
                <p className="text-center text-sm text-versich-label">
                  Please create a new request. Need something else?
                </p>
              </div>
            </div>
          )}

          {/* For non-empty request */}
          {!isResquestEmpty && (
            <div className="px-3">
              <p>Your Request</p>
            </div>
          )}

          <div className="text-center">
            <DashboardConfirmBtn
              text="Place new request"
              btnAction={newRequest}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="text-versich-dark-blue font-bold text-xl md:text-2xl">
          Services
        </div>
        <div className="flex scroll-container overflow-y-auto w-[full]">
          {ServiceImages.map((service) => (
            <div
              key={service.id}
              className="mx-4 my-3 w-[250px] md:w-[320px] shadow-md rounded-lg text-center"
            >
              <div className="h-[100px] md:h-[210px] w-[220px] md:w-[320px] relative overflow-hidden rounded-tr-lg rounded-tl-2xl">
                <img
                  src={service.img}
                  alt={service.name}
                  className="object-cover w-full h-full transition-transform duration-400 cursor-pointer hover:scale-110"
                />
              </div>
              <div className="h-auto text-start px-4 py-2 md:py-4 flex flex-col gap-y-3 ">
                <p className="font-bold text-sm md:text-lg text-versich-darktext-color">
                  {service.name}
                </p>
                <a
                  href={service.link}
                  className="flex text-sm md:text-lg cursor-pointer items-center gap-x-2 text-[#114B8A] font-medium hover:text-versich-blue hover:gap-x-4 transition-all duration-300 ease-in-out"
                >
                  Find a professional
                  <PiArrowRightThin className="my-" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Response;
