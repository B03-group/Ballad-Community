import { nanoid } from '@reduxjs/toolkit';
import { SlSpeech } from 'react-icons/sl';
import styled from 'styled-components';
import BlackHr from '../common/BlackHr';
import Comment from './Comment';

const mockData = [
  {
    id: nanoid(),
    writer: '1',
    content: 'test1',
    date: Date.now(),
    like: 0
  },
  {
    id: nanoid(),
    writer: '2',
    content: 'test2',
    date: Date.now(),
    like: 0
  },
  {
    id: nanoid(),
    writer: '3',
    content: 'test3',
    date: Date.now(),
    like: 0
  }
];

const Comments = () => {
  return (
    <StWrapper>
      <StTitleWrapper>
        <StTitleImg />
        <StTitle>댓글</StTitle>
        <StCommentsNum>{mockData.length}</StCommentsNum>
      </StTitleWrapper>
      <BlackHr />
      <StCommentsList>
        {mockData.map((comment) => (
          <Comment
            key={comment.id}
            writer={comment.writer}
            content={comment.content}
            date={comment.date}
            like={comment.like}
          />
        ))}
      </StCommentsList>
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
