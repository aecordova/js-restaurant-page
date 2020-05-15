import createHeader from './header.js';
import logo from './img/logo.png';


document.body.insertBefore(createHeader(logo), document.body.firstChild);
console.log('source',logo.path);


