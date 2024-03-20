import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GiTie } from "react-icons/gi";
import { GiBriefcase } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";

import Meta from "../../components/Meta";
import { BUYER, SELLER, loginPath } from "../../assets/constants";

const AccountSelection = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const [selectedOption, setSelectedOption] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAccountSelectionSubmit = async (data) => {
    if (selectedOption === "") {
      return setErrorMsg("Please select an account type");
    }
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    sessionStorage.setItem("accountType", data.selection);
    onSubmit({ ...data, accountType: data.selection });
  };

  useEffect(() => {
    if (selectedOption === BUYER) {
      setButtonText("Join as a Buyer");
    } else if (selectedOption === SELLER) {
      setButtonText("Join as a Seller");
    } else {
      setButtonText("Join");
    }
  }, [selectedOption]);

  return (
    <div className="overflow-hidden flex flex-col justify-center  bg-versich-primary-bg items-center">
      <Meta title="Account Selection" description="Account type selection" />
      <h2 className=" text-2xl leading-normal text-center text-versich-dark-blue font-medium px-12 max-[400px]:px-6 py-10 sm:py-12">
        Join as a {BUYER} or {SELLER}
      </h2>
      <div className="w-full bg-white shadow-top py-10 sm:py-12 flex justify-center">
        <form
          onSubmit={handleSubmit(handleAccountSelectionSubmit)}
          className="space-y-6 px-12 max-[400px]:px-6 mx-0 max-w-[600px]"
        >
          <div className="flex flex-col sm:flex-row gap-y-8 gap-x-12">
            <label
              onClick={() => setErrorMsg("")}
              className={`relative min-h-40 px-12 border-2 rounded-lg flex flex-col items-center justify-center cursor-pointer py-6 gap-y-2 transition-colors hover:border-versich-blue/60 group ${selectedOption === BUYER
                ? "!border-versich-blue bg-versich-blue/5"
                : "border-transparent shadow-[0px_0px_12px_6px_rgb(0,0,0,0.05)]"
                }`}
            >
              <div className="absolute top-[-10px] rounded-full bg-white">
                {selectedOption === BUYER ? (
                  <FaCheckCircle className="text-versich-blue text-xl " />
                ) : (
                  <FaRegCheckCircle className="text-versich-light-gray group-hover:fill-versich-blue transition-colors text-xl" />
                )}
              </div>

              <GiBriefcase
                className="text-5xl text-versich-dark-blue"
              />
              <p
                className="px-6 text-sm font-medium text-versich-dark-blue"
              >
                <input
                  type="radio"
                  value={BUYER}
                  {...register("selection")}
                  className="appearance-none"
                  onChange={() => setSelectedOption(BUYER)}
                />
                I’m a {BUYER}, looking for {SELLER}s
              </p>
            </label>

            <label
              onClick={() => setErrorMsg("")}
              className={`relative min-h-40 p-4 px-12 border-2 rounded-lg justify-center flex flex-col items-center cursor-pointer py-6 gap-y-2 transition-colors hover:border-versich-blue/60 group ${selectedOption === SELLER
                ? "!border-versich-blue bg-versich-blue/5"
                : "border-transparent shadow-[0px_0px_12px_6px_rgb(0,0,0,0.05)]"
                }`}
            >
              <div className="absolute top-[-10px] rounded-full bg-white">
                {selectedOption === SELLER ? (
                  <FaCheckCircle className="text-versich-blue text-xl " />
                ) : (
                  <FaRegCheckCircle className="text-versich-light-gray group-hover:fill-versich-blue transition-colors text-xl" />
                )}
              </div>

              <GiTie
                className="text-5xl text-versich-dark-blue"
              />
              <p
                className="px-6 text-sm font-medium text-versich-dark-blue"
              >
                <input
                  type="radio"
                  value={SELLER}
                  {...register("selection")}
                  className="appearance-none"
                  onChange={() => setSelectedOption(SELLER)}
                />
                I’m a {SELLER}, looking for {BUYER}s
              </p>
            </label>
          </div>

          <div className="w-full space-y-2 relative">
            {loading && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-15">
                <div className="w-full h-screen absolute flex justify-center pt-40">
                  <PropagateLoader
                    loading={loading}
                    color="#1F71BE"
                    height={3}
                    width="40%"
                  />
                </div>
              </div>
            )}
            <button
              className="w-full py-3  rounded-lg bg-versich-blue text-white"
              type="submit"
            >
              {buttonText}
            </button>

            {/* <ConfirmButton text={buttonText} loading={loading} clickHandler={} type='submit' /> */}
            <p className="text-start text-red-500">{errorMsg}</p>
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
