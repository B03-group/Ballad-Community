import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Post = ({ post }) => {
  const parms = useParams().category;

  return (
    <>
      {' '}
      <StPost>
        <div>
          <PostInfo>{post.date.slice(0, 10) + ' ' + post.date.slice(11, 16)}</PostInfo>
          <PostInfo>{post.like}</PostInfo>
        </div>
        <PostTitle>
          {parms === '최신글' ? `[${post.category}] ` : ''}
          {post.title}
        </PostTitle>
        <PostInfo>{post.writer}</PostInfo>
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

const PostInfo = styled.span`
  margin: 0px 20px;

  font-size: 15px;
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
