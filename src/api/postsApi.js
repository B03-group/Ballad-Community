import { v4 as uuidv4 } from 'uuid';
import { supabase } from './api';

export const insertPost = async (category, content, title) => {
  const newPost = {
    post_id: uuidv4(),
    category,
    date: Date.now(),
    writer: 'fakeUser',
    title, 
    content,
    views: 0,
    like: 0,
  };
  const { error } = await supabase.from('posts').insert(newPost);

  if (error) throw new Error();
};
