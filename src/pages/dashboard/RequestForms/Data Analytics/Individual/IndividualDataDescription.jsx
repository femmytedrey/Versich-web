import { useEffect } from "react";

const IndividualDataDescription = ({ register, errors, setValue, formData, setFormData }) => {
    useEffect(() => {
        if (!formData.description) {
          setValue("individualdescription", "");
          setFormData({ ...formData, individualdescription: "" });
        }
      }, [formData.individualdescription, setValue, setFormData]);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-versich-dark-blue font-semibold pb-2">
          Describe what you need, The more detailed, the better
        </p>
        <div className="space-y-3">
          <textarea
            {...register("individualdescription", { required: true })}
            placeholder="Describe what you need..."
            className="border-2 outline-none p-3 resize-none w-full h-32 rounded-lg"
          ></textarea>
        </div>

        {errors.individualdescription && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please provide a description</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndividualDataDescription;
