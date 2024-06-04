export const checkPostCategoryValidate = (category) => {
  if (category === '') {
    alert('카테고리를 입력해주세요');
    return false;
  }
  return true;
};

export const checkInputLengthValidate = (input) => {
  if (input.length <= 0) alert('빈 칸은 등록할 수 없습니다');

  return input.length > 0;
};
