"use client"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface ProductsProps {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}
interface Props {
    products: ProductsProps[] | any;
}
function AllProducts({products}: Props) {
  return (
    <div className='w-full'>
        
        <div className='mt-20 w-full  flex flex-wrap gap-10 items-center justify-center'>
           
           {Array.isArray(products) && products.length > 0 ? (
  products.map((item) => (
    <Link href="/" key={item.id}>
      {<BackgroundGradient className="rounded-[22px] w-80 relative   h-105 flex flex-col items-center justify-center text-center p-4  sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={item.image}
          
          height="150"
          width="150"
          className="object-contain rounded-full absolute top-10"
        />
        <p className="text-base  lg:text-[1rem] absolute top-[50%]  sm:text-sm text-black mt-4 mb-2 dark:text-neutral-200">
            {item.title}
        </p>
 
        <button className="rounded-full pl-4 pr-1 py-1 absolute bottom-5 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {item.price}
          </span>
        </button>
      </BackgroundGradient>}
    </Link>
  ))
) : (
  <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
)}
           
            </div>
        </div>
  )}

export default AllProducts