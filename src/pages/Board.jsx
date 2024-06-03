import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Post from '../components/Post/Post';
import { useSelector } from 'react-redux';
import Pagenation from '../components/Pagenation/Pagenation';

const Board = () => {
  const boardTitle = useParams().id;
  const posts = useSelector((state) => state.posts);
  const navigate = useNavigate();

  const filteredPosts = posts.filter((post) => post.category === boardTitle);

  const [searchParams, setSearchParams] = useSearchParams();

  const totalPost =
    boardTitle === '최신글'
      ? posts.map((post) => <Post key={post.id} post={post} />).length
      : filteredPosts.map((post) => <Post key={post.id} post={post} />).length;
  const postPerPage = 10;
  const pagePerBoard = 5;
  const totalPage = Math.ceil(totalPost / postPerPage);
  const currentPage = Number(useLocation().search.replace(`?page=`, ''));

  const startPost = (currentPage - 1) * postPerPage;
  const [start, setStart] = useState(1);

  useEffect(() => {
    if (currentPage === start + pagePerBoard) setStart((prev) => prev + pagePerBoard);
    if (currentPage < start) setStart((prev) => prev - pagePerBoard);
  }, [currentPage, start]);

  const pageNumbers = () => {
    const page = [];
    for (let i = 1; i <= totalPage; i++) {
      page.push(i);
    }
    return page.splice(start - 1, start - 1 + 5).map((num) => (
      <button key={num} onClick={() => movePage(num)}>
        {num}
      </button>
    ));
  };

  const movePage = (num) => {
    setSearchParams({ page: num });
  };
  return (
    <BoardContainer>
      <H2>{boardTitle}</H2>
      <Postcontainer>
        <PostInfoWrapper>
          <div>
            <PostInfo>날짜</PostInfo>
            <PostInfo>추천수</PostInfo>
            <PostInfo></PostInfo>
          </div>
          <PostInfo>작성자</PostInfo>
        </PostInfoWrapper>
        {boardTitle === '최신글'
          ? posts.slice(startPost, startPost + 10).map((post) => <Post key={post.id} post={post} />)
          : filteredPosts.slice(startPost, startPost + 10).map((post) => <Post key={post.id} post={post} />)}
      </Postcontainer>
      <ButtonWrapper>
        <button onClick={() => navigate(`/board/${boardTitle}?page=1`)}>목록</button>

        {/* <Pagenation /> */}
        <div>
          <button onClick={() => navigate(`/board/${boardTitle}?page=${currentPage === 1 ? 1 : currentPage - 1}`)}>
            이전
          </button>
          {pageNumbers()}
          <button
            onClick={() =>
              navigate(`/board/${boardTitle}?page=${currentPage === totalPage ? totalPage : currentPage + 1}`)
            }
          >
            다음
          </button>
        </div>

        <button>🖊️글쓰기</button>
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
