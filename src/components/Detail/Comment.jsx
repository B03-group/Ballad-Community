import styled from 'styled-components';
import { getDate } from '../../assets/functions';

const fakeUserId = '80257256-087d-4ef3-9d35-d7ae865404fa';

const Comment = ({ commentId, userId, writer, date, content, handleUpdateClick, handleDelClick }) => {
  const dateStr = getDate(date, 'long');

  return (
    <StWrapper>
      <StHeader>
        <StWriter>{writer}</StWriter>
        <StInfo>
          <StDate>{dateStr}</StDate>
        </StInfo>
      </StHeader>
      <StBody>
        <StContent>{content}</StContent>
      </StBody>

      <StFooter>
        {fakeUserId === userId && (
          <>
            <StUpdateBtn onClick={handleUpdateClick(commentId)}>수정</StUpdateBtn>
            <StDelBtn onClick={handleDelClick(commentId)}>삭제</StDelBtn>
          </>
        )}
      </StFooter>
    </StWrapper>
  );
};

export default Comment;

const StWrapper = styled.li`
  padding: 10px 5px;
`;

const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding-bottom: 10px;
`;

const StWriter = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const StInfo = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

const StDate = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const StBody = styled.div`
  margin-bottom: 15px;
`;

const StContent = styled.p`
  font-size: 14px;
`;

const StFooter = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
`;

const StUpdateBtn = styled.button`
  width: 60px;
  background: #333;
  color: white;
`;

const StDelBtn = styled.button`
  margin-left: 10px;
  width: 60px;
  background: #333;
  color: white;
`;
