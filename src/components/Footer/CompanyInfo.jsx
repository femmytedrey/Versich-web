import React from 'react';

const CompanyInfo = () => {
  return (
    <div>
      <p className='pb-4 font-bold text-lg'>Company Info</p>
      <ul className='flex flex-col gap-y-3 text-sm text-[#BDBDBD]'>
        <li className='hover:text-[#ECECEC]'>
            <a href="#">Website & development</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
            <a href="#">Data  & Techonolgy</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
            <a href="#">Finance Transformation</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
            <a href="#">Cloud Computing</a>
        </li>
      </ul>
    </div>
  );
}

export default CompanyInfo;
