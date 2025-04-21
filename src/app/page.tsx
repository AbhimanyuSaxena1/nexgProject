"use client";
import { useState, useEffect } from "react";
import Herosection from "@/components/herosection";
import Products from "@/components/products";
import Founders from "@/components/Founders";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";

const getData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.in/api/products?limit=6");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    return []; // Return an empty array as a fallback
  }
};

const Home = () => {
  // State to hold the fetched data
  const [data, setData] = useState<any>();

  // Fetch data only once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
    
      setData(data.products); // Set the data in the state
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  console.log(data);

  return (
    <main className="min-h-screen bg-black/[0.96] bg-grid-white/[0.02] antialiased">
      <Herosection />
     {Array.isArray(data) && data.length > 0 && <Products products={data} />}
     <Founders />
    </main>
  );
};

export default Home;