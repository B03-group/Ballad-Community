import styled from 'styled-components';

function Comment({ writer, date, content, like }) {
  return (
    <Wrapper>
      <Header>
        <Writer>{writer}</Writer>
        <Info>
          <Like>{like}</Like>
          <Date>{date}</Date>
        </Info>
      </Header>
      <Body>{content}</Body>
      <Footer>
        <LikeBtn>Like</LikeBtn>
      </Footer>
    </Wrapper>
  );
}

export default Comment;

const Wrapper = styled.li``;

const Header = styled.div``;

const Writer = styled.div``;

const Info = styled.div``;

const Like = styled.span``;

const Date = styled.span``;

const Body = styled.div``;

const Footer = styled.div``;

const LikeBtn = styled.button``;
