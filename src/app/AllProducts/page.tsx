"use client"
import AllProducts from '@/components/AllProducts'
import React, { useEffect, useState } from 'react'

const getData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products?limit=60");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array as a fallback
  }
};

const page = () => {
  // State to hold the fetched data
  const [data, setData] = useState<any>();

  // Fetch data only once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      console.log(data);
      console.log(data.products);
      setData(data.products); // Set the data in the state
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  console.log(data);


 
  return (
    <div className='max-w-screen-xl mx-auto h-screen'>
        <div className='mt-50'><h1 className='text-4xl  lg:text-8xl text-center cursor-none'>All Products</h1>
        {Array.isArray(data) && data.length > 0 && <AllProducts products={data} />}
        </div>
    </div>  
  )

}
    
export default page