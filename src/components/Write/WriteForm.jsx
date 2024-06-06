import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { insertPost, uploadImg } from '../../api/postsApi';
import { checkInputLengthValidate, checkPostCategoryValidate } from '../../assets/validations';

const WriteForm = () => {
  const [imgFile, setImgFile] = useState();
  const [imgUrl, setImgUrl] = useState();
  const categoryRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const ImgInputRef = useRef();
  const navigator = useNavigate();

  const handleAddBtnClick = async (e) => {
    e.preventDefault();
    const category = categoryRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (!checkPostCategoryValidate(category)) return;
    if (!checkInputLengthValidate(title)) return;
    if (!checkInputLengthValidate(content)) return;

    const path = await uploadImg(imgFile);

    const uploadImgUrl = `https://hosygkmrpmwxwrqoqlhq.supabase.co/storage/v1/object/public/posts/${path}`;
    insertPost(category, title, content, uploadImgUrl);
    alert('등록이 완료되었습니다!');
    navigator(`/board/${category}?page=1`);
  };

  const handleImgChange = ({ target }) => {
    const [file] = target.files;
    if (!file) {
      return;
    }
    setImgFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgUrl(String(reader.result));
    };
  };

  const handleAddImgBtnClick = async (e) => {
    e.preventDefault();
    ImgInputRef.current.click();
  };

  return (
    <StFormWrapper>
      <StCategoryWrapper>
        <StLabel>카테고리</StLabel>
        <StCategorySelect ref={categoryRef}>
          <option value="공연(정보,후기)">공연(정보,후기)</option>
          <option value="추천음악">추천 음악</option>
          <option value="자유">자유</option>
        </StCategorySelect>
      </StCategoryWrapper>
      <StTitleWrapper>
        <StLabel>제목</StLabel>
        <StTitleInput ref={titleRef} placeholder="제목을 입력해 주세요" />
      </StTitleWrapper>
      <StContentWrapper>
        <StLabel>내용</StLabel>
        <StFileInput onChange={handleImgChange} ref={ImgInputRef} type="file" />
        <StAddImgBtn onClick={handleAddImgBtnClick}>📸이미지</StAddImgBtn>
        <StInputArea>
          <StImgWrapper>
            <img src={imgUrl} />
          </StImgWrapper>
          <StContentTextArea ref={contentRef} />
        </StInputArea>
      </StContentWrapper>
      <StBtnWrapper>
        <StAddBtn onClick={handleAddBtnClick}>🖱️등록</StAddBtn>
      </StBtnWrapper>
    </StFormWrapper>
  );
};

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

const StInputArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  border: 1px solid black;
`;

const StImgWrapper = styled.div`
  width: 30%;

  & > img {
    max-width: 100%;
    object-fit: cover;
  }
`;

const StFileInput = styled.input`
  display: none;
`;

const StAddImgBtn = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  border-radius: 5px;
  padding: 5px;
  font-size: 17px;
`;

const StContentTextArea = styled.textarea`
  all: unset;
  padding: 15px 10px;
  font-size: 20px;
  width: 100%;
  height: 500px;
  box-sizing: border-box;
`;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const StAddBtn = styled.button`
  background-color: black;
  color: white;
  padding: 7px 15px 7px 15px;
  border-radius: 5px;
  font-size: 17px;
`;
