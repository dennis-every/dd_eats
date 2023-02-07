import getMeals from './getMeals.js';
import showMeal from './showMeal.js';

const loadItems = async () => {
  const meals = await getMeals();
  meals.forEach((meal) => {
    showMeal(meal);
  });
};

export default loadItems;
