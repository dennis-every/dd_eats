import '../css/card.css';
import fillPopup from './popup/fillPopup.js';

const mealsList = document.getElementById('meals');

const showMeal = (meal) => {
  const mealElement = document.createElement('li');
  mealElement.classList.add('col-md-6');
  mealElement.classList.add('col-lg-4');
  mealElement.classList.add('col-xl-3');
  mealElement.innerHTML = `
  <article class='card'>
    <img src=${meal.strMealThumb} class="card-img-top" alt=${meal.strMeal}>
    <div class="card-body">
      <header class='d-flex justify-content-between'>
        <h4>${meal.strMeal}</h4>
        <a href="#"><i class="fa-regular fa-heart fa-2x"></i></a> 
      </header>
      <span>${meal.strArea}</span>
      <div class="text-end">
        <button id=${meal.idMeal} class='btn btn-outline-success'>Comments</button>
      </div>  
    </div>
  </article>  
  `;

  mealsList.appendChild(mealElement);
  // add event listener
  const btn = document.getElementById(meal.idMeal);
  btn.addEventListener('click', () => {
    fillPopup(meal.idMeal);
  });
  // add event listener
};

export default showMeal;
