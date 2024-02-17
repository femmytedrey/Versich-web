import React from 'react';
import hero from '../../assets/hero.jpg'
import Search from './Search';

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${hero})` }}
    className="background-image bg-cover bg-center bg-no-repeat mt-[-115px]">
      <div className='text-start text-white px-8 md:px-20 lg:px-48 w-full h-full bg-black bg-opacity-80 pt-[200px] pb-[124px]'>
        <div className='text-4xl lg:text-5xl font-[700]'>
            <h1 className='leading-tight'>Find the <span className='block'>perfect professional <span className='block'>for you</span></span></h1>
            <p className='text-xl tracking-wide py-6 font-[400]'>Get free quotes within minutes</p>
        </div>
        <Search />
      </div>

    </div>
  );
}

export default Hero;
