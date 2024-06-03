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
        <TitleImg>
          <img src="/public/speechBalloon.png" />
        </TitleImg>
        <Title>댓글</Title>
        <CommentsNum>{mockData.length}</CommentsNum>
      </TitleWrapper>
      <HR />
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
  margin: 30px 0 15px;
  gap: 3px;
`;

const TitleImg = styled.div`
  width: 19px;

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

const Title = styled.span``;

const CommentsNum = styled.span`
  color: blue;
`;

const HR = styled.hr`
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.1);
`;

const CommentsList = styled.ul``;
