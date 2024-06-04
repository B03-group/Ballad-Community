import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient';

export const login = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.user;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

export const signup = createAsyncThunk('auth/signup', async ({ email, password }, { rejectWithValue }) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data.user;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});
