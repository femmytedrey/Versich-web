
const ContactUs = () => {
  return (
    <div className='flex flex-col flex-1'>
      <p className='pb-4 font-bold text-md'>Contact us</p>
      <ul className='flex flex-col gap-y-3 text-sm text-[#BDBDBD]'>
        <li className='hover:text-[#ECECEC]'>
          <a href="tel:+447782350419">(+44) 7782350419</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
          <a href="mailto:info@versich.com">info@versich.com</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
          <span>Broad House, Imperial Drive HA2 7BL London, United Kingdom</span>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
