import '../../css/card.css';

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
          <div class="d-flex justify-content-center flex-column align-items-center"> 
            <a href="#" id="like_${meal.idMeal}"><i class="fa-regular fa-heart fa-2x"></i></a>
            <small id="likes_${meal.idMeal}">0 likes</small>
          </div>
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
};

export default showMeal;
