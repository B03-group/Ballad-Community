import { supabase } from './api';

export const getComments = async (postId) => {
  const { data, error } = await supabase.from('comments').select("*").eq('post_id', postId);

  if (!error) return data;
  else throw new Error();
};

export const updateCommentsLike = async (likeNum, plusNum, commentId, reverseLike) => {
  const { data, error } = await supabase
    .from('comments')
    .update({ like_num: likeNum + plusNum, like: reverseLike })
    .eq('comment_id', commentId)
    .select();

  const [updatedComment] = data;

  if (!error) return updatedComment;
  else throw new Error();
};

export const updateCommentsContent = async (commentId, content) => {
  const { data, error } = await supabase.from('comments').update({ content: content }).eq('comment_id', commentId).select();

  const [updatedComment] = data;

  if (!error) return updatedComment;
  else throw new Error();
};

export const insertComment = async (newComment) => {
  const { error } = await supabase.from('comments').insert(newComment);

  if (error) console.log(error);
};
export const DelComment = async (commentId) => {
  const { error } = await supabase.from('comments').delete().eq('comment_id', commentId);

  if (error) throw new Error();
};
