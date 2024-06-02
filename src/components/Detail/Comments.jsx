import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
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
    like: 0,
  },
  {
    id: nanoid(),
    writer: '3',
    content: 'test3',
    date: Date.now(),
    like: 0,
  }
];

function Comments() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>댓글</Title>
        <CommentsNum>{mockData.length}</CommentsNum>
      </TitleWrapper>
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

const TitleWrapper = styled.div``;

const Title = styled.span``;

const CommentsNum = styled.span``;

const CommentsList = styled.ul``;
