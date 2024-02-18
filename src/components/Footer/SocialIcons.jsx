import React from 'react';

const SocialIcons = ({ SocialIconsData }) => {
  return (
    <div className='flex gap-5 py-3 flex-wrap lg:flex-nowrap justify-center md:justify-end h-full items-center flex-1'>
      {SocialIconsData.map((data) => {
        return (
          <div key={data.id} className='bg-white p-2.5 rounded-full shadow-md hover:bg-[#E8E8E8] cursor-pointer relative overflow-hidden group'>
            <a href={data.url} target="_blank" rel="noreferrer"><img src={data.icon} alt="icons" className='w-6 h-6 transition-transform transform-gpu scale-90 cursor-pointer' /></a>
          </div>
        )
      })}
    </div>
  );
}

export default SocialIcons;
