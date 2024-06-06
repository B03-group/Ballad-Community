import { supabase } from './api';

export const insertPost = async (userId, userName, category, title, content, imgUrl) => {
  const newPost = {
    post_id: userId,
    category,
    date: Date.now(),
    writer: userName,
    title,
    content,
    views: 0,
    like: 0,
    img_url: imgUrl
  };
  const { error } = await supabase.from('posts').insert(newPost);

  if (error) console.log(error);
};

export const uploadImg = async (imgFile) => {
  const { data, error } = await supabase.storage.from('posts').upload(`post_${Date.now()}.png`, imgFile);

  if (!error) return data.path;
  else console.log(error);
};

export const getPost = async (postId) => {
  const { data, error } = await supabase.from('posts').select().eq('post_id', postId);

  if (!error) return data;
  else throw new Error();
};

export const updatePostViews = async (views, postId) => {
  const { error } = await supabase.from('posts').update({ views }).eq('post_id', postId).select();

  if (error) throw new Error();
};

export const DelPost = async (postId) => {
  const { error } = await supabase.from('posts').delete().eq('post_id', postId);

  if (error) throw new Error();
};

export const updatePost = async (postId, category, content, title, imgUrl) => {

  const { error } = await supabase
    .from('posts')
    .update({ category, content, title, img_url: imgUrl })
    .eq('post_id', postId)
    .select();

  if (error) throw new Error;
};
