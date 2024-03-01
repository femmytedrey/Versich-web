import React from "react";
import ConfirmButton from "../components/Buttons/ConfirmButton";

const Dashboard = () => {
  const editBtn = () => {
    console.log("Testing Edit btn");
  };
  return (
    <div className="bg-versich-primary-bg mx-10 md:mx-16 lg:mx-28 space-y-4 py-10">
      <div className="bg-white w-full px-4 font-semibold py-6 text-start shadow-lg text-versich-dark-blue rounded-xl">
        <p>Good Afternoon, John!</p>
      </div>
      <div>
        <div className="bg-white shadow-lg px-4 py-4 rounded-xl">
          <div className="flex gap-x-3 items-center ">
            <div className="rounded-full text-white text-2xl px-6 font-semibold py-5 bg-versich-light-blue">
              JJ
            </div>
            <div className="flex-1 text-start text-versich-dark-blue font-semibold text-lg">
              <p>John Jai</p>
            </div>
          </div>
          <div>
            <div>
              <p>73%</p>
            </div>
            <div>
              <p>Your profile is complete. Please complete your profile.</p>
            </div>
          </div>
          <div>
            <ConfirmButton
              type="submit"
              text="Edit profile"
              clickHandler={editBtn}
            />
          </div>
        </div>

        <div>{/* For the leads settings */}</div>
        <div>{/* For Leads | Responses | Help */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
