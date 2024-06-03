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

function Comments() {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleImg />
        <Title>댓글</Title>
        <CommentsNum>{mockData.length}</CommentsNum>
      </TitleWrapper>
      <BlackHr />
      <CommentsList>
        {mockData.map((comment) => (
          <Comment
            key={comment.id}
            writer={comment.writer}
            content={comment.content}
            date={comment.date}
            like={comment.like}
          />
        ))}
      </CommentsList>
    </Wrapper>
  );
}

export default Comments;

const Wrapper = styled.section``;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0 15px;
  gap: 3px;
`;

const TitleImg = styled(SlSpeech)`
  padding-top: 2px;
  width: 20px;
`;

const Title = styled.span`
  font-size: 18px;
`;

const CommentsNum = styled.span`
  font-size: 20px;
  color: blue;
`;

const CommentsList = styled.ul``;
