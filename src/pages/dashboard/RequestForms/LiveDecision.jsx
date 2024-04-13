import { useState } from "react";

const LiveDecision = ({ register, errors, setValue, formData, setFormData }) => {
  const [industries, setIndustries] = useState({
    Soon: {
      value: "As soon as possible",
      label: "As soon as possible",
      selected: false,
    },
    Weeks: {
      value: "Within a few weeks",
      label: "Within a few weeks",
      selected: false,
    },
    Month: {
      value: "Within a month",
      label: "Within a month",
      selected: false,
    },
    Months: {
      value: "Within a few months",
      label: "Within a few months",
      selected: false,
    },
    Discussion: {
      value: "I would like to discuss this with the professional",
      label: "I would like to discuss this with the professional",
      selected: false,
    },
    other: {
      value: "",
      label: "Other",
      selected: false,
    },
  });
  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className=" text-versich-dark-blue font-semibold pb-2">When would you like the website to go live/be updated?</p>
        <div className="space-y-3"></div>
      </div>
    </div>
  );
};

export default LiveDecision;
