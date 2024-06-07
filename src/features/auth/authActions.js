import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient';

// 회원가입
export const signup = createAsyncThunk('auth/signup', async ({ email, password, name, profileImage }, thunkAPI) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }
      }
    });

    if (error) throw error;

    const user = data.user;

    // 프로필 이미지 업로드
    let profileImageUrl = '';
    if (profileImage) {
      const fileExt = profileImage.name.split('.').pop();
      const fileName = `${user.id}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      const { data: imageData, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, profileImage);

      if (uploadError) throw uploadError;

      // 로그 추가: 파일 경로 확인
      console.log('File path:', filePath);

      const { publicURL, error: urlError } = supabase.storage.from('avatars').getPublicUrl(filePath);

      if (urlError) throw urlError;

      profileImageUrl = publicURL;

      // 로그 추가
      console.log('Profile Image URL:', profileImageUrl);

      await supabase.auth.updateUser({ data: { avatar_url: profileImageUrl } });
    }

    return { ...user, avatar_url: profileImageUrl };
  } catch (error) {
    console.error('Signup error:', error);
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred');
  }
});

// 로그인
export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.user;
  } catch (error) {
    console.error('Login error:', error);
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred');
  }
});

// 로그아웃
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return {};
  } catch (error) {
    console.error('Logout error:', error);
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred');
  }
});

// 프로필 업데이트
export const updateProfile = createAsyncThunk('auth/updateProfile', async ({ name, profileImage }, thunkAPI) => {
  try {
    const { data, error: userError } = await supabase.auth.getUser();

    if (userError) throw userError;

    const user = data.user;
    const updates = {
      id: user.id,
      user_metadata: {
        ...user.user_metadata,
        name
      }
    };

    if (profileImage) {
      const fileExt = profileImage.name.split('.').pop();
      const fileName = `${user.id}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, profileImage, { upsert: true });

      if (uploadError) throw uploadError;

      const { publicURL, error: urlError } = supabase.storage.from('avatars').getPublicUrl(filePath);
      if (urlError) throw urlError;

      updates.user_metadata.avatar_url = publicURL;

      // 로그 추가
      console.log('Updated Profile Image URL:', publicURL);
    }

    const { error } = await supabase.auth.updateUser(updates);

    if (error) throw error;

    // 업데이트된 사용자 데이터를 반환
    const updatedUser = { ...user, user_metadata: updates.user_metadata };
    return updatedUser;
  } catch (error) {
    console.error('Profile update error:', error);
    return thunkAPI.rejectWithValue(error.message || 'Unknown error occurred');
  }
});

// setUser 액션 추가
export { setUser } from './authSlice';
