import getMeals from './getMeals.js';
import showMeal from './showMeal.js';
import loadLikes from '../likes/loadLikes.js';
import { loadLikeEventListener } from '../likes/addLike.js';
import updateMealsCounter from './updateMealsCounter.js';

const loadMeals = async () => {
  const meals = await getMeals();
  meals.forEach((meal) => {
    showMeal(meal);
    loadLikeEventListener(meal);
  });
  loadLikes();
  updateMealsCounter();
};

export default loadMeals;
