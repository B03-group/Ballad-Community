import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { insertComment } from '../../api/commentApi';
import { checkInputLengthValidate } from '../../assets/validations';

const CommentInput = ({ setComments }) => {
  const isLogIn = true;
  const { postId } = useParams();
  const fakeUserId = '80257256-087d-4ef3-9d35-d7ae865404fa';
  const inputRef = useRef(null);

  const handleAddBtnClick = () => {
    const inputValue = inputRef.current.value;
    const newComment = {
      comment_id: uuidv4(),
      date: Date.now(),
      writer: 'fakeUser',
      content: inputValue,
      user_id: fakeUserId,
      page_id: postId,
      like_num: 0,
      like: false
    };
    if (!checkInputLengthValidate(inputValue)) return;
    insertComment(newComment);
    setComments((prevComments) => [...prevComments, newComment]);
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
        <StAddBtn onClick={() => handleAddBtnClick(inputRef)}>등록</StAddBtn>
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

const StAddBtn = styled.button`
  margin-bottom: 40px;
  width: 60px;
  background: #333;
  color: white;
`;
