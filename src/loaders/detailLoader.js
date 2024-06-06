import { getComments } from '../api/commentApi';
import { getPost } from '../api/postsApi';

const detailLoader = async (postId) => {
  const postData = await getPost(postId);
  const commentsData = await getComments(postId);

  return { postData, commentsData };
};

export default detailLoader;
