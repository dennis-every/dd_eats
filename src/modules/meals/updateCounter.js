const updateCounter = (mealsCount) => {
  const mealsCountElement = document.getElementById('mealsCount');
  mealsCountElement.innerHTML = `Meals(${mealsCount})`;
};
export default updateCounter;
