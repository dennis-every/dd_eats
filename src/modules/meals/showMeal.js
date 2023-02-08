const showMeal = (mealCardElement) => {
  const mealsList = document.getElementById('meals');
  mealsList.appendChild(mealCardElement);
};

export default showMeal;
