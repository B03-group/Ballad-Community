// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import styled from 'styled-components';

export const ChartSlide = () => {
  const testData = [
    {
      rank: 1,
      title: '미안해 미워해 사랑해',
      artist: 'Crush',
      img_src: 'https://image.bugsm.co.kr/album/images/450/40993/4099372.jpg?version=20240517174204.0'
    },
    {
      rank: 2,
      title: '그랬나봐',
      artist: '유회승(엔플라잉)',
      img_src: 'https://image.bugsm.co.kr/album/images/450/206408/20640830.jpg?version=20240511011412.0'
    },
    {
      rank: 3,
      title: '천상연',
      artist: '이창섭',
      img_src: 'https://image.bugsm.co.kr/album/images/450/40963/4096392.jpg?version=20240222064728.0'
    },
    {
      rank: 4,
      title: 'Love wins all',
      artist: '아이유(IU)',
      img_src: 'https://image.bugsm.co.kr/album/images/450/40955/4095501.jpg?version=20240307012526.0'
    },
    {
      rank: 5,
      title: '봄눈',
      artist: '10CM',
      img_src: 'https://image.bugsm.co.kr/album/images/450/206426/20642655.jpg?version=20240515004113.0'
    },
    {
      rank: 6,
      title: '비의 랩소디',
      artist: '임재현',
      img_src: 'https://image.bugsm.co.kr/album/images/450/206088/20608836.jpg?version=20240209024356.0'
    },
    {
      rank: 7,
      title: '그대만 있다면(여름날 우리 X 너드커넥션(NerdConnection))',
      artist: '너드커넥션(NerdConnection)',
      img_src: 'https://image.bugsm.co.kr/album/images/450/40901/4090168.jpg?version=20240209005514.0'
    },
    {
      rank: 8,
      title: "I'll Be There",
      artist: '이클립스(ECLIPSE)',
      img_src: 'https://image.bugsm.co.kr/album/images/450/206384/20638425.jpg?version=20240508024358.0'
    },
    {
      rank: 9,
      title: '꿈결같아서',
      artist: '민니((여자)아이들)',
      img_src: 'https://image.bugsm.co.kr/album/images/450/206362/20636295.jpg?version=20240423111536.0'
    },
    {
      rank: 10,
      title: '헤어지자 말해요',
      artist: '박재정',
      img_src: 'https://image.bugsm.co.kr/album/images/450/40856/4085673.jpg?version=20230421064519.0'
    }
  ];
  return (
    <>
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
          style={{ height: '650px', width: '500px' }}
        >
          {testData.map((e) => {
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
    </>
  );
};

const StChartBox = styled.div`
  width: 700px;
  margin: 20px auto;
`;

const StH2 = styled.h2`
  margin: 20px auto;
  width: 450px;
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
