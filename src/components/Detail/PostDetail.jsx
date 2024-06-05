import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPost, updatePostViews } from '../../api/postsApi';
import { getDate } from '../../assets/functions';
import BlackHr from '../common/BlackHr';

const PostDetail = () => {
  const { detailId } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await getPost(detailId);
    const views = data[0].views + 1;
    await updatePostViews(views, detailId);
    setPost({
      ...data[0],
      views,
    });
  };
  const separator = `|`;

  return (
    <StWrapper>
      {post ? (
        <>
          <StTitle>{post.title}</StTitle>
          <StInfo>
            <StWriter>{post.writer}</StWriter>
            <StSeparator>{separator}</StSeparator>
            <StDate>{getDate(post.date, 'long')}</StDate>
            <StSeparator>{separator}</StSeparator>
            <StViewNum>{post.views}</StViewNum>
          </StInfo>
          <BlackHr />
          <StContent>
            <StArticle>글 상세내용</StArticle>
          </StContent>
        </>
      ) : (
        <></>
      )}
    </StWrapper>
  );
};

export default PostDetail;

const StWrapper = styled.section``;

const StTitle = styled.h1`
  padding-left: 5px;
  margin-bottom: 15px;

  font-size: 32px;
  font-weight: 600;
`;

const StInfo = styled.p`
  display: flex;
  justify-content: end;
  font-size: 11px;
`;

const StSeparator = styled.span`
  margin: 0 5px;
`;

const StWriter = styled.span``;

const StDate = styled.span``;

const StViewNum = styled.span``;

const StCommentNum = styled.span``;

const StContent = styled.div`
  padding: 60px 0 100px;
`;

const StArticle = styled.article`
  font-size: 12px;
`;
