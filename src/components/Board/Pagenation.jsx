import styled from 'styled-components';
import usePagenation from '../../hooks/usePagenation';

const Pagenation = () => {
  const { goBackPage, goNextPage, showPage } = usePagenation();

  return (
    <div>
      <StButton onClick={goBackPage}>이전</StButton>
      {showPage()}
      <StButton onClick={goNextPage}>다음</StButton>
    </div>
  );
};

export default Pagenation;

const StButton = styled.button`
  background-color: transparent;
  border: transparent;
  margin: 10px;
`;
