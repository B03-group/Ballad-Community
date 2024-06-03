import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pagenation from '../components/Board/Pagenation';
import usePagenation from '../hooks/usePagenation';

const Board = () => {
  const navigate = useNavigate();

  const { showPost, boardTitle } = usePagenation();

  return (
    <StBoardContainer>
      <H2>{boardTitle}</H2>
      <StPostcontainer>
        <StPostInfoWrapper>
          <div>
            <StPostInfo>날짜</StPostInfo>
            <StPostInfo>추천수</StPostInfo>
            <StPostInfo></StPostInfo>
          </div>
          <StPostInfo>작성자</StPostInfo>
        </StPostInfoWrapper>
        {showPost}
      </StPostcontainer>

      <StButtonWrapper>
        <button onClick={() => navigate(`/board/${boardTitle}?page=1`)}>목록</button>
        <Pagenation />
        <button>🖊️글쓰기</button>
      </StButtonWrapper>
    </StBoardContainer>
  );
};

export default Board;

// 스타일드 컴포넌트
const StBoardContainer = styled.div`
  margin: 0px 5%;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;

  margin: 20px 0px;
`;

const StPostcontainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StPostInfoWrapper = styled.li`
  background-color: #333;
  color: white;
  padding: 10px 0px;
  border: 1px solid gray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StPostInfo = styled.span`
  margin: 0px 30px;
`;

const StButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 10px 0px;
`;
