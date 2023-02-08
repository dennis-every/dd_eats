//GET function to load name, category and instructions
import showPopup from "./showPopup";
const fillPopup = async (idMeal) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='  
  const response = await fetch(url + idMeal);
  const data = await response.json();

  const category = document.querySelector('.category');
  const area = document.querySelector('.area');
  const instructions = document.querySelector('.instructions');
  const mealName = document.querySelector('.mealName');
  const mealImage = document.querySelector('.thumb');  
  const dataArray = data.meals[0];
  category.innerHTML = 'Category: '+dataArray.strCategory;
  area.innerHTML = 'Area: '+dataArray.strArea;
  instructions.innerHTML = '<b>Instructions: </b>'+dataArray.strInstructions;
  mealName.innerHTML = dataArray.strMeal;
  mealImage.src = dataArray.strMealThumb;
  showPopup();
};

export default fillPopup;