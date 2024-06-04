import React from 'react';
import { Carousel } from '../components/Home/Carousel';
import { ChartSlide } from '../components/Home/ChartSlide';
import dummyData from '../assets/dummyData';

const Home = () => {
  return (
    <>
      <ChartSlide />
      <Carousel data={dummyData}></Carousel>
    </>
  );
};

export default Home;
