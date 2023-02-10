import postComments from '../comments/api/postComments.js';
import hidePopup from './hidePopup.js';

const createPopup = () => {
  const popupSection = document.getElementById('popup');
  const popCtn = document.createElement('section');
  popCtn.setAttribute('id', 'pop__container');
  popCtn.innerHTML = `    
    <div class="image__section">
      <img class="thumb" src="" alt="MEAL IMAGE"/>
      <h2 class="mealName"></h2>
    </div>    
    <section class="information">
      <h4 class="category"></h4>
      <h4 class="area"></h4>
      <p class="instructions"></p>
    </section>
    <section class='comment__section'>
      <section class='load__comments'>
        <h2 id='comments__title'>Comments</h2>
        <div id='previous__comments'>          
          <ul id="comment__comment"></ul>
        </div>
        <h6 id='error__message'></h6>
      </section>
      <section >
        <form id='form__element' class="add__comment" action="">
          <h2>Add your comment</h2>
          <input id='input__name' class='form-control' type="text" placeholder="Your name" autocomplete='off' required>
          <textarea id='input__comment' class='form-control' type="text" rows='6' maxlength="50" placeholder="Your insights" autocomplete='off' required></textarea>
          <button id='comment__button' class='btn btn-outline-success commentsBtn' type="submit">Comment</button>
        </form>
      </section>
    </section>
    <i id='pop__close' class="fa-solid fa-xmark fa-2x"></i>    
    `;
  popupSection.appendChild(popCtn);
  // Event listener for the close icon
  const closeIcon = document.getElementById('pop__close');
  closeIcon.addEventListener('click', () => {
    hidePopup();
  });
  // Event listener for the comment button
  const form = document.getElementById('form__element');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const idMeal = document.querySelector('.category').id;
    postComments(idMeal);
  });
};

export default createPopup;