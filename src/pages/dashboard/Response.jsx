import BackBtn from "../../components/Buttons/BackBtn";
import planet from "../../assets/planet.png";
import ConfirmButton from "../../components/Buttons/ConfirmButton";
import DashboardConfirmBtn from "../../components/Buttons/DashboardConfirmBtn";

const Response = () => {
  const newRequest = () => {
    console.log("New request");
  };
  return (
    <div className="py-10 md:py-14 px-6 md:px-16 lg:px-28 text-start mb-12 overflow-hidden bg-versich-primary-bg space-y-8">
      <div className="bg-white shadow-lg rounded-lg w-full">
        <div className="border-b-2 px-3 py-3 md:py-5">
          <BackBtn />
        </div>
        <div className="px-3 py-6 space-y-4">
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
          <div className="text-center">
            <DashboardConfirmBtn
              text="Place new request"
              btnAction={newRequest}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="text-versich-dark-blue font-bold text-xl md:text-2xl">Services</div>
        <div></div>
      </div>
    </div>
  );
};

export default Response;
