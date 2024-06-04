import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h2>홈 화면입니다.</h2>
    </HomeContainer>
  );
};

export default Home;
