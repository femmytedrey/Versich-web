// PhoneNumber.jsx

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumber = ({ onChange }) => {
  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div className="text-start">
      <div className="flex flex-col gap-y-2 text-start">
        <label>Phone number:</label>
        <div className="w-full">
          <PhoneInput
            country={"us"}
            onChange={handleChange}
            inputProps={{
              required: true,
              className:
                "w-full h-10 pl-14 rounded-md border-[1px] border-versich-border px-3 text-lg focus:outline-none",
            }}
            containerClass={`relative`}
            buttonClass={`absolute inset-y-4 left-0 w-12 text-center px-4 py-2`}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
