import styled from 'styled-components';
import WriteForm from '../components/Write/WriteForm';

const Write = () => {
  return (
    <StMainWrapper>
      <WriteForm />
    </StMainWrapper>
  );
};

export default Write;

const StMainWrapper = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 10px;
`;
