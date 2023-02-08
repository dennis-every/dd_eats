import countMeals from './countMeals.js';

const updateMealsCounter = () => {
  const mealsCountElement = document.getElementById('mealsCount');
  const count = countMeals();
  mealsCountElement.innerHTML = `Meals(${count})`;
};
export default updateMealsCounter;
