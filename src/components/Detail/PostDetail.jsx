import { useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { DelPost, updatePostViews } from '../../api/postsApi';
import { getDate } from '../../assets/functions';
import BlackHr from '../common/BlackHr';

const FAKE_USER_NICKNAME = 'fakeUser';
const PostDetail = () => {
  const { category, postId } = useParams();
  const { postData } = useLoaderData();
  const post = postData[0];
  const navigate = useNavigate();
  const separator = `|`;

  useEffect(() => {
    const increasedViews = post.views + 1;
    const increasePostView = async (increasedViews, postId) => {
      await updatePostViews(increasedViews, postId);
    };
    return () => increasePostView(increasedViews, postId);
    //eslint-disable-next-line
  }, []);

  const handleDelClick = (postId) => {
    const isDel = confirm('정말 삭제하시겠습니까?');
    if (isDel) {
      DelPost(postId);
      navigate(`/board/${category}?page=1`);
    }
  };

  const handleUpdateClick = (postId) => {
    navigate(`/update/${postId}`);
  };
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
            <StViewNum>{post.views + 1}</StViewNum>
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
                <StDelBtn
                  onClick={() => {
                    handleDelClick(postId);
                  }}
                >
                  삭제
                </StDelBtn>
                <StUpdateBtn
                  onClick={() => {
                    handleUpdateClick(postId);
                  }}
                >
                  수정
                </StUpdateBtn>
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
