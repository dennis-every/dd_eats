import postLike from './api/postLike.js';
import updateLikeCount from './updateLikeCount.js';

const addLikeEventHandler = (e) => {
  e.preventDefault();
  const mealId = e.target.parentElement.id.split('_')[1];
  postLike(mealId);
  updateLikeCount(mealId);
};

export const loadLikeEventListener = (meal) => {
  const likeLink = document.getElementById(`like_${meal.idMeal}`);
  likeLink.addEventListener('click', addLikeEventHandler);
};

export const addLike = () => {};
