import { Skeleton } from '@/app/components';

const Loading = () => {
  return (
    <div className='max-w-xl flex flex-col gap-2'>
      <Skeleton height='2em' />
      <Skeleton />
      <Skeleton height='15em' />
      <Skeleton width='8em' height='2em' />
    </div>
  );
};

export default Loading;
