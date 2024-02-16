import React from 'react';
import Service from './Service';
import ServiceImages from '../../assets/ServiceImages';

const Services = () => {
  return (
    <div className='px-10 md:px-16 lg:px-28'>
      <div className='text-start mt-16'>
        <p className='text-lg text-versich-light-blue mb-2'>Services</p>
        <p className='text-4xl font-bold text-versich-darktext-color'>We Provide The Best <span>Service</span></p>
      </div>
      <div>
        <Service servicesImages={ServiceImages}/>
      </div>
    </div>
  );
}

export default Services;
