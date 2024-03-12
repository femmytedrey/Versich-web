import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import CSRFTokenField from "../../components/CSRFTokenField";
import InputText from "../../components/InputText";
import ConfirmButton from "../../components/Buttons/ConfirmButton";
import SocialAccounts from "./socialAccounts/SocialAccounts"
import { loginPath } from "../../assets/constants";
import { signupUser } from "../../actions/auth";

const Signup = () => {
  const [equal, setEqual] = useState(false);
  const methods = useForm();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignupError = (status) => {
    let errorMessage = "An unexpected error occurred. Please try again.";
  
    if (status === 409) {
      errorMessage = "User already exists. Please use a different email address.";
    } else {
      errorMessage = `An unexpected error occurred. Status Code: ${status}`;
    }
  
    setErrorMsg(errorMessage);
  };
  
  const handleGenericError = (error) => {
    let errorMessage = "An unexpected error occurred. Please try again.";
  
    if (error.response && error.response.data) {
      errorMessage = error.response.data.message || errorMessage;
    }
  
    setErrorMsg(errorMessage);
  };

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setEqual(true);
      return;
    }
    setLoading(true);
    dispatch(signupUser(firstName, lastName, email, password, csrfToken))
      .then((data) => {
        if (data.status !== "success") {
          // Render error to user
          handleSignupError(result.status);
          return;
        }
        methods.reset();
      })
      .catch((error) => {
        //  const data = JSON.parse(error?.message)
        //  data.message, data.status
        handleGenericError(error);
      })
      .finally(() => {
        // methods.reset();
        setLoading(false);
      });
  };

  const handleConfirmPasswordChange = (e) => {
    setEqual(false);
    setPassword(e.target.value);
  };

  const myClickHandler = () => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FormProvider {...methods}>
      <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center  bg-versich-primary-bg items-center">
        <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md">
          <h2 className=" text-3xl leading-normal text-left mb-5 text-versich-darktext-color font-medium ">
            Create an account
          </h2>
          <div className="w-full">
            {/* form */}
            <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="space-y-4 md:space-y-5 text-start ">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <CSRFTokenField token={csrfToken} setToken={setCsrfToken} />
                  <InputText
                    label="First Name"
                    inputType="text"
                    name="firstname"
                    rules={{ required: "First name is required" }}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <InputText
                    label="Last Name"
                    inputType="text"
                    name="lastname"
                    rules={{ required: "Last name is required" }}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <InputText
                  label="Email Address"
                  inputType="email"
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email is invalid",
                    },
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputText
                  label="Password"
                  inputType="password"
                  name="password"
                  placeholder="*************"
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[!@#$%^&*()_+]).+$/,
                      message: "Atleast one special character required",
                    },
                  }}
                />
                <InputText
                  label="Confirm Password"
                  inputType="password"
                  name="confirmPassword"
                  onChange={handleConfirmPasswordChange}
                  placeholder="*************"
                  rules={{
                    required: "Password is required",
                    // minLength: {
                    //   value: 6,
                    //   message: "Password must be at least 6 characters",
                    // },
                    // pattern: {
                    //   value: /^(?=.*[!@#$%^&*()_+])[!@#$%^&*()_+]+$/,
                    //   message: "Atleast one special character required",
                    // },
                  }}
                />

                {equal && (
                  <span className="text-sm text-red-500">
                    Passwords do not match
                  </span>
                )}

                {errorMsg && (
                  <div className="text-sm text-red-500 text-left">
                    {errorMsg}
                  </div>
                )}

                <p className="text-sm text-left">
                  By continuing, you agree to the{" "}
                  <a
                    href="#terms-of-use"
                    className="text-versich-blue underline hover:no-underline hover:text-versich-blue-hover"
                  >
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a
                    href="#privacy-policy"
                    className="text-versich-blue underline hover:no-underline hover:text-versich-blue-hover"
                  >
                    Privacy Policy
                  </a>
                  .{" "}
                </p>
                <ConfirmButton
                  type="submit"
                  text={
                    loading ? "Creating an account..." : "Create an account"
                  }
                  clickHandler={myClickHandler}
                  loading={loading}
                />
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

                <SocialAccounts google={{ url: process.env.REACT_APP_API_GOOGLE_OAUTH2_URL, text: "Continue with Google" }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Signup;
