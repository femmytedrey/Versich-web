import { useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { authenticateGoogleUser } from "../../../actions/socialAuth";
import { loginPath } from "../../../assets/constants";
import Meta from "../../../components/Meta";

const GoogleOAuthVerification = () => {
  const [status, setStatus] = useState("verifying");
  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    let params = location.search;
    const accountType = sessionStorage.getItem("accountType");
    if (accountType) {
      params += `&accounttype=${accountType}`;
    }
    dispatch(authenticateGoogleUser(params))
      .then((data) => setStatus(data?.status))
      .catch((error) => {
        /**
         * The user must see a error message, if authentication failed
         */
        // const data = JSON.parse(error?.message)
        if (error.response && error.response.data && error.response.data.message) {
            setErrorMessage(error.response.data.message);
        } else {
            setErrorMessage("An error occurred while authenticating with Google.");
        }
        setStatus(null);
      });
    // eslint-disable-next-line
  }, []);
  return (
    // Improvise this page design & make sure its responsive
    <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center  bg-versich-primary-bg items-center">
      <Meta title="Google Authentication" description="Sign in with Google" />
      <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md">
        <h2 className=" text-3xl leading-normal text-center mb-5 text-versich-darktext-color font-medium ">
          Signing you in with
        </h2>
        <section>
          {status === null ? (
            <Navigate to={loginPath} />
          ) : (
            status === "verifying" && (
              <div className="flex-grow inline-flex items-center">
                <div className="max-w-[180px]">
                  <img
                    className=""
                    src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                    alt={status}
                  />
                </div>
              </div>
            )
          )}
        </section>
        <p>{errorMessage || "Verifying your request..."}</p>
      </div>
    </div>
  );
};
export default GoogleOAuthVerification;
