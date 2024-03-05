import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm, FormProvider } from "react-hook-form";

import ConfirmButton from "../../components/Buttons/ConfirmButton";
import InputText from "../../components/InputText";
import { signupPath } from "../../assets/constants";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/auth";
import { useState } from "react";
import CSRFTokenField from "../../components/CSRFTokenField";

const Login = () => {
  const methods = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoadnig] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Manually check form validity
      const isValid = await methods.trigger();

      if (!isValid) {
        // Handle validation errors, if any
        return;
      }

      setLoadnig(true)

      // Call the loginUser action to handle the authentication logic
      const result = await dispatch(loginUser(email, password, csrfToken));

      if (result.status !== "success") {
        // Handle unsuccessful login
        return;
      }

      // If the login is successful, reset the form
      methods.reset();
    } catch (error) {
      // Handle errors
      console.error(error);
      return setErrorMsg("Invalid credentials, please try again");
    } finally {
      // setErrorMsg("");
      // Reset the form or perform other actions regardless of success or failure
    }
  };

  const myClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FormProvider {...methods}>
      <div className="py-10 md:py-14 mb-12 px-3 overflow-hidden flex justify-center  bg-versich-primary-bg items-center">
        <div className="w-full bg-white shadow-md py-5 md:py-10 px-5 md:px-12 max-w-[580px] rounded-md">
          {/* <h2 className=' text-3xl leading-normal text-left mb-5 text-versich-darktext-color font-medium '>Log in</h2> */}
          <div className="w-full">
            {/* form */}
            <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="space-y-4 text-start md:space-y-5  ">
                <CSRFTokenField token={csrfToken} setToken={setCsrfToken} />
                <InputText
                  label="Email address or username"
                  name="Email or Username"
                  inputType="text"
                  placeholder="Enter your email or username"
                  rules={{ required: "Field is required" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputText
                  label="Password"
                  inputType="password"
                  placeholder="************"
                  name="password"
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                      message:
                        "Password must have Uppercase, Number, and Special Character.",
                    },
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errorMsg && (
                  <div className="text-sm text-red-500 text-left">
                    {errorMsg}
                  </div>
                )}
                <button className="flex items-center">
                  <input type="checkbox" className="mr-2" id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm text-versich-label hover:text-versich-blue-hover"
                  >
                    Remember me
                  </label>
                </button>
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
                  clickHandler={myClickHandler}
                  type="submit"
                  text={loading ? "Logging in..." : "Log In"}
                  loading={loading}
                />
                <Link
                  to="#"
                  className="underline block text-sm hover:text-versich-blue-hover text-center"
                >
                  Forget Password
                </Link>
                <p className="text-sm text-center">
                  Don't have an account?{" "}
                  <Link
                    to={signupPath}
                    className="text-versich-blue hover:text-versich-blue-hover hover:underline"
                  >
                    Sign up
                  </Link>
                </p>

                {/* divider */}
                <div className="flex items-center gap-5 justify-between">
                  <div className="bg-gray-500 h-[2px] w-full rounded-md" />
                  <p>Or</p>
                  <div className="bg-gray-500 h-[2px] w-full" />
                </div>

                <button
                  type="button"
                  className="flex items-center gap-5 w-full transition-all duration-6000 ease-in-out md:w-4/5 m-auto justify-center py-3 rounded-lg border-2 border-versich-border hover:shadow-md hover:bg-gray-100"
                >
                  <FcGoogle />
                  Continue with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Login;
