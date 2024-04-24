const SystemAdminFinanceDescription = ({ register, errors, setValue, formData, setFormData }) => {
  const handleDescriptionChange = (event) => {
    const newValue = event.target.value;
    setValue("systemAdminDescription", newValue);
    setFormData({ ...formData, systemAdminDescription: newValue });
  };

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-versich-dark-blue font-semibold pb-2">
          Describe what you need, The more detailed, the better
        </p>
        <div className="space-y-3">
          <textarea
            {...register("systemAdminDescription", { required: true })}
            placeholder="Describe what you need..."
            className="border-2 outline-none p-3 resize-none w-full h-32 rounded-lg"
            value = {formData.systemAdminDescription || ""}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>

        {errors.systemAdminDescription && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please provide your description in details...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemAdminFinanceDescription;
