import { v4 as uuidv4 } from 'uuid';
import { supabase } from './api';

export const getComments = async (detailId) => {
  const { data, error } = await supabase.from('test').select().eq('page_id', detailId);

  if (!error) return data;
  else throw new Error();
};

export const updateCommentsLike = async (likeNum, plusNum, commentId, reverseLike) => {
  const { data, error } = await supabase
    .from('test')
    .update({ like_num: likeNum + plusNum, like: reverseLike })
    .eq('comment_id', commentId)
    .select();

  const [updatedComment] = data;

  if (!error) return updatedComment;
  else throw new Error();
};

export const updateCommentsContent = async (commentId, content) => {
  const { data, error } = await supabase.from('test').update({ content: content }).eq('comment_id', commentId).select();

  const [updatedComment] = data;

  if (!error) return updatedComment;
  else console.log(error);
};

export const insertComment = async (content, userId, pageId) => {
  const newComment = {
    comment_id: uuidv4(),
    date: Date.now(),
    writer: 'fakeUser',
    content: content,
    user_id: userId,
    page_id: pageId,
    like_num: 0,
    like: false
  };
  const { error } = await supabase.from('test').insert(newComment);

  if (error) throw new Error();
};
export const DelComment = async (commentId) => {
  const { error } = await supabase.from('test').delete().eq('comment_id', commentId);

  if (error) throw new Error();
};
