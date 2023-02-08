const hidePopup = () => {
  const popSection = document.getElementById('popup');
  const bdy = document.querySelector('body');
  const ftr = document.querySelector('footer');
  const nav = document.getElementById('nav');

  popSection.classList.add('display__none');
  popSection.classList.remove('display__block');
  bdy.classList.remove('block__scroll');
  ftr.classList.remove('display__none');
  nav.classList.remove('display__none');
};

export default hidePopup;