// GET function to load name, category and instructions
import showPopup from './showPopup.js';
import loadComments from '../comments/loadComments.js';
import postComments from '../comments/api/postComments.js';

const fillPopup = async (idMeal) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const response = await fetch(url + idMeal);
  const data = await response.json();

  const category = document.querySelector('.category');
  const area = document.querySelector('.area');
  const instructions = document.querySelector('.instructions');
  const mealName = document.querySelector('.mealName');
  const mealImage = document.querySelector('.thumb');
  const dataArray = data.meals[0];
  category.innerHTML = `Category: ${dataArray.strCategory}`;
  area.innerHTML = `Area: ${dataArray.strArea}`;
  instructions.innerHTML = `<b>Instructions: </b>${dataArray.strInstructions}`;
  mealName.innerHTML = dataArray.strMeal;
  mealImage.src = dataArray.strMealThumb;
  // Load previous comments
  loadComments(idMeal);
  showPopup();
  // Event listener for the comment button
  const form = document.querySelector('.add__comment');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postComments(idMeal);
  });
};

export default fillPopup;