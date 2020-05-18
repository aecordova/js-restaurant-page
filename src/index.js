import Header from './js/header';
import About from './js/about';
import logo from './img/logo.png';
import backGnd from './img/main-back.jpg';
import './css/general.css';

const content = document.createElement('div');
content.id = 'content';
const sectionBox = document.createElement('div');
sectionBox.classList.add('section-box');
content.appendChild(sectionBox);
content.style.backgroundImage = `url(${backGnd})`;

const header = Header(logo, 'Delicious', { About: '#', Menu: '#', Contact: '#' });
const about = About();
sectionBox.appendChild(about);
// const menu = Menu();
// const contact = Contact();
document.body.appendChild(content);
document.body.insertBefore(header, document.body.firstChild);
