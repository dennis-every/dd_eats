import getMeals from './getMeals.js';
import showMeal from './showMeal.js';
import loadLikes from './loadLikes.js';

const loadMeals = async () => {
  const meals = await getMeals();
  meals.forEach((meal) => {
    showMeal(meal);
  });
  loadLikes();
};

export default loadMeals;
