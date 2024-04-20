import { useEffect } from "react";

const ErpFinanceDescription = ({ register, errors, setValue, formData, setFormData }) => {
    useEffect(() => {
        if (!formData.erpDescription) {
          setValue("erpDescription", "");
          setFormData({ ...formData, erpDescription: "" });
        }
      }, [formData.erpDescription, setValue, setFormData]);

  return (
    <div>
      <div className="space-y-4 pb-12">
        <p className="text-versich-dark-blue font-semibold pb-2">
          Describe what you need, The more detailed, the better
        </p>
        <div className="space-y-3">
          <textarea
            {...register("erpDescription", { required: true })}
            placeholder="Describe what you need..."
            className="border-2 outline-none p-3 resize-none w-full h-32 rounded-lg"
          ></textarea>
        </div>

        {errors.erpDescription && (
          <div className="pb-3">
            <p className="text-red-500 text-sm">Please provide a erpDescription</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErpFinanceDescription;
