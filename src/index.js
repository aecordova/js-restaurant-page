import Header from './js/header';
import About from './js/about';
import logo from './img/logo.png';
import backGnd from './img/main-back.jpg'
// import './css/general.css';

const content = document.getElementById('content');
content.style.backgroundImage=`url(${backGnd})`;

const header = Header(logo, 'Delizia Restaurant', { About: '#', Menu: '#', Contact: '#' });
// const about = About();
// const menu = Menu();
// const contact = Contact();

document.body.insertBefore(header, document.body.firstChild);
// content.appendChild(about);