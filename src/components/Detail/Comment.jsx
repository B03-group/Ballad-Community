import { useEffect, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import styled from 'styled-components';
import { updateCommentsLike } from '../../api/commentApi';
import { getDate } from '../../assets/functions';

const fakeUserId = '80257256-087d-4ef3-9d35-d7ae865404fa';

const Comment = ({
  commentId,
  userId,
  writer,
  date,
  content,
  like: passedLike,
  likeNum: passedLikeNum,
  handleUpdateClick,
  handleDelClick
}) => {
  const [likeNum, setLikeNum] = useState(passedLikeNum);
  const [like, setLike] = useState(passedLike);
  const dateStr = getDate(date, 'short');

  useEffect(() => {
    setLike(passedLike);
    setLikeNum(passedLikeNum);
  }, [passedLike, passedLikeNum]);

  const handleLikeClick = () => {
    const plusNum = like ? -1 : 1;
    setLikeNum((prevLikeNum) => prevLikeNum + plusNum);
    setLike((prevLike) => !prevLike);
    updateCommentsLike(passedLikeNum, plusNum, commentId, !passedLike);
  };

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
            <StUpdateBtn onClick={handleUpdateClick(commentId)}>수정</StUpdateBtn>
            <StDelBtn onClick={handleDelClick(commentId)}>삭제</StDelBtn>
          </>
        )}
        <StLikeBtn onClick={handleLikeClick}>{like ? <StFillFavor /> : <StFillFavorEmpty />}</StLikeBtn>
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

const StFillFavorEmpty = styled(MdFavoriteBorder)`
  width: 20px;
  height: 20px;

  color: #ee115b;
`;
