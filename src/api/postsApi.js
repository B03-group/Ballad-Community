import { v4 as uuidv4 } from 'uuid';
import { supabase } from './api';

export const insertPost = async (category, content, title, imgUrl) => {
  const newPost = {
    post_id: uuidv4(),
    category,
    date: Date.now(),
    writer: 'fakeUser',
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
