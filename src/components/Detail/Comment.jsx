import { MdFavorite } from 'react-icons/md';
import styled from 'styled-components';
import { getDate } from '../../assets/functions';

const fakeUserId = '80257256-087d-4ef3-9d35-d7ae865404fa';

const Comment = ({
  commentId,
  userId,
  writer,
  date,
  content,
  likeNum,
  handleUpdateClick,
  handleDelClick,
  handleLikeClick
}) => {
  const dateStr = getDate(date, 'short');

  return (
    <StWrapper>
      <StHeader>
        <StWriter>{writer}</StWriter>
        <StInfo>
          <StLike>추천 수: {likeNum}</StLike>
          <StDate>{dateStr}</StDate>
        </StInfo>
      </StHeader>
      <StBody>
        <StContent>{content}</StContent>
      </StBody>

      <StFooter>
        {fakeUserId === userId && (
          <>
            <StUpdateBtn data-id={commentId} onClick={handleUpdateClick}>
              수정
            </StUpdateBtn>
            <StDelBtn data-id={commentId} onClick={handleDelClick}>
              삭제
            </StDelBtn>
          </>
        )}
        <StLikeBtn data-id={commentId} onClick={handleLikeClick}>
          <StFillFavor />
        </StLikeBtn>
      </StFooter>
      <StHr />
    </StWrapper>
  );
};

export default Comment;

const StWrapper = styled.li`
  padding: 10px 5px;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 15px;
`;

const StWriter = styled.div`
  font-size: 14px;
`;

const StInfo = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

const StLike = styled.span`
  font-size: 14px;
`;

const StDate = styled.span`
  font-size: 12px;
`;

const StBody = styled.div`
  margin-bottom: 15px;
`;

const StContent = styled.p`
  font-size: 12px;
`;

const StFooter = styled.div`
  display: flex;
  justify-content: end;
`;

const StUpdateBtn = styled.button``;

const StDelBtn = styled.button``;

const StLikeBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const StHr = styled.hr`
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.1);
`;

const StFillFavor = styled(MdFavorite)`
  width: 20px;
  height: 20px;

  fill: #ee115b;
`;
