import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <div>
      <Skeleton height='2em' className='max-w-xl' />
      <div className='flex gap-2 my-4 items-baseline'>
        <Skeleton width='5em' />
      </div>
      <Skeleton count={3} className='max-w-xl' />
    </div>
  );
};

export default Loading;
