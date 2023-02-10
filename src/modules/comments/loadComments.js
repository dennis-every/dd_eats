import getComments from './api/getComments.js';
import commentsCounter from './commentsCounter.js';

const loadComments = async (idMeals) => {
  const commentCntr = document.getElementById('comment__comment');
  const comments = await getComments(idMeals);
  const container = document.getElementById('error__message');
  container.textContent = '';
  let prevComments = '';
  if (comments) {
    comments.forEach((e) => {
      prevComments += `
        <li class='comment__card'>
          <h5><b>@${e.username}</b></h5>
          <h5>${e.comment}</h5>
          <h6 class="date__text text-end">${e.creation_date}</h6>
        </li>
      `;
    });
    commentCntr.innerHTML = prevComments;
  } else {
    commentCntr.innerHTML = '';
    container.textContent = 'There are no comments yet for this meal.';
  }
  commentsCounter();
};

export default loadComments;
