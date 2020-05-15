import createHeader from './js/header.js';
import logo from './img/logo.png';
import './css/style.css';

const header = createHeader(logo, 'Delizia Restaurant', { Bookings: '#', Contact: '#', About: '#' });

document.body.insertBefore(header, document.body.firstChild);
