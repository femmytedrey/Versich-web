import React, { useState, useEffect } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useFormContext } from "react-hook-form";

const InputText = ({
  label,
  inputType,
  placeholder,
  name,
  rules,
  onChange,
  defaultValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState, setValue, getValues } = useFormContext();
  const { errors } = formState;

  useEffect(() => {
    if (getValues(name)) {
      setShowPassword(true);
    }
  }, [getValues, name]);

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

  const handleChange = (e) => {
    setValue(name, e.target.value);
    if (onChange) {
      onChange(e);
    }
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
      <input
        type={determineInputType()}
        className={`w-full h-10 rounded-md border-[1px] border-versich-border px-3 ${errors[name] ? "border-red-500" : ""
          }`}
        placeholder={placeholder}
        name={name}
        {...register(name, rules)}
        onChange={handleChange}
        value={defaultValue}
        readOnly={defaultValue ? true : false}
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
