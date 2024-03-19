import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Meta from "../../components/Meta";
import { GiTie } from "react-icons/gi";
import { GiBriefcase } from "react-icons/gi";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loginPath } from "../../assets/constants";

const AccountSelection = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      selection: "buyer",
    },
  });
  const [selectedOption, setSelectedOption] = useState("buyer");

  const handleAccountSelectionSubmit = (data) => {
    sessionStorage.setItem("accountType", data.selection);
    onSubmit({ ...data, accountType: data.selection });
  };

  const buttonText = selectedOption === "seller" ? "Seller" : "Buyer";

  return (
    <div className="py-10 md:py-14 px-3 overflow-hidden flex justify-center  bg-versich-primary-bg items-center">
      <Meta title="Account Selection" description="Account type selection" />
      <div className="w-full bg-white shadow-md my-6 py-5 md:py-10 px-5 md:px-12 max-w-[580px] rounded-md">
        <h2 className=" text-2xl leading-normal text-left mb-5 text-versich-darktext-color font-medium ">
          Join as a buyer or seller
        </h2>
        <form
          onSubmit={handleSubmit(handleAccountSelectionSubmit)}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-y-6 gap-x-12">
            <label
              className={`relative p-4 border-[1.5px] rounded-lg  flex flex-col items-center cursor-pointer py-6 gap-y-2 ${selectedOption === "buyer"
                ? "border-versich-blue"
                : "border-versich-light-gray border-opacity-60 shadow-lg"
                }`}
            >
              <div className="absolute top-[-8%] rounded-full bg-white">
                {selectedOption === "buyer" ? (
                  <FaCheckCircle className="text-versich-blue text-xl block md:hidden " />
                ) : (
                  <FaRegCheckCircle className=" text-versich-light-gray  text-xl block md:hidden" />
                )}
              </div>
              {selectedOption === "buyer" ? (
                <MdOutlineRadioButtonChecked className="absolute left-3 text-lg top-3 text-versich-blue hidden md:block" />
              ) : (
                <MdOutlineRadioButtonUnchecked className="absolute left-3 text-lg top-3 text-versich-light-gray hidden md:block" />
              )}
              <GiBriefcase
                className={`text-5xl ${selectedOption === "buyer"
                  ? "text-versich-dark-blue"
                  : "text-versich-light-gray"
                  }`}
              />
              <p
                className={`px-12 text-sm font-medium ${selectedOption === "buyer"
                  ? "text-versich-dark-blue"
                  : "text-versich-light-gray"
                  }`}
              >
                <input
                  type="radio"
                  value="buyer"
                  {...register("selection")}
                  className="appearance-none"
                  onChange={() => setSelectedOption("buyer")}
                />
                I’m a buyer, looking for sellers
              </p>
            </label>

            <label
              className={`relative p-4 border-[1.5px] rounded-lg flex flex-col items-center cursor-pointer py-6 gap-y-2 ${selectedOption === "seller"
                ? "border-versich-blue"
                : "border-versich-light-gray border-opacity-60 shadow-lg"
                }`}
            >
              <div className="absolute top-[-8%] rounded-full bg-white">
                {selectedOption === "seller" ? (
                  <FaCheckCircle className="text-versich-blue text-xl block md:hidden " />
                ) : (
                  <FaRegCheckCircle className=" text-versich-light-gray  text-xl block md:hidden" />
                )}
              </div>
              {selectedOption === "seller" ? (
                <MdOutlineRadioButtonChecked className="absolute left-3 text-lg top-3 text-versich-blue hidden md:block" />
              ) : (
                <MdOutlineRadioButtonUnchecked className="absolute left-3 text-lg top-3 text-versich-light-gray hidden md:block" />
              )}
              <GiTie
                className={`text-5xl ${selectedOption === "seller"
                  ? "text-versich-dark-blue"
                  : "text-versich-light-gray"
                  }`}
              />
              <p
                className={`px-12 text-sm font-medium ${selectedOption === "seller"
                  ? "text-versich-dark-blue"
                  : "text-versich-light-gray"
                  }`}
              >
                <input
                  type="radio"
                  value="seller"
                  {...register("selection")}
                  className="appearance-none"
                  onChange={() => setSelectedOption("seller")}
                />
                I’m a seller, looking for buyers
              </p>
            </label>
          </div>
          <div className="w-full">
            <button
              className="w-full py-3 hover:bg-versich-blue-hover rounded-lg bg-versich-blue text-white"
              type="submit"
            >
              Join as a {buttonText}
            </button>
          </div>
          <div>
            <p className="text-sm ">
              Already have an account?{" "}
              <Link
                to={loginPath}
                className="text-versich-blue hover:text-versich-blue-hover hover:underline"
                href="#"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSelection;
