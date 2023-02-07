import './styles.css';
import Logo from './images/logo.png';

const loadLogo = () => {
  const logo = document.getElementById('logo');
  logo.src = Logo;
  logo.alt = 'logo';
};

window.onload = () => {
  loadLogo();
};
