import getLikes from './getLikes.js';
import showLike from './showLike.js';

const loadLikes = async () => {
  const likes = await getLikes();
  likes.forEach((like) => {
    showLike(like);
  });
};

export default loadLikes;
