import styled from 'styled-components';
import { getDate } from '../../assets/functions';

function Comment({ writer, date, content, like }) {
  const dateStr = getDate(date, 'long');
  return (
    <StWrapper>
      <StHeader>
        <StWriter>{writer}</StWriter>
        <StInfo>
          <StLike>{like}</StLike>
          <StDate>{dateStr}</StDate>
        </StInfo>
      </StHeader>
      <StBody>
        <StContent>{content}</StContent>
      </StBody>
      <StFooter>
        <StLikeBtn>StLike</StLikeBtn>
      </StFooter>
      <StHr />
    </StWrapper>
  );
}

export default Comment;

const StWrapper = styled.li`
  padding: 10px 5px;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 15px;
`;

const StWriter = styled.div`
  font-size: 14px;
`;

const StInfo = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

const StLike = styled.span`
  font-size: 14px;
`;

const StDate = styled.span`
  font-size: 12px;
`;

const StBody = styled.div`
  margin-bottom: 15px;
`;

const StContent = styled.p`
  font-size: 12px;
`;

const StFooter = styled.div`
  display: flex;
  justify-content: end;
`;

const StLikeBtn = styled.button``;

const StHr = styled.hr`
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.1);
`;
