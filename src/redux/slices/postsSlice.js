import { createSlice } from '@reduxjs/toolkit';
import dummyData from '../../assets/dummyData';

const initialState = dummyData;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
