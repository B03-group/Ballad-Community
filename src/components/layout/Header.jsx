import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

const Button = styled.button`
  background-color: transparent;
  border: 0px solid transparent;

  margin: 20px 15px 0px 15px;

  font-size: 20px;
  font-weight: 600;
`;

const Header = () => {
  const boardTitles = ["최신글", "국내", "추천음악", "자유"];
  return (
    <StHeader>
      <div>
        <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
          <H1>발라드 음악 추천 커뮤니티</H1>
        </Link>
      </div>
      <nav>
        {boardTitles.map((boardTitle) => (
          <Link to={`/board/${boardTitle}`} key={boardTitle}>
            <Button>{boardTitle}</Button>
          </Link>
        ))}
      </nav>
    </StHeader>
  );
};

export default Header;
