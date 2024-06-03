import styled from 'styled-components';
import BlackHr from '../common/BlackHr';

function PostDetail() {
  const separator = `  |  `;
  return (
    <Wrapper>
      <Title>제목</Title>
      <Info>
        <Writer>작성자</Writer>
        <Separator>{separator}</Separator>
        <Date>날짜</Date>
        <Separator>{separator}</Separator>
        <ViewNum>조회 수</ViewNum>
        <Separator>{separator}</Separator>
        <CommentNum>댓글 수</CommentNum>
      </Info>
      <BlackHr />
      <Content>
        <Article>글 상세내용</Article>
      </Content>
    </Wrapper>
  );
}

export default PostDetail;

const Wrapper = styled.section``;

const Title = styled.h1`
  padding-left: 5px;
  margin-bottom: 15px;

  font-size: 32px;
  font-weight: 600;
`;

const Info = styled.p`
  font-size: 11px;
`;

const Separator = styled.span``;

const Writer = styled.span``;

const Date = styled.span``;

const ViewNum = styled.span``;

const CommentNum = styled.span``;

const Content = styled.div`
  padding: 60px 0 100px;
`;

const Article = styled.article`
  font-size: 12px;
`;
