import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Post from '../components/Board/Post';

import styled from 'styled-components';

const usePagenation = () => {
  const [start, setStart] = useState(1);
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const boardTitle = useParams().category;
  const posts = useSelector((state) => state.posts);
  const filteredPosts = posts.filter((post) => post.category === boardTitle);

  const totalPost =
    boardTitle === '최신글'
      ? posts.map((post) => <Post key={post.id} post={post} />).length
      : filteredPosts.map((post) => <Post key={post.id} post={post} />).length;

  const postPerPage = 10;
  const pagePerBoard = 5;
  const totalPage = Math.ceil(totalPost / postPerPage);
  const currentPage = Number(useLocation().search.replace(`?page=`, ''));

  const startPost = (currentPage - 1) * postPerPage;

  const showPage = () => {
    const page = [];
    for (let i = 1; i <= totalPage; i++) {
      page.push(i);
    }
    return page.slice(start - 1, start - 1 + 5).map((num) => (
      <StButton key={num} $active={num === currentPage} onClick={() => setSearchParams({ page: num })}>
        {num}
      </StButton>
    ));
  };

  const showPost =
    boardTitle === '최신글'
      ? posts.slice(startPost, startPost + 10).map((post) => <Post key={post.id} post={post} />)
      : filteredPosts.slice(startPost, startPost + 10).map((post) => <Post key={post.id} post={post} />);

  const goBackPage = () => navigate(`/board/${boardTitle}?page=${currentPage === 1 ? 1 : currentPage - 1}`);
  const goNextPage = () =>
    navigate(`/board/${boardTitle}?page=${currentPage === totalPage ? totalPage : currentPage + 1}`);

  useEffect(() => {
    if (currentPage === start + pagePerBoard) setStart((prev) => prev + pagePerBoard);
    if (currentPage < start) setStart((prev) => prev - pagePerBoard);
  }, [currentPage, start]);

  return { goBackPage, goNextPage, showPage, showPost, postPerPage, currentPage };
};

export default usePagenation;

// 스타일드 컴포넌트

const StButton = styled.button`
  background-color: transparent;
  border: transparent;
  border-radius: 20px;
  margin: 2px;

  &:hover {
    border: 1px solid blue;
  }

  background-color: ${(props) => (props.$active ? 'lightsteelblue' : 'rgba(255, 255, 255, 0.89)')};
  color: ${(props) => (props.$active ? 'black' : 'black')};
`;
