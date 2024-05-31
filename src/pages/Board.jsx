import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Post from "../components/Post";
import { useSelector } from "react-redux";

const Board = () => {
  const boardTitle = useParams().id;
  const posts = useSelector((state) => state.posts);

  const filteredPosts = posts.filter((post) => post.category === boardTitle);

  return (
    <BoardContainer>
      <H2>{boardTitle}</H2>
      <Postcontainer>
        <PostInfoWrapper>
          <p>
            <PostInfo>날짜</PostInfo>
            <PostInfo>추천수</PostInfo>
            <PostInfo></PostInfo>
          </p>
          <PostInfo>작성자</PostInfo>
        </PostInfoWrapper>
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Postcontainer>
      <ButtonWrapper>
        <Link to={`/board/${boardTitle}`}>
          <button>목록</button>
        </Link>
        <Link>
          <button>🖊️글쓰기</button>
        </Link>
      </ButtonWrapper>
    </BoardContainer>
  );
};

export default Board;

// 스타일드 컴포넌트
const BoardContainer = styled.div`
  margin: 0px 5%;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 600;

  margin: 20px 0px;
`;

const Postcontainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const PostInfoWrapper = styled.li`
  background-color: #333;
  color: white;
  padding: 10px 0px;
  border: 1px solid gray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostInfo = styled.span`
  margin: 0px 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 10px 0px;
`;
