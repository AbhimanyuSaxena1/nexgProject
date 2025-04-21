"use client";
import { useRouter } from 'next/navigation';
import { BackgroundGradient } from './ui/background-gradient';
import { cn } from '@/lib/utils';
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

function Products({ products }: Props) {
    const router = useRouter();

    const handleNavigate = (path: string) => {
        router.push(path); // Programmatic navigation
    };

    console.log(products);

    return (
        <div className='max-w-screen-xl mx-auto relative py-10 lg:px-10 min-h-60'>
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black"></div>
            <div>
                <div className='w-full text-center '>
                    <h1 className='font-medium relative text-blue-600 text-5xl'>Best Sellers</h1>
                </div>
                <div className='mt-20 w-full flex flex-wrap gap-10 items-center justify-center'>
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map((item) => (
                            <div
                                key={item.id}
                                className="cursor-pointer"
                                onClick={() => handleNavigate('/')} // Navigate to "/"
                            >
                                <BackgroundGradient className="rounded-[22px] w-80 relative h-105 flex flex-col items-center justify-center text-center p-4 sm:p-10 bg-white dark:bg-zinc-900">
                                    <img
                                        src={item.image}
                                        height="150"
                                        width="150"
                                        className="object-contain rounded-full absolute top-10"
                                        alt={item.title}
                                    />
                                    <p className="text-base lg:text-[1rem] absolute top-[50%] sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {item.title}
                                    </p>
                                    <button className="rounded-full pl-4 pr-1 py-1 absolute bottom-5 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                        <span>Buy now</span>
                                        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                            {item.price}
                                        </span>
                                    </button>
                                </BackgroundGradient>
                            </div>
                        ))
                    ) : (
                        <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
                    )}
                </div>
                <div className='w-full mx-auto mt-20 flex justify-center mb-10 items-center'>
                    <button
                        onClick={() => handleNavigate('/AllProducts')} // Navigate to "/AllProducts"
                        className="p-[3px] cursor-pointer relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2 z-index-100 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                            All Products
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Products;