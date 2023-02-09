import '../../css/card.css';

const mealCard = (meal) => {
  const mealElement = document.createElement('li');
  mealElement.classList.add('col-md-6');
  mealElement.classList.add('col-lg-4');
  mealElement.classList.add('col-xxl-3');
  mealElement.innerHTML = `
  <article id=${meal.idMeal}>
    <div class='card h-100'>
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
    </div>  
  </article>  
  `;
  return mealElement;
};

export default mealCard;
