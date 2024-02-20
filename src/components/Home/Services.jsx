import React from 'react';
import Service from './Service';
import ServiceImages from '../../assets/ServiceImages';

const Services = () => {
  return (
    <div className='mt-16'>
      <div className='text-start md:text-center px-10'>
        <p className='text-lg text-versich-light-blue mb-2'>Services</p>
        <p className='text-4xl font-bold text-versich-darktext-color'>We Provide The Best <span>Service</span></p>
      </div>
      <div className='my-6'>
        <Service servicesImages={ServiceImages}/>
      </div>
    </div>
  );
}

export default Services;
