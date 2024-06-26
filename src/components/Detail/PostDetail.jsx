import { useEffect, useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { delLikeUser, insertLikeUser } from '../../api/likeApi';
import { DelPost, updatePostViews } from '../../api/postsApi';
import { getDate } from '../../assets/functions';

const PostDetail = () => {
  const { user } = useSelector((state) => state.auth);
  const { category, postId } = useParams();
  const { postData, likeUsersData } = useLoaderData();
  const userId = user && user.user_metadata.sub;

  const isDataHasUser = likeUsersData.findIndex((likeUser) => likeUser.user_id === userId) >= 0;

  const [likeNum, setLikeNum] = useState(likeUsersData.length);
  const [isLike, setIsLike] = useState(isDataHasUser);

  const post = postData[0];
  const navigate = useNavigate();

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
      if (user && !isDataHasUser && isLike) increaseLikeNum(postId, userId);
      if (user && isDataHasUser && !isLike) decreaseLikeNum(postId, userId);
    };
    //eslint-disable-next-line
  }, [isLike]);

  const handleLikeClick = () => {
    if (user) {
      if(isLike){
        setIsLike(false);
        setLikeNum((prevNum) =>prevNum - 1);
      }
      else {
        setIsLike(true);
        setLikeNum((prevNum) => prevNum + 1);
      }
    } else {
      navigate('/login');
    }
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
            <StInfoLeft>
              <StWriter>{post.writer}</StWriter>
            </StInfoLeft>
            <StInfoRight>
              <StDate>{`${getDate(post.date, 'long')}, ${getDate(post.date, 'short')}`}</StDate>
              <StViewNum>조회 수: {post.views + 1}회</StViewNum>
            </StInfoRight>
          </StInfo>
          <StContent>
            <StContentHeader>
              <StImgWrapper>{post.img_url && <img src={post.img_url} />}</StImgWrapper>
            </StContentHeader>
            <StArticle>{post.content}</StArticle>
            <StContentFooter>
              <StLikeBtn onClick={handleLikeClick}>
                {isLike ? <StFillFavor /> : <StEmptyFavor />} <span>{likeNum}</span>
              </StLikeBtn>
            </StContentFooter>
          </StContent>
          {post.user_id === userId ? (
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
  padding: 15px 10px;

  font-size: 25px;
  font-weight: 500;
  background-color: #c3c3c3;
`;

const StInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 43px;

  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const StInfoLeft = styled.div`
  padding-left: 10px;
`;

const StInfoRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const StWriter = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const StDate = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
`;

const StViewNum = styled.span`
  font-size: 12px;
  padding: 0px 10px;
  color: rgba(0, 0, 0, 0.7);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

const StContent = styled.div`
  padding: 60px 0 50px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
  padding: 20px 40px;
  margin-bottom: 50px;
  font-size: 18px;
`;

const StContentFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const StLikeBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 80px;
  height: 40px;
  color: #ee115b;
  border: 1px solid #ee115b;
  border-radius: 5px;
  cursor: pointer;
`;

const StFillFavor = styled(MdFavorite)`
  width: 30px;
  height: 30px;

  fill: #ee115b;
`;

const StEmptyFavor = styled(MdFavoriteBorder)`
  width: 30px;
  height: 30px;

  color: #ee115b;
`;

const StFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 10px;
  gap: 10px;
`;

const StDelBtn = styled.button`
  width: 60px;
  background: #333;
  color: white;
`;

const StUpdateBtn = styled.button`
  width: 60px;
  background: #333;
  color: white;
`;
