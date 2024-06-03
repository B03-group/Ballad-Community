import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pagenation from '../components/Board/Pagenation';
import usePagenation from '../hooks/usePagenation';

const Board = () => {
  const navigate = useNavigate();

  const { showPost, boardTitle } = usePagenation();

  return (
    <BoardContainer>
      <H2>{boardTitle}</H2>
      <Postcontainer>
        <PostInfoWrapper>
          <div>
            <PostInfo>날짜</PostInfo>
            <PostInfo>추천수</PostInfo>
            <PostInfo></PostInfo>
          </div>
          <PostInfo>작성자</PostInfo>
        </PostInfoWrapper>
        {showPost}
      </Postcontainer>

      <ButtonWrapper>
        <button onClick={() => navigate(`/board/${boardTitle}?page=1`)}>목록</button>
        <Pagenation />
        <button>🖊️글쓰기</button>
      </ButtonWrapper>
    </BoardContainer>
  );
};

export default Board;

// 스타일드 컴포넌트
const BoardContainer = styled.div`
  margin: 0px 5%;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;

  margin: 20px 0px;
`;

const Postcontainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const PostInfoWrapper = styled.li`
  background-color: #333;
  color: white;
  padding: 10px 0px;
  border: 1px solid gray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostInfo = styled.span`
  margin: 0px 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 10px 0px;
`;
