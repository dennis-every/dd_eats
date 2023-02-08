import getMeals from './getMeals.js';
import showMeal from './showMeal.js';
import loadLikes from '../likes/loadLikes.js';
import { loadLikeEventListener } from '../likes/addLike.js';
import updateCounter from './updateCounter.js';
import mealCard from './mealCard.js';

const loadMeals = async () => {
  const meals = await getMeals();
  meals.forEach((meal) => {
    const cardElement = mealCard(meal);
    showMeal(cardElement);
    loadLikeEventListener(meal);
  });
  loadLikes();
  const mealsCount = meals.length;
  updateCounter(mealsCount);
};

export default loadMeals;
