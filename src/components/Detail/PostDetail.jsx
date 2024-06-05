import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DelPost, getPost, updatePostViews } from '../../api/postsApi';
import { getDate } from '../../assets/functions';
import BlackHr from '../common/BlackHr';

const FAKE_USER_NICKNAME = 'fakeUser';
const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const separator = `|`;

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);

  const getData = async () => {
    const data = await getPost(postId);
    const views = data[0].views + 1;
    await updatePostViews(views, postId);
    setPost({
      ...data[0],
      views
    });
  };

  const handleDelClick = (postId) =>  {
    DelPost();
  };

  const handleUpdateClick = () => {};
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
            <StContentHeader>
              <StImgWrapper>
                <img src={post.img_url} />
              </StImgWrapper>
            </StContentHeader>
            <StArticle>{post.content}</StArticle>
          </StContent>
          {post.writer === FAKE_USER_NICKNAME ? (
            <>
              <StFooter>
                <StDelBtn onClick={handleDelClick}>삭제</StDelBtn>
                <StUpdateBtn onClick={handleUpdateClick}>수정</StUpdateBtn>
              </StFooter>
            </>
          ) : (
            <></>
          )}
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

const StContent = styled.div`
  padding: 60px 0 100px;
`;

const StContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const StImgWrapper = styled.div`
  width: 20%;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`;
const StArticle = styled.article`
  font-size: 12px;
`;

const StFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 10px;
`;

const StDelBtn = styled.button``;

const StUpdateBtn = styled.button``;
