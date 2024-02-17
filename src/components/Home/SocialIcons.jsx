import React from 'react';

const SocialIcons = ({ SocialIconsData }) => {
  return (
    <div className='flex gap-5 py-3 flex-wrap lg:flex-nowrap justify-center md:justify-end h-full items-center flex-1'>
      {SocialIconsData.map((data) => {
        return(
          <div key={data.id} className='bg-white p-3 rounded-full shadow-md'>
            <a href={data.url} target="_blank" rel="noreferrer"><img src={data.icon} alt="icons" /></a>
          </div>
        )
      })}
    </div>
  );
}

export default SocialIcons;
