import { useState } from 'react';
import { SlSpeech } from 'react-icons/sl';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { DelComment, updateCommentsContent } from '../../api/commentApi';
import { checkInputLengthValidate } from '../../assets/validations';
import BlackHr from '../common/BlackHr';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentUpdate from './CommentUpdate';

const Comments = () => {
  const { commentsData } = useLoaderData();
  const [comments, setComments] = useState(commentsData);
  const [updateId, setUpdateId] = useState('');

  const handleUpdateClick = (commentId) => () => {
    setUpdateId(commentId);
  };

  const handleDelClick = (commentId) => () => {
    DelComment(commentId);
    setComments((prevComments) => prevComments.filter((prevComment) => prevComment.comment_id !== commentId));
  };

  const handleUpdateAddClick = (content, commentId) => {
    if (!checkInputLengthValidate(content)) return;

    updateCommentsContent(commentId, content);
    setComments((prevComments) =>
      prevComments.map((prevComment) => {
        if (prevComment.comment_id === commentId) {
          return {
            ...prevComment,
            content: content
          };
        } else return prevComment;
      })
    );
    setUpdateId('');
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
              handleUpdateAddClick={handleUpdateAddClick}
            />
          ) : (
            <Comment
              key={comment.comment_id}
              commentId={comment.comment_id}
              userId={comment.user_id}
              writer={comment.writer}
              content={comment.content}
              date={comment.date}
              like={comment.like}
              likeNum={comment.like_num}
              handleUpdateClick={handleUpdateClick}
              handleDelClick={handleDelClick}
            />
          )
        )}
      </StCommentsList>
      <CommentInput setComments={setComments} />
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
