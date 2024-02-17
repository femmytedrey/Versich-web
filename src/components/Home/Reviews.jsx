import React from 'react';
import Testimony from './Testimony';
import testifiers from '../../assets/Testifiers';

const Reviews = () => {
  return (
    <div className='my-16'>
      <p className='text-4xl font-bold text-versich-darktext-color'>Reviews</p>
      <div>
        <Testimony testifiers={testifiers}/>
      </div>
    </div>
  );
}

export default Reviews;
