import { useEffect, useState } from 'react';
import { SlSpeech } from 'react-icons/sl';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DelComment, getComments, updateCommentsLike } from '../../api/commentApi';
import BlackHr from '../common/BlackHr';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentUpdate from './CommentUpdate';

const Comments = () => {
  const { detailId } = useParams();
  const [comments, setComments] = useState([]);
  const [updateId, setUpdateId] = useState('');

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  const fetchData = async () => {
    const data = await getComments(detailId);
    data.sort((a, b) => a.date - b.date);
    setComments(data);
  };
  const handleLikeClick = ({ currentTarget }) => {
    const commentId = currentTarget.dataset.id;
    const comment = comments.find((comment) => comment.comment_id === commentId);
    const likeNum = comment.like_num;
    const like = comment.like;
    const plusNum = like ? -1 : 1;

    updateCommentsLike(likeNum, plusNum, commentId, !like);
  };

  const handleUpdateClick = ({ currentTarget }) => {
    const commentId = currentTarget.dataset.id;
    setUpdateId(commentId);
  };

  const handleDelClick = ({ currentTarget }) => {
    const commentId = currentTarget.dataset.id;
    DelComment(commentId);
  };

  return (
    <StWrapper>
      <StTitleWrapper>
        <StTitleImg />
        <StTitle>댓글</StTitle>
        <StCommentsNum>{comments.length}</StCommentsNum>
      </StTitleWrapper>
      <BlackHr />
      <StCommentsList>
        {comments.map((comment) =>
          updateId === comment.comment_id ? (
            <CommentUpdate
              key={comment.comment_id}
              writer={comment.writer}
              content={comment.content}
              commentId={comment.comment_id}
              setUpdateId={setUpdateId}
            />
          ) : (
            <Comment
              key={comment.comment_id}
              commentId={comment.comment_id}
              userId={comment.user_id}
              writer={comment.writer}
              content={comment.content}
              date={comment.date}
              likeNum={comment.like_num}
              handleUpdateClick={handleUpdateClick}
              handleDelClick={handleDelClick}
              handleLikeClick={handleLikeClick}
            />
          )
        )}
      </StCommentsList>
      <CommentInput />
    </StWrapper>
  );
};

export default Comments;

const StWrapper = styled.section``;

const StTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0 15px;
  gap: 3px;
`;

const StTitleImg = styled(SlSpeech)`
  padding-top: 2px;
  width: 20px;
`;

const StTitle = styled.span`
  font-size: 18px;
`;

const StCommentsNum = styled.span`
  font-size: 20px;
  color: blue;
`;

const StCommentsList = styled.ul``;
