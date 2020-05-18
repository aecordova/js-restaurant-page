import Header from './js/header';
import About from './js/about';
import logo from './img/logo.png';
import './css/general.css';

const content = document.createElement('div');
content.id = 'content';
const sectionBox = document.createElement('div');
sectionBox.classList.add('section-box');
content.appendChild(sectionBox);

const header = Header(logo, 'Delicious', { About: '#', Menu: '#', Contact: '#' });
const about = About('About Us','Accusantium corporis aperiam architecto inventore. Repudiandae error et quis dolorem debitis repellendus fugit aspernatur. Blanditiis sunt et et eum provident voluptatem odio eos. Voluptatem doloribus rerum nostrum sequi qui at illum. Dolorem dolor vitae in fugit sequi possimus.Iusto assumenda cum dignissimos perferendis corporis velit sit fugit. Temporibus assumenda ab ut rerum possimus voluptates est. Ut et eligendi labore magnam culpa expedita odit hic. Labore aut ipsum ex ut voluptas et. Officiis nesciunt eligendi quo odit voluptatum animi corporis aut.Et in aut ipsum dicta officia harum. Sit et sed nesciunt magni. Distinctio laborum voluptates eius accusantium. Nulla qui ab magni. Voluptas qui sit doloremque voluptas repellendus labore voluptates.');

sectionBox.appendChild(about);

// const menu = Menu();
// const contact = Contact();
document.body.insertBefore(header, document.body.firstChild);
document.body.appendChild(content);

