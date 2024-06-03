import React from 'react';
import { Carousel } from '../components/Home/Carousel';
import dummyData from '../assets/dummyData';
const Home = () => {
  return (
    <>
      <Carousel data={dummyData}></Carousel>
    </>
  );
};

export default Home;
