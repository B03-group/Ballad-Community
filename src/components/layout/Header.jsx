import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = () => {
  const boardTitles = ['최신글', '국내', '추천음악', '자유'];
  return (
    <StNav>
      <StInfo>
        <StLink to={'/'}>
          <div style={{ display: 'flex' }}>
            <StLogo /> <StH1>발라드 음악 추천 커뮤니티</StH1>
          </div>
        </StLink>
        <StUser>
          <StLink>로그인</StLink>
          <StLink>회원가입</StLink>
          <StLink to={'/'}>
            <StProfile />
          </StLink>
        </StUser>
      </StInfo>
      <StCategory>
        {boardTitles.map((boardTitle) => {
          return (
            <StCategoryLink to={`/board/${boardTitle}`} key={boardTitle}>
              {boardTitle}
            </StCategoryLink>
          );
        })}
      </StCategory>
    </StNav>
  );
};

const StNav = styled.nav`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding: 10px;
`;
const StInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
`;
const StLogo = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
  border-radius: 30px;
  display: inline-block;
`;
const StH1 = styled.h1`
  font-weight: 700;
  font-size: 30px;
  margin: 10px 20px;
`;
const StUser = styled.div`
  display: flex;
  gap: 20px;
`;
const StProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: gray;
`;
const StCategory = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 20px;
`;
const StLink = styled(Link)`
  text-decoration: none;
  color: black;
  height: 20px;
`;
const StCategoryLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: black;
`;
