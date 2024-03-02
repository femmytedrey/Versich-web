import { Link } from 'react-router-dom';
import { MdCopyright } from "react-icons/md";

import { homePath } from '../../assets/constants';
import logo from '../../assets/logo.png'
import SocialIcons from './SocialIcons';
import SocialIconsData from '../../assets/SocialIconsData';
import FooterServices from './FooterServices';
import CompanyInfo from './CompanyInfo';
import ContactUs from './ContactUs';

const Footer = () => {
  return (
    <div className='bg-versich-dark-blue py-4'>
      <div className='flex flex-col md:flex-row border-b-2 border-white border-solid px-8 md:px-16 lg:px-28 py-7 justify-between'>
        <div className='flex flex-col text-start gap-y-4 pb-3 w-full lg:w-[350px]'>
          <Link to={homePath} className="inline-flex items-center">
            <img src={logo} alt="logo" className="w-[48px] md:w-[52px] brightness-0 invert" />&nbsp;
            <span className="font-semibold text-xl text-white">VersiMarket</span>
          </Link>
          <p className='text-white text-sm'>To elevate digital presence, enhance data analytics, reporting and drive business growth.</p>
        </div>
        <div>
          <SocialIcons SocialIconsData={SocialIconsData} />
        </div>
      </div>

      <div className='text-start px-8 md:px-16 lg:px-28 py-12 text-white flex flex-col md:flex-row justify-between gap-y-6 border-b-2 border-white border-solid gap-x-7 lg:gap-x-16'>
        <FooterServices />
        <CompanyInfo />
        <ContactUs />
      </div>
      <div className='px-8 md:px-16 lg:px-28 text-white text-start py-4 flex items-center gap-x-3 text-sm'>
        <MdCopyright />
        <p> 2024 <a className="hover:text-versich-blue underline underline-offset-2 decoration-2 decoration-versich-blue/80" href="https://versich.com" target="_blank" rel="noreferrer">Versich</a>, All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
