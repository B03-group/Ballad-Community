import React, { useState, useRef } from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import sample1 from '../../assets/sample1.jpg';

export const Carousel = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <StSlideHeader>
        <span>인기글</span>
        <StSlideButtonBox>
          <StPreviousBtn className="swiper-prev" />
          <StNextBtn className="swiper-next" />
        </StSlideButtonBox>
      </StSlideHeader>

      <StSwiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        slidesPerGroup={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesOffsetBefore={50}
        slidesOffsetAfter={50}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          650: {
            slidesPerView: 2
          },
          950: {
            slidesPerView: 3
          },
          1260: {
            slidesPerView: 4
          }
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <StCardDiv>
                <StImgDiv>
                  <StImg src={sample1} alt="" />
                </StImgDiv>
                <StH2>{item.title}</StH2>
                <StNickNameDiv>
                  <p>{item.writer}</p>
                  <StFillBookMark />
                  {/* <StBookMark /> */}
                </StNickNameDiv>
                <StTextDiv>
                  <StTextP>{item.description}</StTextP>
                  <StFavorDiv>
                    <StFillFavor />
                    <span style={{ verticalAlign: 'top' }}>{item.like}</span>
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
  font-size: 40px;
  margin: 10px 100px;
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
`;

const StCardDiv = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid black;
  border-radius: 20px;
`;

const StH2 = styled.div`
  text-align: center;
  margin-top: 5px;
`;

const StBookMark = styled(FaRegBookmark)`
  width: 20px;
  height: 20px;
  fill: #76ba1b;
`;
const StFillBookMark = styled(FaBookmark)`
  width: 20px;
  height: 20px;

  fill: #76ba1b;
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
  width: 220px;
  height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const StFavorDiv = styled.div`
  margin-left: auto;
`;

const StImgDiv = styled.div`
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;
const StImg = styled.img`
  border-radius: 20px 20px 0 0;
`;
