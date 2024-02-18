import React from 'react';
import { PiArrowRightThin } from "react-icons/pi";


const Service = ({ servicesImages }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-7 mt-7 mb-7'>
      {servicesImages.map((service) => (
        <div key={service.id} className='flex flex-col h-auto shadow-xl my-3 rounded-2xl overflow-hidden text-center'>
            <div className='h-[200px] relative overflow-hidden group'>
                <img src={service.img} alt={service.name} className='object-cover w-full h-full transition-transform transform-gpu scale-100 group-hover:scale-125 cursor-pointer' />
            </div>
            <div className='h-auto text-start p-4'>
                <p className='font-bold text-lg text-versich-darktext-color'>{service.name}</p> 
                <a href={service.link} className='flex cursor-pointer items-center gap-x-2 text-versich-light-blue font-semibold hover:font-extrabold hover:gap-x-5 transition-all duration-500 ease-in-out'>
                    Find a professional
                    <PiArrowRightThin className='my-3'/>
                </a>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Service;
