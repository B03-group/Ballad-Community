import styled from 'styled-components';

function BlackHr() {
  return <Hr />;
}

export default BlackHr;

const Hr = styled.hr`
  height: 1px;
  border: 0;
  background: rgba(0, 0, 0, 0.3);
`;
