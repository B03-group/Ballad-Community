import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const boardTitles = ['최신글', '국내', '추천음악', '자유'];
  const navigate = useNavigate();

  return (
    <StHeader>
      <div>
        <H1 onClick={() => navigate(`/`)}>발라드 음악 추천 커뮤니티</H1>
      </div>
      <nav>
        {boardTitles.map((boardTitle) => (
          <Button key={boardTitle} onClick={() => navigate(`/board/${boardTitle}?page=1`)}>
            {boardTitle}
          </Button>
        ))}
      </nav>
    </StHeader>
  );
};

export default Header;

// 스타일드 컴포넌트
const StHeader = styled.header`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid gray;

  justify-content: center;

  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem 0.5rem;
  }
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 700;

  margin: 0px 20px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  border: 0px solid transparent;

  margin: 20px 15px 0px 15px;

  font-size: 20px;
  font-weight: 600;
`;
