const createLikedElement = () => {
  const likedElement = document.createElement('i');
  likedElement.classList.add('fa-solid');
  likedElement.classList.add('fa-heart');
  likedElement.classList.add('fa-2x');
  return likedElement;
};

const getCurrentLikeCount = (mealId) => {
  const likeElement = document.getElementById(`likes_${mealId}`);
  const currentCount = likeElement.innerText.split(' ')[0];
  return currentCount;
};

const createlikeCountElement = (mealId) => {
  const likeCountElement = document.createElement('small');
  likeCountElement.setAttribute('id', `likes_${mealId}`);
  const currentLikeCount = getCurrentLikeCount(mealId);
  likeCountElement.innerHTML = `${Number(currentLikeCount) + 1} likes`;
  return likeCountElement;
};

const updateLikeCount = (mealId) => {
  const likeLink = document.getElementById(`like_${mealId}`);
  const likedElement = createLikedElement();
  const likeCountElement = createlikeCountElement(mealId);
  likeLink.innerHTML = '';
  likeLink.appendChild(likedElement);
  likeLink.appendChild(likeCountElement);
};

export default updateLikeCount;
