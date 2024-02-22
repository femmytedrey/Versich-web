import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useFormContext } from 'react-hook-form';

const DropdownField = ({ label, options, placeholder, name, rules }) => {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value !== '') {
      register(name); 
    }
    setSelectedOption(value);
  };

  return (
    <div className="space-y-2 text-start">
      <div>
        <label htmlFor={name} className="text-versich-label text-sm">
          {label}
        </label>
      </div>
      <div className="relative">
        <select
          id={name}
          name={name}
          {...register(name, rules)}
          onChange={handleSelectChange}
          value={selectedOption || ''}
          className="w-full h-10 rounded-md border-[1px] border-versich-border px-3 pr-8 appearance-none focus:outline-none cursor-pointer hover:border-versich-blue"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              value={option.value}
              key={option.value}
              className="w-full h-10 rounded-md border-[1px] border-versich-border px-3 pr-8 appearance-none focus:outline-none"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <IoIosArrowDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      {errors[name] && (
        <span className="text-sm text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
};

export default DropdownField;
