import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommentInput from '../components/Detail/CommentInput';
import Comments from '../components/Detail/Comments';
import PostDetail from '../components/Detail/PostDetail';

function Detail() {
  const { id: categoryId } = useParams();

  return (
    <MainWrapper>
      <CategoryName>{categoryId}</CategoryName>
      <PostDetail />
      <hr/>
      <Comments />
      <CommentInput/>
    </MainWrapper>
  );
}

export default Detail;

const MainWrapper = styled.main``;

const CategoryName = styled.h4``;
