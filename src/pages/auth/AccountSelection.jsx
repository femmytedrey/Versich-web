import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GiTie } from "react-icons/gi";
import { GiBriefcase } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loginPath } from "../../assets/constants";
import { PropagateLoader } from "react-spinners";
import Meta from "../../components/Meta";

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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    sessionStorage.setItem("accountType", data.selection);
    onSubmit({ ...data, accountType: data.selection });
  };

  useEffect(() => {
    if (selectedOption === "buyer") {
      setButtonText("Join as a Buyer");
    } else if (selectedOption === "seller") {
      setButtonText("Join as a Seller");
    } else {
      setButtonText("Join");
    }
  }, [selectedOption]);

  return (
    <div className="overflow-hidden flex flex-col justify-center  bg-versich-primary-bg items-center">
      <Meta title="Account Selection" description="Account type selection" />
      <h2 className=" text-2xl leading-normal text-left text-versich-dark-blue font-medium py-6 md:py-12">
        Join as a buyer or seller
      </h2>
      <div className="w-full bg-white shadow-top py-6 md:py-12 flex justify-center">
        <form
          onSubmit={handleSubmit(handleAccountSelectionSubmit)}
          className="space-y-6 px-12 mx-0 max-w-[600px]"
        >
          <div className="flex flex-col md:flex-row gap-y-6 gap-x-12">
            <label
              onClick={() => setErrorMsg("")}
              className={`relative px-12 border-[1.5px] rounded-lg  flex flex-col items-center justify-center cursor-pointer py-6 gap-y-2 hover:bg-versich-primary-bg ${
                selectedOption === "buyer"
                  ? "border-versich-blue bg-versich-primary-bg"
                  : "border-versich-light-gray border-opacity-60 shadow-lg"
              }`}
            >
              <div className="absolute top-[-8%] rounded-full bg-white">
                {selectedOption === "buyer" ? (
                  <FaCheckCircle className="text-versich-blue text-xl " />
                ) : (
                  <FaRegCheckCircle className=" text-versich-light-gray text-xl" />
                )}
              </div>

              <GiBriefcase
                className={`text-5xl ${
                  selectedOption === "buyer"
                    ? "text-versich-dark-blue"
                    : "text-versich-light-gray"
                }`}
              />
              <p
                className={`px-6 text-sm font-medium ${
                  selectedOption === "buyer"
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
              onClick={() => setErrorMsg("")}
              className={`relative p-4 px-12 border-[1.5px] rounded-lg justify-center flex flex-col items-center cursor-pointer py-6 gap-y-2 hover:bg-versich-primary-bg ${
                selectedOption === "seller"
                  ? "border-versich-blue bg-versich-primary-bg"
                  : "border-versich-light-gray border-opacity-60 shadow-lg"
              }`}
            >
              <div className="absolute top-[-8%] rounded-full bg-white">
                {selectedOption === "seller" ? (
                  <FaCheckCircle className="text-versich-blue text-xl " />
                ) : (
                  <FaRegCheckCircle className=" text-versich-light-gray text-xl" />
                )}
              </div>

              <GiTie
                className={`text-5xl ${
                  selectedOption === "seller"
                    ? "text-versich-dark-blue"
                    : "text-versich-light-gray"
                }`}
              />
              <p
                className={`px-6 text-sm font-medium ${
                  selectedOption === "seller"
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
