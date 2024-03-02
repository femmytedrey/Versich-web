
const FooterServices = () => {
  return (
    <div>
      <p className='pb-4 font-bold text-md'>Services</p>
      <ul className='flex flex-col gap-y-3 text-sm text-[#BDBDBD]'>
        <li className='hover:text-[#ECECEC]'>
          <a href="#website">Website & development</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
          <a href="#data">Data  & Techonolgy</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
          <a href="#finance">Finance Transformation</a>
        </li>
        <li className='hover:text-[#ECECEC]'>
          <a href="#cloud">Cloud Computing</a>
        </li>
      </ul>
    </div>
  );
}

export default FooterServices;
