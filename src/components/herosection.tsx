"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Spotlight } from './ui/Spotlight';
import { Button } from './ui/moving-border';

function Herosection() {
  const router = useRouter();
  const handleNavigate = () => {
    // Safely navigate to '/explore'
    if (router && typeof router.push === 'function') {
      router.push('/explore');
    } else {
      console.error('Router is not available.');
    }
  };


  return (
    <div className='h-auto md:h-[45rem] gap-20 flex flex-col justify-center items-center w-full py-10 md:py-0 rounded-md overflow-hidden mx-auto relative'>
      <div className='p-4 w-fit text-4xl lg:text-6xl text-center'>
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="blue" />
        <h1 className='uppercase mt-20 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text'>
          Master The Art <br />
          <span className='text-2xl lg:text-5xl'>of</span> <br />
          <span className='text-6xl lg:text-8xl font-bold text-zinc-300 border-b-2 border-white'>Technology</span>
        </h1>
      </div>
      <div className='font-light'>
        <Button
          borderRadius="2rem"
          className="cursor-pointer dark:bg-zinc-900 text-lg text-black dark:text-white border-neutral-400 dark:border-zinc-700"
          onClick={() => router.push('/explore')}
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Herosection;