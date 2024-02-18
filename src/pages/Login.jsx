import React from 'react';
import { Link } from 'react-router-dom';
import ConfirmButton from '../components/Buttons/ConfirmButton';
import InputText from '../components/InputText';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className='py-10 md:py-14 mb-12 px-3 overflow-hidden flex justify-center  bg-versich-primary-bg items-center'>
      <div className='w-full bg-white shadow-md py-5 md:py-10 px-5 md:px-12 max-w-lg rounded-md'>
        <h2 className=' text-3xl leading-normal text-left mb-5 text-versich-darktext-color font-medium '>Log in</h2>
        <div className='w-full' >

          {/* form */}
          <div className='space-y-4 md:space-y-5 '>
            <InputText label='Email address or username' inputType='text' />
            <InputText label='Password' inputType='password' />
            <button className='flex items-center'>
              <input type="checkbox" className="mr-2" id='remember' />
              <label htmlFor="remember" className='text-sm text-versich-label hover:font-bold' >
                Remember me
              </label>
            </button>
            <p className='text-sm text-left'>By continuing, you agree to the <a href="#" className='text-versich-blue underline hover:text-versich-blue-hover hover:font-bold'>Terms of use</a> and <a href="#" className='text-versich-blue underline hover:text-versich-blue-hover hover:font-bold' >Privacy Policy</a>. </p>
            <ConfirmButton text='Log in' />
            <Link to='#' className='underline block text-sm hover:font-bold' href='#'>Forget Password</Link>
            <p className='text-sm '>Don't have an account? <Link to='/signup' className='text-versich-blue hover:text-versich-blue-hover hover:font-bold' href='#'>Sign up</Link></p>

            {/* divider */}
            <div className='flex items-center gap-5 justify-between'>
              <div className='bg-gray-500 h-[2px] w-full rounded-md' />
              <p>Or</p>
              <div className='bg-gray-500 h-[2px] w-full' />
            </div>

            <button className='flex items-center gap-5 w-[95%] hover:w-full transition-all duration-6000 ease-in-out md:w-4/5 m-auto justify-center py-3 rounded-lg border-2 border-versich-border hover:shadow-md hover:bg-versich-blue hover:text-white hover:border-none'>
              <FcGoogle />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
