import BackBtn from "../../components/Buttons/BackBtn";
import planet from "../../assets/planet.png";
import DashboardConfirmBtn from "../../components/Buttons/DashboardConfirmBtn";
import Meta from "../../components/Meta";
import ServiceImages from "../../assets/ServiceImages";
import { PiArrowRightThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import NewRequest from "./NewRequest";

const Response = ({ onClose }) => {
  const [isResquestEmpty, setIsRequestEmpty] = useState(true);
  const [openModal, setOpenModal] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    if (openModal) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [openModal]);

  const newRequest = () => {
    console.log("New request");
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const viewRequest = () => {
    console.log("Request Viewed");
  };

  return (
    <div className="py-10 md:py-14 px-6 md:px-16 lg:px-28 text-start mb-12 overflow-hidden bg-versich-primary-bg space-y-8 relative">
      <Meta
        title="VersiMarket | Request Page"
        description="Response page for requests"
      />
      <div className="bg-white shadow-lg rounded-lg w-full">
        <div className="border-b-2 px-3 py-3 md:py-6">
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
            <div className="px-3 space-y-5">
              <p className="text-2xl text-versich-dark-blue font-semibold pb-3">
                Your requests
              </p>
              <div className="border p-3 py-6 rounded-t-xl flex flex-col md:flex-row gap-y-3 gap-x-4 justify-between items-start md:items-center">
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-versich-dark-blue">
                    Mobile app
                  </p>
                  <p className="text-sm text-versich-light-gray">
                    Friday. 09 Feb
                  </p>
                  <p className="text-sm text-versich-label">
                    We need more details about your request in order to ensure
                    that you receive quality responses.
                  </p>
                </div>
                <div className="min-w-[140px]">
                  <DashboardConfirmBtn
                    text="View Request"
                    btnAction={viewRequest}
                  />
                </div>
              </div>

              <div className="border p-3 py-6 rounded-t-xl flex flex-col md:flex-row gap-y-3 gap-x-4 justify-between items-start md:items-center">
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-versich-dark-blue">
                    Mobile app
                  </p>
                  <p className="text-sm text-versich-light-gray">
                    Friday. 09 Feb
                  </p>
                  <p className="text-sm text-versich-label">
                    We need more details about your request in order to ensure
                    that you receive quality responses.
                  </p>
                </div>
                <div className="min-w-[140px]">
                  <DashboardConfirmBtn
                    text="View Request"
                    btnAction={viewRequest}
                  />
                </div>
              </div>
            </div>
          )}

          {openModal && <NewRequest onClose={closeModal} />}

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

        <div className="grid grid-flow-col overflow-y-auto w-[full] scroll-container">
          {ServiceImages.map((service) => (
            <div
              key={service.id}
              className="mx-4 my-3 w-fit md:w-[320px] shadow-md rounded-lg text-center "
            >
              <div className="h-[100px] md:h-[210px] w-[220px] md:w-[320px] relative overflow-hidden rounded-tr-lg rounded-tl-2xl">
                <img
                  src={service.img}
                  alt={service.name}
                  className="object-cover w-full h-full transition-transform duration-400 cursor-pointer hover:scale-110"
                />
              </div>
              <div className="h-auto text-start px-4 py-2 md:py-4 flex flex-col gap-y-3 ">
                <p className="font-bold text-xs md:text-lg text-versich-darktext-color">
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
