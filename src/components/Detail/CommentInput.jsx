import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { insertComment } from '../../api/commentApi';
import { checkInputLengthValidate } from '../../assets/validations';

const CommentInput = ({ setComments }) => {
  const { postId } = useParams();
  const { user } = useSelector((state) => state.auth);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleAddBtnClick = () => {
    const inputValue = inputRef.current.value;
    const newComment = {
      comment_id: uuidv4(),
      date: Date.now(),
      writer: user.user_metadata.name,
      content: inputValue,
      user_id: user.user_metadata.sub,
      post_id: postId,
      like_num: 0,
      like: false
    };
    if (!checkInputLengthValidate(inputValue)) return;
    insertComment(newComment);
    setComments((prevComments) => [...prevComments, newComment]);
    inputRef.current.value = '';
  };

  const handleLogInClick = () =>{
    navigate('/login');
  }

  return (
    <StWrapper>
      <StBody>
        {user ? (
          <>
            <StHeader>
              <StTitle>댓글 달기</StTitle>
            </StHeader>
            <LoggedInInput ref={inputRef} />
            <StFooter>
              <StAddBtn onClick={() => handleAddBtnClick(inputRef)}>등록</StAddBtn>
            </StFooter>
          </>
        ) : (
          <LoggedOutInput onClick={handleLogInClick}>댓글 쓰기 권한이 없습니다. 로그인 하시겠습니까?</LoggedOutInput>
        )}
      </StBody>
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

const LoggedOutInput = styled.div`
  padding: 10px 10px;
  margin-top: 10px;
  width: 100%;
  min-height: 80px;
  border: 1px solid black;
  border-radius: 2px;
  font-size: 12px;
  cursor: pointer;
  box-sizing: border-box;
`;

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
