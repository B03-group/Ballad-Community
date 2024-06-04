import styled from 'styled-components';

function BlackHr() {
  return <StHr />;
}

export default BlackHr;

const StHr = styled.hr`
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.3);
`;
