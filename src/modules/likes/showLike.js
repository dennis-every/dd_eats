const showLike = (like) => {
  const likeElement = document.getElementById(`likes_${like.item_id}`);
  if (likeElement) {
    if (like.likes === 1) {
      likeElement.innerHTML = `${like.likes} like`;
    } else {
      likeElement.innerHTML = `${like.likes} likes`;
    }
  }
};

export default showLike;
