import { createSlice } from '@reduxjs/toolkit';
import { login, signup, logout, updateProfile } from './authActions';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null, // 로컬 스토리지에서 사용자 정보를 불러옴
  loading: false,
  error: null,
  message: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.message = '로그인 성공!';
        localStorage.setItem('user', JSON.stringify(action.payload)); // 로컬 스토리지에 사용자 정보 저장
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.message = '로그인 실패';
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.message = '회원가입 성공!';
        localStorage.setItem('user', JSON.stringify(action.payload)); // 로컬 스토리지에 사용자 정보 저장
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.message = '회원가입 실패';
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.message = '로그아웃 되셨습니다!';
        localStorage.removeItem('user'); // 로컬 스토리지에서 사용자 정보 제거
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
        state.message = '로그아웃 실패';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.message = '프로필 업데이트 성공!';
        localStorage.setItem('user', JSON.stringify(action.payload)); // 로컬 스토리지에 사용자 정보 저장
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = action.payload;
        state.message = '프로필 업데이트 실패';
      });
  }
});

export const { setUser, clearMessage } = authSlice.actions;
export default authSlice.reducer;
