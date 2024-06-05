import { ChartVideo } from './ChartVideo';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import styled from 'styled-components';

import { createClient } from '@supabase/supabase-js';
const supabase = createClient(import.meta.env.VITE_CHART_URL, import.meta.env.VITE_CHART_KEY);
const { data, error } = await supabase.from('ballad_chart').select('*').order('rank', { ascending: true }).range(0, 9);

export const ChartSlide = () => {
  return (
    <StChartContainer>
      <StChartBox>
        <StH2>주간 발라드 TOP10</StH2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          rewind={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
          style={{ height: '650px', width: '454px' }}
        >
          {data.map((e) => {
            return (
              <SwiperSlide key={e.title}>
                <StCard>
                  <img src={e.img_src}></img>
                  <StRank>{e.rank}위</StRank>
                  <StTitle>{e.title}</StTitle>
                  <StArtist>{e.artist}</StArtist>
                </StCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StChartBox>
      <StChartBox>
        <StH2>Official Video</StH2>
        <ChartVideo />
      </StChartBox>
    </StChartContainer>
  );
};

const StChartContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const StChartBox = styled.div`
  width: 454px;
  margin: 20px auto;
`;

const StH2 = styled.h2`
  margin: 20px auto;
  width: 454px;
  text-align: center;
  font-size: 35px;
`;
const StCard = styled.div`
  margin: 0 auto;
  width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
`;
const StRank = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: auto auto;
`;
const StTitle = styled.div`
  max-width: 400px;
  margin: auto auto;
  font-size: 25px;
  font-weight: 700;
`;
const StArtist = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;
