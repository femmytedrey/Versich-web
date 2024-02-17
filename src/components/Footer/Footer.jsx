import React from 'react';
import logo from '../../assets/Footer-logo.svg'
import SocialIcons from './SocialIcons';
import SocialIconsData from '../../assets/SocialIconsData';
import { MdCopyright } from "react-icons/md";
import FooterServices from './FooterServices';
import CompanyInfo from './CompanyInfo';
import ContactUs from './ContactUs';



const Footer = () => {
  return (
    <div className='bg-versich-dark-blue py-4'>
      <div className='flex flex-col md:flex-row border-b-2 border-white border-solid px-8 md:px-16 lg:px-28 py-7 justify-between'>
        <div className='flex flex-col text-start gap-y-4 pb-3 w-full lg:w-[350px]'>
            <img src={logo} alt="logo" className="w-20" />
            <p className='text-white text-sm'>To elevate digital presence, enhance data analytics, reporting and drive business growth.</p>
        </div>
        <div>
            <SocialIcons SocialIconsData = {SocialIconsData} />
        </div>
      </div>

      <div className='text-start px-8 md:px-16 lg:px-28 py-12 text-white flex flex-col md:flex-row justify-between gap-y-6 border-b-2 border-white border-solid gap-x-7 lg:gap-x-16'>
        <FooterServices />
        <CompanyInfo />
        <ContactUs />
      </div>
      <div className='px-8 md:px-16 lg:px-28 text-white text-start py-4 flex items-center gap-x-3 text-sm'>
        <MdCopyright />
        <p> 2024 VersiMarket, All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
