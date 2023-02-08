const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MVXIkzjpFxBu0g7Zagmf/likes/';

const getLikes = async () => {
  let likes = [];
  const response = await fetch(url);
  if (response) {
    likes = await response.json();
  }
  return likes;
};

export default getLikes;
