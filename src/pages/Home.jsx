import React from 'react';
import { Navbar } from '../components/Home/Navbar';
import { Carousel } from '../components/Home/Carousel';
import dummyData from '../assets/dummyData';
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel data={dummyData}></Carousel>
    </>
  );
};

export default Home;
