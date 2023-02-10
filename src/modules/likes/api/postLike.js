const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MVXIkzjpFxBu0g7Zagmf/likes/';

const postLike = async (mealId) => {
  const mealObj = { item_id: mealId };
  const request = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(mealObj),
  });
  const response = await request;
  return response;
};

export default postLike;
