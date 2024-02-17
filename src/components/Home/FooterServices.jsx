import React from 'react';

const FooterServices = () => {
  return (
    <div>
      <p className='pb-4 font-bold text-xl'>Services</p>
      <ul className='flex flex-col gap-y-3 text-[#BDBDBD] font-bold'>
        <li>
            <a href="#">Website & development</a>
        </li>
        <li>
            <a href="#">Data  & Techonolgy</a>
        </li>
        <li>
            <a href="#">Finance Transformation</a>
        </li>
        <li>
            <a href="#">Cloud Computing</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterServices;
