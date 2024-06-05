import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Post = ({ post }) => {
  const parms = useParams().category;

  const today = new Date()
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/\./g, '')
    .replace(/\s/g, '-');

  return (
    <>
      {' '}
      <StPost>
        <div style={{ display: 'flex' }}>
          <StDate>
            {today === post.date.slice(0, 10)
              ? Number(post.date.slice(11, 13)) + 9 + post.date.slice(13, 16)
              : post.date.slice(0, 10)}
          </StDate>
          <StLike>{post.like}</StLike>
        </div>
        <StTitle>
          {parms === '전체글' ? `[${post.category}] ` : ''}
          {post.title}
        </StTitle>
        <StWriter>{post.writer}</StWriter>
      </StPost>
    </>
  );
};

export default Post;

// 스타일드 컴포넌트
const StPost = styled.li`
  padding: 10px 0px;
  border: 1px solid gray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StDate = styled.div`
  width: 120px;
  margin: 0px 15px;
  font-size: 15px;

  text-align: center;
`;

const StLike = styled.div`
  width: 30px;
  margin: 0px 10px;
  font-size: 15px;

  text-align: center;
`;

const StTitle = styled.div`
  width: 70%;
  margin: 0px 10px;
  font-size: 15px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StWriter = styled.div`
  width: 100px;
  margin: 0px 10px;
  font-size: 15px;

  text-align: center;
`;

const PostTitle = styled.button`
  margin: 0px 20px;
  border: 0px transparent;
  background-color: transparent;

  font-size: 15px;
  &:hover {
    color: blue;
  }
`;
