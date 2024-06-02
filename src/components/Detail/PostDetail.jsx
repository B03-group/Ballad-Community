import styled from 'styled-components';

function PostDetail() {
  return (
    <Wrapper>
      <Title>제목</Title>
      <Info>
        <Writer>작성자</Writer>
        <Date>날짜</Date>
        <ViewNum>조회 수</ViewNum>
        <CommentNum>댓글 수</CommentNum>
      </Info>
      <HR />
      <Content>
        <Article>글 상세내용</Article>
      </Content>
    </Wrapper>
  );
}

export default PostDetail;

const Wrapper = styled.section``;

const Title = styled.h3``;

const Info = styled.p``;

const Writer = styled.span``;

const Date = styled.span``;

const ViewNum = styled.span``;

const CommentNum = styled.span``;

const HR = styled.hr``;

const Content = styled.div``;

const Article = styled.article``;
