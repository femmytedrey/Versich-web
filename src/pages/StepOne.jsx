// Import necessary components and icons
import React, { useState } from 'react';
import RadioSelection from '../components/RadioSelection';
import DropdownField from '../components/DropdownField';
import { IoIosAlert } from "react-icons/io";
import StepButton from '../components/Buttons/StepButton';
// import ChoiceButton from '../components/Buttons/ChoiceButton';

const StepOne = () => {
//   const [yesSelected, setYesSelected] = useState(false);
//   const [noSelected, setNoSelected] = useState(false);

//   const handleToggle = (option) => {
//     setYesSelected(option === 'yes');
//     setNoSelected(option === 'no');
//   };

  const regionCoverage = [
    { value: 'value1', label: 'I serve customers worldwide' },
    { value: 'value2', label: 'I serve customers within' },
  ];

  const milesCoverage = [
    { value: 'value1', label: '3 miles' },
    { value: 'value2', label: '20 miles' },
  ];

  const postcodes = [
    { value: 'value1', label: 'option 1' },
    { value: 'value2', label: 'option 2' },
  ];

  const handleButtonClick = () => {
    console.log('testing btn')
  }

  return (
    <div className='py-10 md:py-14 px-3 mb-12 overflow-hidden bg-versich-primary-bg flex items center justify-center'>
      <div className='w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md space-y-6'>
        <div className='space-y-5'>
          <h2 className='text-start text-xl text-versich-dark-blue font-semibold'>Where would you like to see leads from?</h2>
          <p className='text-start'>Tell us the area you cover so we can show you leads for your location</p>
        </div>
        <RadioSelection options={regionCoverage} />
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          <DropdownField options={milesCoverage} placeholder='<-- Select -->' />
          <DropdownField options={postcodes} placeholder='<-- Select -->' />
        </div>
        <div className='flex gap-x-3 items-start text-start'>
          <IoIosAlert className='text-gray-500 text-2xl' />
          <p>You can change your location at any time</p>
        </div>
        {/* <div className='flex gap-x-3 items-start text-start'>
          <ChoiceButton text="Yes" isSelected={yesSelected} onToggle={() => handleToggle('yes')} />
          <ChoiceButton text="No" isSelected={noSelected} onToggle={() => handleToggle('no')} />
        </div> */}
        <StepButton text={'next'} handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default StepOne;
