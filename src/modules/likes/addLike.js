import postLike from './api/postLike.js';
import updateLikeCount from './updateLikeCount.js';

const addLikeEventHandler = (e) => {
  e.preventDefault();
  const mealId = e.target.parentElement.id.split('_')[1];
  const liked = e.target.parentElement.classList.contains('liked');
  if (!liked) {
    e.target.parentElement.classList.add('liked');
    postLike(mealId);
    updateLikeCount(mealId);
  }
};

export const loadLikeEventListener = (meal) => {
  const likeLink = document.getElementById(`like_${meal.idMeal}`);
  likeLink.addEventListener('click', addLikeEventHandler);
};

export const addLike = () => {};
