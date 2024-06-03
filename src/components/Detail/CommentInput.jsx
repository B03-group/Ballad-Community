import styled from 'styled-components';

function CommentInput() {
  const isLogIn = true;

  return (
    <Wrapper>
      <Header>
        <Title>댓글 달기</Title>
      </Header>
      {isLogIn ? <LoggedInInput /> : <LoggedOutInput>댓글 쓰기 권한이 없습니다. 로그인 하시겠습니까?</LoggedOutInput>}
      <Footer>
        <AddBtn>등록</AddBtn>
      </Footer>
    </Wrapper>
  );
}

export default CommentInput;

const Wrapper = styled.section`
  margin-top: 10px;
`;

const Header = styled.div``;
const Title = styled.h4`
  padding-left: 5px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
`;

const Body = styled.div``;

const LoggedInInput = styled.textarea`
  padding: 10px 10px;
  margin-bottom: 10px;
  width: 100%;
  min-height: 80px;
  border: 1px solid black;
  border-radius: 2px;
  font-size: 12px;
  box-sizing: border-box;
`;

const LoggedOutInput = styled.a``;

const Footer = styled.div`
  display: flex;
  justify-content: end;
`;

const AddBtn = styled.button``;
