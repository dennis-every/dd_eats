const showLike = (like) => {
  const likeElement = document.getElementById(`likes_${like.item_id}`);
  if (likeElement) {
    likeElement.innerHTML = `${like.likes} likes`;
  }
};

export default showLike;
