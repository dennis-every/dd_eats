const showPopup = () => {
  const popSection = document.getElementById('popup');
  const bdy = document.querySelector('body');
  const ftr = document.querySelector('footer');
  const nav = document.getElementById('nav');

  bdy.classList.add('block__scroll');
  ftr.classList.add('display__none');
  nav.classList.add('display__none');
  
  popSection.classList.remove('display__none');
  popSection.classList.add('display__block');
  
  
}

export default showPopup;