const meals = document.getElementById('meals');

const countMeals = () => {
  const mealsCount = meals.children.length;
  return mealsCount;
};

export default countMeals;
