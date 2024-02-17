import React from 'react';

const ContactUs = () => {
  return (
    <div className='flex flex-col flex-1'>
      <p className='pb-4 font-bold text-lg'>Contact us</p>
      <ul className='flex flex-col gap-y-3 text-sm text-[#BDBDBD]'>
        <li className='hover:text-[#ECECEC]'>
            <a href="#">(+44) 7782350419</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
            <a href="#">info@versich.com</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
            <a href="#">Broad House, Imperial Drive HA2 7BL London, United Kingdom</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
