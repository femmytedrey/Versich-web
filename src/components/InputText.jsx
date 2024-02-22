import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useFormContext } from "react-hook-form";

/**
 * Custom input component that toggles between password visibility.
 *
 * Uses the useState hook to manage password visibility state.
 * Renders an input with type "password" or "text" based on visibility state.
 * Shows eye icon to toggle visibility on click.
 */

const InputText = ({
  label,
  inputType,
  placeholder,
  name,
  rules,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState } = useFormContext();
  const { errors } = formState;

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const determineInputType = () => {
    return inputType === "email"
      ? "email"
      : inputType === "text"
      ? "text"
      : showPassword
      ? "text"
      : inputType;
  };

  return (
    <div className="space-y-2">
      {/* label */}
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="text-versich-label text-sm">
          {label}
        </label>
        {inputType === "password" && (
          <button
            type="button"
            className="flex items-center space-x-2 text-sm"
            onClick={togglePassword}
          >
            {showPassword ? (
              <BsFillEyeFill className="text-versich-label" />
            ) : (
              <BsFillEyeSlashFill className="text-versich-label" />
            )}
            <span className="text-versich-label">
              {showPassword ? "Hide" : "Show"}
            </span>
          </button>
        )}
      </div>
      {/* <input type={inputType} className="w-full h-10 rounded-md border-[1px] border-versich-border" /> */}
      <input
        type={determineInputType()}
        className={`w-full h-10 rounded-md border-[1px] border-versich-border px-3 ${
          errors[name] ? "border-red-500" : ""
        }`}
        placeholder={placeholder}
        name={name}
        {...register(name, rules)}
        onChange={onChange}
      />
      {errors[name] && (
        <div className="text-sm text-red-500 text-left">
          {errors[name].message}
        </div>
      )}
    </div>
  );
};

export default InputText;
