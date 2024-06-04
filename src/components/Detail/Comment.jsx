import { MdFavorite } from 'react-icons/md';
import styled from 'styled-components';
import { updateComments } from '../../api/commentApi';
import { getDate } from '../../assets/functions';

const Comment = ({ commentId, writer, date, content, likeNum, like, setComments }) => {
  const dateStr = getDate(date, 'short');

  const handleLikeClick = ({ currentTarget }) => {
    const commentId = currentTarget.dataset.id;
    const likeNum = Number(currentTarget.dataset.likenum);
    const plusNum = like ? -1 : 1;
    const reverseLike = !like;

    updateComment(likeNum, plusNum, commentId, reverseLike);
  };

  const updateComment = async (likeNum, plusNum, commentId, reverseLike) => {
    const updatedComment = await updateComments(likeNum, plusNum, commentId, reverseLike);

    setComments((prevComments) =>
      prevComments.map((comment) => (comment['comment_id'] === commentId ? updatedComment : comment))
    );
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
        <StLikeBtn data-id={commentId} data-likenum={likeNum} onClick={handleLikeClick}>
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
