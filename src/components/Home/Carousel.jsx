import React, { useState } from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

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
      <StH1>인기글</StH1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        slidesPerGroup={1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesOffsetBefore={50}
        slidesOffsetAfter={50}
        navigation={true}
        modules={[Pagination, Navigation]}
        rewind={true}
        style={{ border: '2px solid black', padding: '20px' }}
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
        {data.map((item, i) => {
          return (
            <SwiperSlide key={item.id} className={i === 0 ? 'swiper-slide-active' : ''}>
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
      </Swiper>
    </>
  );
};

const StH1 = styled.div`
  font-size: 40px;
  margin: 10px 40px;
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

const StCardDiv = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid black;
  border-radius: 20px;
`;
