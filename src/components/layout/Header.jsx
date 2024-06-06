import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PiMicrophoneDuotone } from 'react-icons/pi';
import { logout } from '../../features/auth/authActions';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/');
  };

  return (
    <StNav>
      <StAside />
      <StLink to={'/'}>
        <StLogoBox>
          <StLogo /> <StH1>발라드 음악 추천 커뮤니티</StH1>
        </StLogoBox>
      </StLink>
      <StCategory>
        {['전체글', '공연(정보,후기)', '추천음악', '자유'].map((boardTitle) => (
          <StCategoryLink to={`/board/${boardTitle}?page=1`} key={boardTitle}>
            {boardTitle}
          </StCategoryLink>
        ))}
      </StCategory>
      <StUser>
        {user ? (
          <>
            <StDiv onClick={handleLogout}>로그아웃</StDiv>
            <StProfile to={'/profile'} />
          </>
        ) : (
          <>
            <StLink to={'/login'}>로그인</StLink>
            <StLink to={'/register'}>회원가입</StLink>
          </>
        )}
      </StUser>
      <StAside />
    </StNav>
  );
};

const StNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  background-color: #252525;
  height: 50px;
  @media only screen and (max-width: 810px) {
    height: 120px;
    min-width: 350px;
    flex-direction: column;
    align-items: center;
  }
  justify-content: space-between;
  padding: 10px;
`;
const StLogoBox = styled.div`
  display: flex;
`;
const StLogo = styled(PiMicrophoneDuotone)`
  width: 50px;
  height: 50px;
  @media only screen and (max-width: 810px) {
    width: 40px;
  }
  border-radius: 30px;
  display: inline-block;
`;
const StH1 = styled.h1`
  font-weight: 700;
  font-size: 20px;
  margin: 15px 10px;
  color: white;
`;
const StUser = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StDiv = styled.div`
  cursor: pointer;
  color: white;
`;
const StProfile = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: gray;
`;
const StAside = styled.aside`
  min-width: 20px;
  max-width: 500px;
  height: 100%;
  @media only screen and (max-width: 810px) {
    width: 0;
  }
`;
const StCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
  height: 20px;
`;
const StCategoryLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  color: white;
`;

export default Header;
