import getMeals from './getMeals.js';
import showMeal from './showMeal.js';
import loadLikes from '../likes/loadLikes.js';

const loadMeals = async () => {
  const meals = await getMeals();
  meals.forEach((meal) => {
    showMeal(meal);
  });
  loadLikes();
};

export default loadMeals;
