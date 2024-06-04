import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { insertComment } from '../../api/commentApi';

const CommentInput = () => {
  const isLogIn = true;
  const { detailId } = useParams();
  const fakeUserId = '80257256-087d-4ef3-9d35-d7ae865404fa';
  const inputRef = useRef(null);

  const handleAddBtnClick = () => {
    insertComment(inputRef.current.value, fakeUserId, detailId);
    inputRef.current.value = '';
  };

  return (
    <StWrapper>
      <StHeader>
        <StTitle>댓글 달기</StTitle>
      </StHeader>
      <StBody>
        {isLogIn ? (
          <LoggedInInput ref={inputRef} />
        ) : (
          <LoggedOutInput>댓글 쓰기 권한이 없습니다. 로그인 하시겠습니까?</LoggedOutInput>
        )}
      </StBody>
      <StFooter>
        <StAddBtn onClick={handleAddBtnClick}>등록</StAddBtn>
      </StFooter>
    </StWrapper>
  );
};

export default CommentInput;

const StWrapper = styled.section`
  margin-top: 10px;
`;

const StHeader = styled.div``;
const StTitle = styled.h4`
  padding-left: 5px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
`;

const StBody = styled.div``;

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

const StFooter = styled.div`
  display: flex;
  justify-content: end;
`;

const StAddBtn = styled.button``;
