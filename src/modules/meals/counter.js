export const countMeals = () => {
  const mealsElement = document.getElementById('meals');
  const mealsCount = mealsElement ? mealsElement.children.length : 0;
  return mealsCount;
};

export const createMealsCountElement = () => {
  const mealsCount = countMeals();
  const mealsCountElement = document.createElement('a');
  mealsCountElement.setAttribute('href', '/');
  mealsCountElement.innerHTML = `Meals(${mealsCount})`;
  return mealsCountElement;
};

export const showCountMeals = (meals, mealsCountContainer) => {
  const mealsCountElement = createMealsCountElement();
  mealsCountContainer.appendChild(mealsCountElement);
  return mealsCountContainer;
};
