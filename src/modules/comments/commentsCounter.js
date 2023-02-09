const commentsCounter = () => {
  const container = document.getElementById('comment__dates');
  const { length } = container.getElementsByTagName('li');
  const title = document.getElementById('comments__title');
  title.innerHTML = `Comments (${length})`;
};

export default commentsCounter;