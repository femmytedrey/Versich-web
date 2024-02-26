import React from "react";
import { Link } from "react-router-dom";
import ConfirmButton from "../components/Buttons/ConfirmButton";
import InputText from "../components/InputText";
import { FcGoogle } from "react-icons/fc";
import { useForm, FormProvider } from "react-hook-form";

const Login = () => {
  const methods = useForm();


  const onSubmit = (data) => {
    console.log(data);
    methods.reset();
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
                <InputText
                  label="Email address or username"
                  name="combinedInputs"
                  inputType="text"
                  placeholder="Enter your email or username"
                  rules={{ required: "Field is required" }}
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
                />
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
                    href="#"
                    className="text-versich-blue underline hover:no-underline hover:text-versich-blue-hover"
                  >
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-versich-blue underline hover:no-underline hover:text-versich-blue-hover"
                  >
                    Privacy Policy
                  </a>
                  .{" "}
                </p>
                <ConfirmButton type="submit" text="Log in" />
                <Link
                  to="#"
                  className="underline block text-sm hover:text-versich-blue-hover text-center"
                  href="#"
                >
                  Forget Password
                </Link>
                <p className="text-sm text-center">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-versich-blue hover:text-versich-blue-hover hover:underline"
                    href="#"
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
