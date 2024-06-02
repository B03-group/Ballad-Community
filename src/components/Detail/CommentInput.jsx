import styled from "styled-components";

function CommentInput() {
  const isLogIn = true;

  return (
    <Wrapper>
      <Title>댓글달기</Title> 
      {isLogIn ?
        <LoggedInInput/>:
        <LoggedOutInput>댓글 쓰기 권한이 없습니다. 로그인 하시겠습니까?</LoggedOutInput>
      }
    </Wrapper>
  );
}

export default CommentInput;

const Wrapper = styled.section``;

const Title = styled.h3``;

const LoggedInInput = styled.input``;

const LoggedOutInput = styled.a``;