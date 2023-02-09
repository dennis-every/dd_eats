export const countMeals = (meals) => {
  const mealsCount = meals ? meals.length : 0;
  return mealsCount;
};

export const createMealsCountElement = (meals) => {
  const mealsCount = countMeals(meals);
  const mealsCountElement = document.createElement('a');
  mealsCountElement.setAttribute('href', '/');
  mealsCountElement.innerHTML = `Meals(${mealsCount})`;
  return mealsCountElement;
};

export const showCountMeals = (meals, mealsCountContainer) => {
  const mealsCountElement = createMealsCountElement(meals);
  mealsCountContainer.appendChild(mealsCountElement);
  return mealsCountContainer;
};
