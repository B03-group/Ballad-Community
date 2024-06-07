import { supabase } from './api';

export const getLikeUsers = async (postId) => {
  const { data, error } = await supabase.from('likes').select().eq('post_id', postId);

  if (!error) return data;
  else throw new Error();
};

export const delLikeUser = async (postId, userId) => {
  const { error } = await supabase.from('likes').delete().eq('post_id', postId).eq('user_id', userId);

  if (error) console.log(error);
};

export const insertLikeUser = async (postId, userId) => {
  const newUser ={
    post_id: postId,
    user_id: userId,
  }
  const { error } = await supabase.from('likes').insert(newUser);

  if (error) throw console.log(error);
};