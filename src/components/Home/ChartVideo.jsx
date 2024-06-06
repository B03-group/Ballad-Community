import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export const ChartVideo = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <StVideoBox>
      <StSlideButtonBox>
        <StPreviousBtn className={`video-swiper-prev`} />
        <StH2>TOP10 Video</StH2>
        <StNextBtn className={`video-swiper-next`} />
      </StSlideButtonBox>

      <StSwiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        slidesPerGroup={1}
        rewind={true}
        navigation={{
          prevEl: `.video-swiper-prev`,
          nextEl: `.video-swiper-next`
        }}
        pagination={{ type: 'fraction' }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ReactPlayer
            url={'https://www.youtube.com/embed/Z4qVfCi_lUI'}
            controls={true}
            width={'450px'}
            height={'300px'}
          ></ReactPlayer>
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            url={'https://www.youtube.com/embed/TqpvY0v60ws'}
            controls={true}
            width={'450px'}
            height={'300px'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=BXzoYQ-3ETs'}
            controls={true}
            width={'450px'}
            height={'300px'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=JleoAppaxi0'}
            controls={true}
            width={'450px'}
            height={'300px'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=tuCuqYg8k8E'}
            controls={true}
            width={'450px'}
            height={'300px'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=TyCYGCCD6iQ'}
            controls={true}
            width={'450px'}
            height={'300px'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=IMWT6937uUs'}
            controls={true}
            width={'450px'}
            height={'300px'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=z26y43fVGYc'}
            controls={true}
            width={'450px'}
            height={'300px'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            url={'https://www.youtube.com/watch?v=_lQxaYmt0DQ'}
            controls={true}
            width={'450px'}
            height={'300px'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReactPlayer
            url={'  https://www.youtube.com/watch?v=SrQzxD8UFdM'}
            controls={true}
            width={'450px'}
            height={'300px'}
          />
        </SwiperSlide>
      </StSwiper>
    </StVideoBox>
  );
};
const StVideoBox = styled.div`
  margin: auto auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 450px;
`;
const StH2 = styled.h2`
  margin: 20px auto;
  width: 454px;
  text-align: center;
  font-size: 35px;
`;
const StSwiper = styled(Swiper)`
  max-width: 450px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
`;

const StSlideButtonBox = styled.div`
  display: flex;
  margin: 0 15px;
  max-width: 450px;
  justify-content: space-between;
  align-items: center;
`;
const StPreviousBtn = styled(GrFormPrevious)`
  box-sizing: border-box;
  cursor: pointer;
  width: 30px;
  height: 25px;
  border: 2px solid black;
  border-radius: 14px;
  text-align: center;
  align-content: center;
  font-size: 40px;
  &:active {
    color: white;
    background-color: black;
  }
`;

const StNextBtn = styled(GrFormNext)`
  box-sizing: border-box;
  cursor: pointer;
  width: 30px;
  height: 25px;
  border: 2px solid black;
  border-radius: 14px;
  text-align: center;
  align-content: center;
  font-size: 40px;
  &:active {
    color: white;
    background-color: black;
  }
`;
