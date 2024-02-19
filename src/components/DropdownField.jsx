import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const DropdownField = ({label, options, placeholder}) => {
    const [selectedOption, setSelectedoption] = useState('');

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedoption(value);
    }
  return (
    <div className='space-y-2 text-start'>
        <div>
            <label htmlFor="dropdown" className='text-versich-label text-sm'>{label}</label>
        </div>
        <div className='relative'>
            <select id='dropdown'value={selectedOption} onChange={handleSelectChange} className='w-full h-10 rounded-md border-[1px] border-versich-border px-3 pr-8 appearance-none focus:outline-none cursor-pointer hover:border-versich-blue'>
                <option value='' disabled>{placeholder}</option>
                {options.map((option) => (
                    <option value={option.value} key={option.value} className='w-full h-10 rounded-md border-[1px] border-versich-border px-3 pr-8 appearance-none focus:outline-none'
                    >{option.label}</option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <IoIosArrowDown className="w-5 h-5 text-gray-400" />
            </div>
            
        </div>
    </div>
  );
}

export default DropdownField;
