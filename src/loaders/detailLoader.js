import { getComments } from '../api/commentApi';
import { getPost } from '../api/postsApi';

const detailLoader = async (postId) => {
  const postData = await getComments(postId);
  const commentsData = await getPost(postId);

  return { postData, commentsData };
};

export default detailLoader;
