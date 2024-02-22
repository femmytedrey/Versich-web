import React, { useState } from 'react';
import InputText from '../components/InputText';
import ConfirmButton from '../components/Buttons/ConfirmButton';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useForm, FormProvider } from "react-hook-form";


const Signup = () => {
  const [ equal, setEqual] = useState(false);
  const methods = useForm();
  const { formState } = methods;

  const onSubmit = (data) => {
    if(data.password !== data.confirmPassword){
      setEqual(true);
      return;
    }
    console.log(data)
    methods.reset()
  }
  
  const handleConfirmPasswordChange = () => {
    setEqual(false);
  };

  return (
    <FormProvider {...methods}>
      <div className='py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center  bg-versich-primary-bg items-center'>
        <div className='w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md'>
          <h2 className=' text-3xl leading-normal text-left mb-5 text-versich-darktext-color font-medium '>Create an account</h2>
          <div className='w-full' >


            {/* form */}
            <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
              <div className='space-y-4 md:space-y-5 '>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                  <InputText label='First Name' inputType='text' name='firstName' rules={{required: 'First name is required'}} />
                  <InputText label='Last Name' inputType='text' name='lastName' rules={{ required: 'Last name is required'}} />
                </div>
                <InputText label='Email Address' inputType='email' name='email' rules={{ required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email is invalid' } }} />
                <InputText label='Password' inputType='password' name='password' rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters'}, pattern: { value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/, message: 'Password must have Uppercase, Lowercase, Number, and Special Character.' } }} />
                <InputText label='Confirm Password' inputType='password' name='confirmPassword' onChange={handleConfirmPasswordChange} rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters'}, pattern: { value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/, message: 'Password must have Uppercase, Lowercase, Number, and Special Character.' } }} />

                {equal && (
                  <span className="text-sm text-red-500">
                    Passwords do not match
                  </span>
                )}

                <p className='text-sm text-left'>By continuing, you agree to the <a href="#" className='text-versich-blue underline hover:no-underline hover:text-versich-blue-hover'>Terms of use</a> and <a href="#" className='text-versich-blue underline hover:no-underline hover:text-versich-blue-hover' >Privacy Policy</a>. </p>
                <ConfirmButton type='submit' text='Create an account' />
                <p className='text-sm '>Already have an account? <Link to='/login' className='text-versich-blue hover:text-versich-blue-hover hover:underline' href='#'>Log in</Link></p>

                {/* divider */}
                <div className='flex items-center gap-5 justify-between'>
                  <div className='bg-gray-500 h-[2px] w-full rounded-md' />
                  <p>Or</p>
                  <div className='bg-gray-500 h-[2px] w-full' />
                </div>
                <button className='flex items-center gap-5 w-full transition-all duration-6000 ease-in-out md:w-4/5 m-auto justify-center py-3 rounded-lg border-2 border-versich-border hover:shadow-md hover:bg-gray-100'>
                  <FcGoogle />
                  Continue with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default Signup;
