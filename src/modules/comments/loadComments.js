import getComments from './api/getComments.js';

const loadComments = async (idMeals) => {
  const datesCntr = document.getElementById('comment__dates');
  const commentCntr = document.getElementById('comment__comment');
  const comments = await getComments(idMeals);
  let dates = '';
  let prevComments = '';
  let temp = '';
  if (comments) {
    comments.forEach((e) => {
      dates += `
        <li>${e.creation_date}</li>
      `;
      temp = `${e.username}: ${e.comment}`;
      prevComments += `
        <li>${temp}</li>
      `;
    });
    datesCntr.innerHTML = dates;
    commentCntr.innerHTML = prevComments;
  } else {
    datesCntr.innerHTML = dates;
    prevComments = 'There are no comments yet for this meal.';
    commentCntr.innerHTML = prevComments;
  }
};

export default loadComments;