import styled from 'styled-components';
import BlackHr from '../common/BlackHr';

function PostDetail() {
  const separator = `|`;
  return (
    <StWrapper>
      <StTitle>제목</StTitle>
      <StInfo>
        <StWriter>작성자</StWriter>
        <StSeparator>{separator}</StSeparator>
        <StDate>날짜</StDate>
        <StSeparator>{separator}</StSeparator>
        <StViewNum>조회 수</StViewNum>
        <StSeparator>{separator}</StSeparator>
        <StCommentNum>댓글 수</StCommentNum>
      </StInfo>
      <BlackHr />
      <StContent>
        <StArticle>글 상세내용</StArticle>
      </StContent>
    </StWrapper>
  );
}

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
