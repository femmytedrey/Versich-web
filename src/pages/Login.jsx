import React from 'react';
import InputText from '../components/InputText';

const Login = () => {
  return (
    <div className='py-10 px-3 overflow-hidden flex justify-center bg-versich-primary-bg items-center'>
      <div className='w-full bg-white py-4 px-3 max-w-[580px]'>
        <form className='w-full' onClick={(e) => e.preventDefault()}>
          <InputText />
        </form>
      </div>
    </div>
  );
}

export default Login;
