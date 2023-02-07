import './css/index.css';
import './css/footer.css';
import './css/header.css';
import loadLogo from './modules/loadLogo.js';
import loadMeals from './modules/loadMeals.js';

window.onload = () => {
  loadLogo();
  loadMeals();
};
