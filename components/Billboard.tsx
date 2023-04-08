import React from 'react'
import useBillboard from '@/hooks/useBillboard';

const Billboard = () => {
  const { data } = useBillboard();
  return (
    <div className="relative h-[56.25vw]">
      <video
        className='w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500'
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      />
    </div>
  )
}

export default Billboard
