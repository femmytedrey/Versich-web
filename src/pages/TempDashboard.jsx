import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import CircularProgressBar from "../components/CircularProgressBar";
import ConfirmButton from "../components/Buttons/ConfirmButton";
import { CiLocationOn } from "react-icons/ci";

const TempDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState(25);

  const editBtn = () => {
    console.log("Testing Edit btn");
  };

  return (
    <div className="bg-versich-primary-bg mx-10 md:mx-16 lg:mx-28 space-y-4 py-10">
      <div className="bg-white w-full px-4 font-semibold py-6 text-start shadow-lg text-versich-dark-blue rounded-xl flex justify-between flex-col sm:flex-row">
        <p>Good Afternoon, John!</p>
        <Link
          to="/auth/verification/YOUR_TOKEN/email/"
          className="text-versich-blue underline hover:text-versich-blue-hover"
        >
          Verify Email
        </Link>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="bg-white shadow-lg px-4 py-4 rounded-xl">
          <div className="flex gap-x-3 items-center ">
            <div className="rounded-full text-white text-xl font-semibold bg-versich-light-blue h-16 w-16 flex justify-center items-center">
              JA
            </div>
            <div className="flex-1 text-start text-versich-dark-blue font-semibold text-lg">
              <p>John Ade</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-3 py-4 bg-[#D9EBFC] my-4 rounded-lg">
            <div>
              <CircularProgressBar progress={progress} />
            </div>
            <div>
              {progress < 100 ? (
                <p>
                  Complete your profile {""}
                  <span>
                    <Link
                      to="/steppers"
                      className="text-versich-blue underline"
                    >
                      here
                    </Link>
                  </span>
                </p>
              ) : (
                <p>Your profile is completed</p>
              )}
            </div>
          </div>
          <div className="w-40">
            <ConfirmButton
              type="submit"
              text="Edit profile"
              clickHandler={editBtn}
            />
          </div>
        </div>

        {/* Lead Settings */}
        <div className="bg-white shadow-lg px-4 py-4 rounded-xl space-y-4 text-start">
          <div>
            <p className="text-start text-xl font-semibold text-versich-dark-blue">
              Lead setting
            </p>
          </div>

          <div>
            <div>
              <p className="text-versich-dark-blue font-medium mb-1">
                Services
              </p>
              <p className="text-sm text-versich-label mb-1">
                You’ll receive leads in these categories
              </p>
            </div>
            <div className="flex justify-between">
              <button className="border-[1px] border-versich-border text-sm text-versich-border rounded-xl px-3 py-2">
                Mobile app
              </button>
              <button className="border-[1px] border-versich-border text-sm text-versich-border rounded-xl px-3 py-2">
                Software development
              </button>
            </div>
          </div>

          <div>
            <div>
              <p className="text-versich-dark-blue font-medium mb-1">Location</p>
              <p>You’re receiving customers within</p>
            </div>
            <div>
              <CiLocationOn />
              <p>Worldwide</p>
            </div>
            <div>
              <div>
                <p>Estimated 103 leads per day</p>
                <p>info@user.com</p>
              </div>
              <div>
                <CiLocationOn />
                <p>Worldwide</p>
              </div>
            </div>
            <div className="w-40">
              <ConfirmButton
                type="submit"
                text="Edit setting"
                clickHandler={editBtn}
              />
            </div>
          </div>
        </div>

        <div>{/* For Leads | Responses | Help */}</div>
      </div>
    </div>

    // <div className="flex flex-col items-center justify-center my-10 min-h-80">
    //   <h2 className="font-bold">Welcome to your dashboard</h2>
    //   <div className="mt-5 py-2 px-4 border border-versich-blue rounded-md">
    //     <p>{user.first_name + " " + user.last_name}</p>
    //   </div>
    //   <p className="pt-12">
    //     Click{' '}
    //     <span>
    //       <Link to="/steppers" className="text-versich-blue underline">
    //         here
    //       </Link>
    //     </span>{' '}
    //     to complete your registration.
    //   </p>

    //   <Link
    //     to="/auth/verification/YOUR_TOKEN/email/"
    //     className="text-versich-blue underline pt-12"
    //   >
    //     Verify Email
    //   </Link>

    //   <p>
    //       Click{" "}
    //       <span>
    //         <Link
    //           to="/auth/verification/email/"
    //           className="text-versich-blue underline"
    //         >
    //           here
    //         </Link>
    //       </span>{" "}
    //       to view Email Verified Page
    //     </p>
    // </div>
  );
};

export default TempDashboard;
