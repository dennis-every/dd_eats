import './css/index.css';
import './css/footer.css';
import './css/header.css';
import './css/popup.css';
import loadLogo from './modules/loadLogo.js';
import loadMeals from './modules/loadMeals.js';
import createPopup from './modules/popup/createPopup.js';

window.onload = () => {
  loadLogo();
  loadMeals();
  createPopup();
};
