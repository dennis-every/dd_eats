import '../../css/card.css';
import fillPopup from '../popup/fillPopup.js'

const mealsList = document.getElementById('meals');

const showMeal = (meal) => {
  const mealElement = document.createElement('li');
  mealElement.classList.add('col-md-6');
  mealElement.classList.add('col-lg-4');
  mealElement.classList.add('col-xxl-3');
  mealElement.innerHTML = `
  <article class='card' id=${meal.idMeal}>
    <img src=${meal.strMealThumb} class="card-img-top" alt=${meal.strMeal}>
    <div class="card-body">
      <header class='row'>
        <div class="col">
          <span class='fs-3'>${meal.strMeal}</span><br> 
          <span class="fs-6">${meal.strArea}</span>
        </div>
        <div class="col d-flex justify-content-end">
          <a href="#" id="like_${meal.idMeal}" class="d-flex justify-content-center flex-column align-items-center">
            <i class="fa-regular fa-heart fa-2x"></i>
            <small id="likes_${meal.idMeal}">0 likes</small>
          </a>
        </div>
      </header>
      <div class="row mt-3">
        <div class="col">
          <small>${meal.strCategory}</small>
        </div>
        <div class="col text-end">
          <button id="comments_${meal.idMeal}" class='btn btn-outline-success commentsBtn'>Comments</button>
        </div>
      </div>
    </div>
  </article>  
  `;
  mealsList.appendChild(mealElement); 
  // add event listener
  const btn = document.getElementById('comments_'+meal.idMeal);
  btn.addEventListener('click', () => {
    fillPopup(meal.idMeal);
  });
  // add event listener
};

export default showMeal;
