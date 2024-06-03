import { createSlice } from '@reduxjs/toolkit';
import dummy from '../../assets/dummy';

const initialState = dummy;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
