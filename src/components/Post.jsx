import React from "react";
import styled from "styled-components";

const Post = ({ post }) => {
  return (
    <>
      {" "}
      <StPost>
        <p>
          <PostInfo>{post.date}</PostInfo>
          <PostInfo>{post.like}</PostInfo>
          <PostTitle>{post.title}</PostTitle>
        </p>
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
