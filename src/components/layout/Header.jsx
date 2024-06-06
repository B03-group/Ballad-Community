import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PiMicrophoneDuotone } from 'react-icons/pi';
import { logout } from '../../features/auth/authActions'; // 로그아웃 액션 추가

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/');
  };

  const boardTitles = ['전체글', '공연(정보,후기)', '추천음악', '자유'];

  return (
    <StNav>
      <StInfo>
        <StLink to={'/'}>
          <div style={{ display: 'flex' }}>
            <StLogo /> <StH1>발라드 음악 추천 커뮤니티</StH1>
          </div>
        </StLink>
        <StUser>
          {user ? (
            <>
              <span onClick={handleLogout} style={{ cursor: 'pointer' }}>
                로그아웃
              </span>
              <StLink to={'/profile'}>
                <StProfile />
              </StLink>
            </>
          ) : (
            <>
              <StLink to={'/login'}>로그인</StLink>
              <StLink to={'/register'}>회원가입</StLink>
            </>
          )}
        </StUser>
      </StInfo>
      <StCategory>
        {boardTitles.map((boardTitle) => (
          <StCategoryLink to={`/board/${boardTitle}?page=1`} key={boardTitle}>
            {boardTitle}
          </StCategoryLink>
        ))}
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
const StLogo = styled(PiMicrophoneDuotone)`
  width: 60px;
  height: 60px;
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
  align-items: center;
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

export default Header;
