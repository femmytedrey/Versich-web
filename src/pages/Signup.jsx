import React from 'react';
import InputText from '../components/InputText';
import ConfirmButton from '../components/Buttons/ConfirmButton';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const Signup = () => {
  return (
    <div className='py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center  bg-versich-primary-bg items-center'>
      <div className='w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md'>
        <h2 className=' text-3xl leading-normal text-left mb-5 text-versich-darktext-color font-medium '>Create an account</h2>
        <div className='w-full' >


          {/* form */}
          <div className='space-y-4 md:space-y-5 '>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
              <InputText label='First Name' inputType='text' />
              <InputText label='Last Name' inputType='text' />
            </div>
            <InputText label='Email Address' inputType='text' />
            <InputText label='Password' inputType='password' />
            <InputText label='Confirm Password' inputType='password' />
            
            <p className='text-sm text-left'>By continuing, you agree to the <a href="#" className='text-versich-blue underline'>Terms of use</a> and <a href="#" className='text-versich-blue underline' >Privacy Policy</a>. </p>
            <ConfirmButton text='Create an account' />
            <Link to='#' className='underline block text-sm' href='#'>Forget Password</Link>
            <p className='text-sm '>Don't have an account? <Link to='#' className='text-versich-blue' href='#'>Sign up</Link></p>

            {/* divider */}
            <div className='flex items-center gap-5 justify-between'>
              <div className='bg-gray-500 h-[2px] w-full rounded-md' />
              <p>Or</p>
              <div className='bg-gray-500 h-[2px] w-full' />
            </div>
            <button className='flex items-center gap-5 w-full  md:w-4/5 m-auto justify-center py-3 rounded-lg border-2 border-versich-border  '>
              <FcGoogle />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
