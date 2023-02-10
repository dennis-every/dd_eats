import getLikes from './api/getLikes.js';
import showLike from './showLike.js';

const loadLikes = async () => {
  const likes = await getLikes();
  likes.forEach((like) => {
    showLike(like);
  });
};

export default loadLikes;
