import { useEffect } from 'react'; // 삭제
import { PiMicrophoneDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authActions';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <StNav>
      <StInfo>
        <StLink to={'/'}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StLogo /> <StH1>발라드 음악 추천 커뮤니티</StH1>
          </div>
        </StLink>
        <StUser>
          {user ? (
            <>
              <StLogoutButton onClick={handleLogout}>로그아웃</StLogoutButton>
              <StLink to={'/profile'}>
                <StProfileWrapper>
                  <StProfile src={user.user_metadata.avatar_url || '/path/to/default/avatar.png'} alt="Profile" />
                </StProfileWrapper>
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
      <StWelcomeMessageWrapper>
        {user && <StWelcomeMessage>{user.user_metadata.name}님, 반갑습니다!</StWelcomeMessage>}
      </StWelcomeMessageWrapper>
      <StCategory>
        {['전체글', '공연(정보,후기)', '추천음악', '자유'].map((boardTitle) => (
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
  align-items: center;
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

const StLogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  font-size: 16px;
`;

const StProfileWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const StProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StWelcomeMessageWrapper = styled.div`
  text-align: right;
  margin-top: 5px;
`;

const StWelcomeMessage = styled.div`
  font-size: 16px;
  color: black;
`;

const StCategory = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 20px;
`;

const StCategoryLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

export default Header;
