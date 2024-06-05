import React, { useState } from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdFavorite } from 'react-icons/md';
import { PiMicrophoneDuotone } from 'react-icons/pi';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const Carousel = ({ category, data, target }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <StSlideHeader key={'swiper-head'}>
        <span>{category}</span>
        <StSlideButtonBox>
          <StPreviousBtn className={`${target}-swiper-prev`} />
          <StNextBtn className={`${target}-swiper-next`} />
        </StSlideButtonBox>
      </StSlideHeader>

      <StSwiper
        key={category}
        onSwiper={setSwiperRef}
        slidesPerView={4}
        slidesPerGroup={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesOffsetBefore={50}
        slidesOffsetAfter={50}
        navigation={{
          prevEl: `.${target}-swiper-prev`,
          nextEl: `.${target}-swiper-next`
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          760: {
            slidesPerView: 2
          },
          1140: {
            slidesPerView: 3
          },
          1520: {
            slidesPerView: 4
          }
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.post_id}>
              <StCardDiv>
                <StImgDiv>
                  {item.img_url ? <StImg src={item.img_url} alt="" /> : <StDefaultIcon $target={target} />}
                </StImgDiv>
                <StH2>{item.title}</StH2>
                <StNickNameDiv>
                  <p>{item.writer}</p>
                </StNickNameDiv>
                <StTextDiv>
                  <StTextP>{item.content}</StTextP>
                  <StFavorDiv>
                    <StFillFavor />
                    <StFavorSpan>{item.like}</StFavorSpan>
                  </StFavorDiv>
                </StTextDiv>
              </StCardDiv>
            </SwiperSlide>
          );
        })}
      </StSwiper>
    </>
  );
};

const StSlideHeader = styled.div`
  width: 80%;
  font-size: 40px;
  margin: 20px auto;
  margin-top: 40px;
`;

const StSlideButtonBox = styled.div`
  display: inline-flex;
  margin: 0 15px;
  width: 75px;
  justify-content: space-between;
`;
const StPreviousBtn = styled(GrFormPrevious)`
  box-sizing: border-box;
  width: 34px;
  height: 34px;
  border: 2px solid black;
  border-radius: 17px;
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
  width: 34px;
  height: 34px;
  border: 2px solid black;
  border-radius: 17px;
  text-align: center;
  align-content: center;
  font-size: 40px;
  &:active {
    color: white;
    background-color: black;
  }
`;

const StSwiper = styled(Swiper)`
  border: 2px solid black;
  padding: 20px 0;
  width: 80%;
  min-width: 400px;
`;

const StCardDiv = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid black;
  border-radius: 20px;
`;

const StH2 = styled.div`
  box-sizing: border-box;
  padding: 0 20px;
  text-align: center;
  margin-top: 5px;
  font-weight: 600;
  width: 100%;
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StFillFavor = styled(MdFavorite)`
  width: 20px;
  height: 20px;
  fill: #ee115b;
`;
const StNickNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 30px 6px 20px;
`;
const StTextDiv = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;

const StTextP = styled.p`
  font-size: 1rem;
  max-width: 180px;
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StFavorDiv = styled.div`
  margin-left: auto;
`;
const StFavorSpan = styled.span`
  vertical-align: top;
`;

const StImgDiv = styled.div`
  img {
    width: 300px;
    height: 200px;
    object-fit: scale-down;
  }
`;
const StDefaultIcon = styled(PiMicrophoneDuotone)`
  width: 300px;
  height: 200px;
  color: ${(props) => (props.$target === 'concert' ? 'blue' : props.$target === 'free' ? 'blue' : 'red')};
`;
const StImg = styled.img`
  border-radius: 20px 20px 0 0;
`;
