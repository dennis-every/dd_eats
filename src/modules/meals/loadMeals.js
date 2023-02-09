import getMeals from './getMeals.js';
import showMeal from './showMeal.js';
import loadLikes from '../likes/loadLikes.js';
import { loadLikeEventListener } from '../likes/addLike.js';
import { showCountMeals } from './counter.js';
import mealCard from './mealCard.js';

const mealsCountContainer = document.getElementById('mealsCountContainer');

const loadMeals = async () => {
  const meals = await getMeals();
  meals.forEach((meal) => {
    const cardElement = mealCard(meal);
    showMeal(cardElement, meal);
    loadLikeEventListener(meal);
  });
  loadLikes();
  showCountMeals(meals, mealsCountContainer);
};

export default loadMeals;
