import { useEffect, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { delLikeUser, insertLikeUser } from '../../api/likeApi';
import { DelPost, updatePostViews } from '../../api/postsApi';
import { getDate } from '../../assets/functions';
import BlackHr from '../common/BlackHr';

const FAKE_USER_NICKNAME = 'fakeUser';
const FAKE_USER_ID = 'dbf6b6ac-321d-47e4-b85f-d520187f10d7';

const PostDetail = () => {
  const { category, postId } = useParams();
  const { postData, likeUsersData } = useLoaderData();
  const isDataHasUser = likeUsersData.findIndex((likeUser) => likeUser.user_id === FAKE_USER_ID) >= 0;
  const [likeNum, setLikeNum] = useState(likeUsersData.length);
  const [isLike, setIsLike] = useState(isDataHasUser);

  const post = postData[0];
  const navigate = useNavigate();
  const separator = `|`;

  useEffect(() => {
    const increasedViews = post.views + 1;
    const increasePostView = async (increasedViews, postId) => {
      await updatePostViews(increasedViews, postId);
    };
    const increaseLikeNum = async (postId, userId) => {
      await insertLikeUser(postId, userId);
    };

    const decreaseLikeNum = async (postId, userId) => {
      await delLikeUser(postId, userId);
    };
    return () => {
      increasePostView(increasedViews, postId);
      if (!isDataHasUser && !isLike) increaseLikeNum(postId, FAKE_USER_ID);
      if (isDataHasUser && isLike) decreaseLikeNum(postId, FAKE_USER_ID);
    };
    //eslint-disable-next-line
  }, []);

  const handleLikeClick = () => {
    setIsLike((prev) => !prev);
    setLikeNum((prevNum) => (isLike ? prevNum - 1 : prevNum + 1));
  };

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
            <StViewNum>조회 수: {post.views + 1}회</StViewNum>
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
                <StLikeBtn onClick={handleLikeClick}>{isLike ? <StFillFavor /> : <StFillFavorEmpty />}</StLikeBtn>
                <span>{likeNum}</span>
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

const StLikeBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const StFillFavor = styled(MdFavorite)`
  width: 20px;
  height: 20px;

  fill: #ee115b;
`;

const StFillFavorEmpty = styled(MdFavoriteBorder)`
  width: 20px;
  height: 20px;

  color: #ee115b;
`;

const StFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 10px;
`;

const StDelBtn = styled.button``;

const StUpdateBtn = styled.button``;
