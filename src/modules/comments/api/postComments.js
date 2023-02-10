import loadComments from '../loadComments.js';

const postComments = async (idMeal) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MVXIkzjpFxBu0g7Zagmf/comments';
  const user = document.getElementById('input__name');
  const comment = document.getElementById('input__comment');
  const dataToPost = {
    item_id: idMeal,
    username: user.value,
    comment: comment.value,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPost),
  });
  
  user.value = '';
  comment.value = '';
  loadComments(idMeal);

  console.log('At the end of POST comment', idMeal)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
};

export default postComments;