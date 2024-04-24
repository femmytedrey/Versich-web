import { useEffect } from "react";

const FinanceDescription = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const handleDescriptionChange = (event) => {
    const newValue = event.target.value;
    setValue("description", newValue);
    setFormData({ ...formData, description: newValue });
  };

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-versich-dark-blue font-semibold pb-2">
          Describe what you need, The more detailed, the better
        </p>
        <div className="space-y-3">
          <textarea
            {...register("description", { required: true })}
            placeholder="Describe what you need..."
            className="border-2 outline-none p-3 resize-none w-full h-32 rounded-lg"
            value={formData.description || ""}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>

        {errors.description && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please provide a description</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceDescription;
