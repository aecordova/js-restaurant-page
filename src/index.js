import sections from './js/pageSections';
import './css/general.css';

const content = sections().contentBox;
const section = sections().sectionBox;
const {
  header, about, menu, contact,
} = sections();

document.body.appendChild(header);
document.body.appendChild(content);
content.appendChild(section);
section.appendChild(about);
section.appendChild(menu);
section.appendChild(contact);

document.querySelectorAll('.nav-menu-item').forEach((navItem) => {
  const sectionToDisplay = navItem.dataset.section;
  navItem.addEventListener('click', () => {
    toggleSection(sectionToDisplay);
  });
});

const toggleSection = (sectionToDisplay) => {
  switch (sectionToDisplay) {
    case 'menu':
      hide(about, contact);
      show(menu);
      break;
    case 'about':
      hide(menu, contact);
      show(about);
      break;
    case 'contact':
      hide(about, menu);
      show(contact);
      break;
    default:
      hide(about, menu);
      show(contact);
      break;
  }
};

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

