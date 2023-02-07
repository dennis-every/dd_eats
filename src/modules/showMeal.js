import '../css/card.css';

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
      <h3>${meal.strMeal}</h3>
      <span>${meal.strArea}</span>
      <div class="text-end">
        <button id="commentsBtn" class='btn btn-outline-success'>Comments</button>
      </div>  
    </div>
  </article>  
  `;
  mealsList.appendChild(mealElement);
};

export default showMeal;
