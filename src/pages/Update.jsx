import styled from 'styled-components';
import UpdateForm from '../components/Update/UpdateForm';


const Update = () => {
  return (
    <StMainWrapper>
      <UpdateForm/>
    </StMainWrapper>
  );
};

export default Update;

const StMainWrapper = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  padding: 10px;
`;
