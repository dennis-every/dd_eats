import postLike from './postLike.js';

const addLikeEventHandler = (e) => {
  e.preventDefault();
  const mealId = e.target.parentElement.id.split('_')[1];
  postLike(mealId);
};

export const loadLikeEventListener = (meal) => {
  const likeLink = document.getElementById(`like_${meal.idMeal}`);
  likeLink.addEventListener('click', addLikeEventHandler);
};

export const addLike = () => {};
