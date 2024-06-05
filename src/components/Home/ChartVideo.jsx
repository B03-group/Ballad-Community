import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';

export const ChartVideo = () => {
  return (
    <StVideoBox>
      <ReactPlayer url={'https://www.youtube.com/embed/Z4qVfCi_lUI'} controls={true} width={'450px'} height={'300px'} />
      <ReactPlayer url={'https://www.youtube.com/embed/TqpvY0v60ws'} controls={true} width={'450px'} height={'300px'} />
    </StVideoBox>
  );
};
const StVideoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 450px;
`;
