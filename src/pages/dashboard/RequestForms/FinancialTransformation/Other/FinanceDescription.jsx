const OtherFinanceDescription = ({
  register,
  errors,
  setValue,
  formData,
  setFormData,
}) => {
  const handleDescriptionChange = (event) => {
    const newValue = event.target.value;
    setValue("otherDescription", newValue);
    setFormData({ ...formData, otherDescription: newValue });
  };

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-versich-dark-blue font-semibold pb-2">
          Describe what you need, The more detailed, the better
        </p>
        <div className="space-y-3">
          <textarea
            {...register("otherDescription", { required: true })}
            placeholder="Describe what you need..."
            className="border-2 outline-none p-3 resize-none w-full h-32 rounded-lg"
            value={formData.otherDescription || ""}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>

        {errors.otherDescription && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please provide a description</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherFinanceDescription;
