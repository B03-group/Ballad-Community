import { supabase } from './api';

export const getComments = async (detailId) => {
  const { data, error } = await supabase.from('test').select().eq('page_id', detailId);

  if (!error) return data;
  else throw new Error();
};

export const updateComments = async (likeNum, plusNum, commentId, reverseLike) => {
  const { data, error } = await supabase
    .from('test')
    .update({ like_num: likeNum + plusNum, like: reverseLike })
    .eq('comment_id', commentId)
    .select();

  const [updatedComment] = data;

  if (!error) return updatedComment;
  else throw new Error();
};

export const insertComment = async (newComment) => {
  const { error } = await supabase.from('test').insert(newComment);

  if (error) throw new Error();
};
