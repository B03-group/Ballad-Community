import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Comments from '../components/Detail/Comments';
import PostDetail from '../components/Detail/PostDetail';

const Detail = () => {
  const { category: categoryId } = useParams();

  return (
    <MainWrapper>
      <CategoryName>{categoryId}</CategoryName>
      <PostDetail />
      <Comments />
    </MainWrapper>
  );
};

export default Detail;

const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 10px;
`;

const CategoryName = styled.h4`
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
`;