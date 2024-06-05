import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Post = ({ post }) => {
  const parms = useParams().category;
  const navigate = useNavigate();

  const today = new Date()
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/\./g, '')
    .replace(/\s/g, '-');

  // date.now를 받아옴
  const timestamp_ms = post.date;

  // 밀리초 타임스탬프를 Date 객체로 변환
  const date = new Date(timestamp_ms);

  // 연, 월, 일을 추출
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더합니다.
  const day = String(date.getUTCDate()).padStart(2, '0');
  const miniutes = date.getUTCMinutes() < 10 ? `0` + date.getUTCMinutes() : date.getUTCMinutes();
  const time = String(date.getUTCHours() + 9 + `:` + miniutes);

  // yyyy-mm-dd 형식으로 포맷팅
  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${time}`;

  return (
    <>
      {' '}
      <StPost>
        <div style={{ display: 'flex' }}>
          <StDate>{today === formattedDate ? formattedTime : formattedDate}</StDate>
          <StLike>{post.like}</StLike>
        </div>
        <StTitle onClick={() => navigate(`/board/${post.category}/${post.post_id}`)}>
          {parms === '전체글' ? `[${post.category}] ` : ''}
          {post.title}
        </StTitle>
        <StWriter>{post.writer}</StWriter>
      </StPost>
    </>
  );
};

export default Post;

// 스타일드 컴포넌트
const StPost = styled.li`
  padding: 10px 0px;
  border: 1px solid gray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StDate = styled.div`
  width: 120px;
  margin: 0px 15px;
  font-size: 15px;

  text-align: center;
`;

const StLike = styled.div`
  width: 30px;
  margin: 0px 10px;
  font-size: 15px;

  text-align: center;
`;

const StTitle = styled.div`
  width: 70%;
  margin: 0px 10px;
  font-size: 15px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: blue;
  }
  cursor: pointer;
`;

const StWriter = styled.div`
  width: 100px;
  margin: 0px 10px;
  font-size: 15px;

  text-align: center;
`;
