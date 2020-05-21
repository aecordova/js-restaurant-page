import sections from './js/pageSections';
import './css/general.css';

const content = sections().contentBox;
const section = sections().sectionBox;
const {
  cover, header, about, menu, contact,
} = sections();

const hide = (...elements) => {
  elements.forEach((e) => {
    if (!e.classList.contains('hidden')) {
      e.classList.add('vis-hidden');
      e.addEventListener('transitionend', () => {
        e.classList.add('hidden');
      });
    }
  });
};

const show = (...elements) => {
  elements.forEach((e) => {
    if (e.classList.contains('hidden')) {
      setTimeout(() => {
        e.classList.remove('hidden');
        e.classList.remove('vis-hidden');
      }, 300);
    }
  });
};


const toggleSection = (sectionToDisplay) => {
  switch (sectionToDisplay) {
    case 'menu':
      hide(cover, about, contact);
      show(menu);
      break;
    case 'about':
      hide(cover, menu, contact);
      show(about);
      break;
    case 'contact':
      hide(cover, about, menu);
      show(contact);
      break;
    default:
      hide(contact, about, menu);
      show(cover);
      break;
  }
};


document.body.appendChild(header);
document.body.appendChild(content);
content.appendChild(section);
section.appendChild(cover);
section.appendChild(about);
section.appendChild(menu);
section.appendChild(contact);

document.querySelectorAll('.nav-menu-item').forEach((navItem) => {
  const sectionToDisplay = navItem.dataset.section;
  navItem.addEventListener('click', () => {
    toggleSection(sectionToDisplay);
  });
});