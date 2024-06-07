import { getComments } from '../api/commentApi';
import { getLikeUsers } from '../api/likeApi';
import { getPost } from '../api/postsApi';

const detailLoader = async (postId) => {
  const postData = await getPost(postId);
  const commentsData = await getComments(postId);
  const likeUsersData = await getLikeUsers(postId);

  return { postData, commentsData, likeUsersData };
};

export default detailLoader;
