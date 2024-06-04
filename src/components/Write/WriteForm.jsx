import { useRef } from 'react';
import styled from 'styled-components';
import { insertPost } from '../../api/postsApi';

function WriteForm() {
  const categoryRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  const handleAddBtnClick = () => {
    const category = categoryRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    insertPost(category, title, content);
  };

  return (
    <StFormWrapper onSubmit={handleAddBtnClick}>
      <StCategoryWrapper>
        <StLabel>카테고리</StLabel>
        <StCategorySelect ref={categoryRef}>
          <option value="">분류 없음</option>
          <option value="recent">최신 글</option>
          <option value="domestic">국내</option>
          <option value="recommend">추천 음악</option>
          <option value="free">자유</option>
        </StCategorySelect>
      </StCategoryWrapper>
      <StTitleWrapper>
        <StLabel>제목</StLabel>
        <StTitleInput ref={titleRef} placeholder="제목을 입력해 주세요" />
      </StTitleWrapper>
      <StContentWrapper>
        <StLabel>내용</StLabel>
        <StContentTextArea ref={contentRef} />
      </StContentWrapper>
      <StBtnWrapper>
        <StAddBtn>등록</StAddBtn>
      </StBtnWrapper>
    </StFormWrapper>
  );
}

export default WriteForm;

const StFormWrapper = styled.form`
  margin-top: 10px;
`;

const StCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 15px;

  max-width: 170px;
`;

const StLabel = styled.label`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
`;

const StCategorySelect = styled.select`
  margin-left: 10px;
  padding: 8px 15px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  font-size: 14px;
  min-width: 140px;
`;

const StTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 15px;
`;

const StTitleInput = styled.input`
  all: unset;
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  min-width: 140px;
  font-size: 14px;
  color: rgb(58, 58, 58);
`;

const StContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 15px;
`;

const StContentTextArea = styled.textarea`
  padding: 15px 10px;
  font-size: 14px;
  height: 500px;
`;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const StAddBtn = styled.button``;
