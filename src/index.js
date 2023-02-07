import './css/index.css';
import './css/footer.css';
import './css/header.css';
import Logo from './images/logo.png';

const loadLogo = () => {
  const logo = document.getElementById('logo');
  logo.src = Logo;
  logo.alt = 'logo';
};

window.onload = () => {
  loadLogo();
};
