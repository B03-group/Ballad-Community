import { supabase } from '../api/api';

const detailCommentsLoader = async (postId) => {
  const { data, error } = await supabase.from('commnts').select().eq('page_id', postId);

  if (!error) return data;
  else throw new Error();
};

const detailPostLoader = async (postId) => {
  const { data, error } = await supabase.from('posts').select().eq('post_id', postId);

  if (!error) return data;
  else throw new Error();
};

const detailLoader = async(postId) => {
  const postData = await detailPostLoader(postId);
  const commentsData = await detailCommentsLoader(postId);

  return {postData, commentsData};
};

export default detailLoader;
