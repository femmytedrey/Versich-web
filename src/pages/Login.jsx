import React from 'react';
import InputText from '../components/InputText';

const Login = () => {
  return (
    <div className='py-10 md:py-14 px-3 overflow-hidden flex justify-center  bg-versich-primary-bg items-center'>
      <div className='w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md'>
        <h2 className=' text-3xl leading-normal text-left mb-5 text-versich-darktext-color font-medium '>Log in</h2>
        <div className='w-full' >


          {/* form */}
          <div className='space-y-4 md:space-y-5 '>
            <InputText label='Email address or username' inputType='text' />
            <InputText label='Password' inputType='password' />
            <button className='flex items-center'>
              <input type="checkbox" className="mr-2" id='remember' />
              <label htmlFor="remember" className='text-sm text-versich-label' >
                Remember me
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
