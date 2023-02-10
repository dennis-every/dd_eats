import fillPopup from '../popup/fillPopup.js';

const showMeal = (mealCardElement, meal) => {
  const mealsList = document.getElementById('meals');
  mealsList.appendChild(mealCardElement);

  const btn = document.getElementById(`comments_${meal.idMeal}`);
  btn.addEventListener('click', () => {
    fillPopup(meal.idMeal);
  });
};

export default showMeal;
