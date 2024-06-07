import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pagenation from '../components/Board/Pagenation';
import usePagenation from '../hooks/usePagenation';

const Board = () => {
  const navigate = useNavigate();
  const { showPost, boardTitle, totalPost, filter, setFilter } = usePagenation();

  return (
    <StBoardContainer>
      <H2>{boardTitle}</H2>
      <StDiv>
        <span>{totalPost}개의 글</span>
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="date">최신순</option>
          <option value="like">추천순</option>
        </select>
      </StDiv>
      <StPostcontainer>
        <StPostInfoWrapper>
          <div style={{ display: 'flex' }}>
            <StDate>날짜</StDate>
            <StLike>추천수</StLike>
          </div>
          <StTitle></StTitle>
          <StWriter>작성자</StWriter>
        </StPostInfoWrapper>
        {showPost}
      </StPostcontainer>

      <StButtonWrapper>
        <StButton onClick={() => navigate(`/board/${boardTitle}?page=1`)}>목록</StButton>
        <Pagenation />
        <StButton onClick={() => navigate(`/write`)}>🖊️글쓰기</StButton>
      </StButtonWrapper>
    </StBoardContainer>
  );
};

export default Board;

// 스타일드 컴포넌트
const StBoardContainer = styled.div`
  margin: 0px auto;
  max-width: 1300px;
`;

const H2 = styled.h2`
  font-size: 25px;
  font-weight: 600;

  margin: 20px 0px;
`;

const StDiv = styled.div`
  font-size: 15px;

  margin: 10px 0px;

  display: flex;
  justify-content: space-between;
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

const StDate = styled.div`
  margin: 0px 60px;
  font-size: 15px;
`;

const StLike = styled.div`
  margin: 0px 5px;
  font-size: 15px;
`;

const StTitle = styled.div`
  margin: 0px 20px;
  font-size: 15px;
`;

const StWriter = styled.div`
  width: 100px;
  margin: 0px 10px;
  font-size: 15px;

  text-align: center;
`;

const StButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 10px 0px;
`;

const StButton = styled.button`
  background: #333;
  border-radius: 5px;

  color: white;
  font-size: 15px;

  height: auto;
`;
