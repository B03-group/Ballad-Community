import styled from 'styled-components';
import { getDate } from '../../assets/functions';

function Comment({ writer, date, content, like }) {
  const dateStr = getDate(date, 'long');
  return (
    <Wrapper>
      <Header>
        <Writer>{writer}</Writer>
        <Info>
          <Like>{like}</Like>
          <Date>{dateStr}</Date>
        </Info>
      </Header>
      <Body>
        <Content>{content}</Content>
      </Body>
      <Footer>
        <LikeBtn>Like</LikeBtn>
      </Footer>
      <Hr />
    </Wrapper>
  );
}

export default Comment;

const Wrapper = styled.li`
  padding: 10px 5px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 15px;
`;

const Writer = styled.div`
  font-size: 14px;
`;

const Info = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

const Like = styled.span`
  font-size: 14px;
`;

const Date = styled.span`
  font-size: 12px;
`;

const Body = styled.div`
  margin-bottom: 15px;
`;

const Content = styled.p`
  font-size: 12px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: end;
`;

const LikeBtn = styled.button``;

const Hr = styled.hr`
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.1);
`;
