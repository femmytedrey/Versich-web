import { useEffect } from "react";

const SystemAdminFinanceDescription = ({ register, errors, setValue, formData, setFormData }) => {
    useEffect(() => {
        if (!formData.systemAdminDescription) {
          setValue("systemAdminDescription", "");
          setFormData({ ...formData, systemAdminDescription: "" });
        }
      }, [formData.systemAdminDescription, setValue, setFormData]);

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
          ></textarea>
        </div>

        {errors.systemAdminDescription && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please provide a systemAdminDescription</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemAdminFinanceDescription;
