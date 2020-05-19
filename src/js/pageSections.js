import content from './pageContent';
import Header from './header';

const Section = (titleContent, bodyContent, type = 'div') => {
  const container = document.createElement('div');
  const title = document.createElement('h1');
  const body = document.createElement(type);

  title.innerHTML = titleContent;
  body.innerHTML = bodyContent;

  title.classList.add('section-title');
  body.classList.add('section-body');

  container.appendChild(title);
  container.appendChild(body);

  return container;
};

const Menu = (menuItems) => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  Object.keys(menuItems).forEach(category => {
    const menuCatBox = document.createElement('div');
    const catHeader = document.createElement('h3');
    catHeader.classList.add('menu-category');
    catHeader.innerHTML = category;
    menuCatBox.appendChild(catHeader);
    menuItems[category]
      .map(item => {
        const name = document.createElement('span');
        const price = document.createElement('span');
        const desc = document.createElement('p');
        const top = document.createElement('div');
        const menuItemBox = document.createElement('div');

        menuItemBox.classList.add('menu-item');
        name.classList.add('menu-item-name');
        price.classList.add('menu-item-price');
        desc.classList.add('menu-item-desc');

        name.innerHTML = item.name;
        price.innerHTML = item.price;
        desc.innerHTML = item.desc;

        top.appendChild(name);
        top.appendChild(price);
        menuItemBox.appendChild(top);
        menuItemBox.appendChild(desc);

        return menuItemBox;
      })
      .forEach(item => menuCatBox.appendChild(item));
    menu.appendChild(menuCatBox);
  });

  return menu;
};

const ContentBox = () => {
  const cbox = Document.createElement('div');
  cbox.id = 'content';
  return cbox;
};

export default function PageSections() {
  const contentBox = ContentBox();
  const about = Section(content.sections.about.title, content.sections.about.body, 'p');
  const menu = Section(content.sections.menu.title, Menu(content.sections.menu.menuItems));
  const contact = Section(content.sections.contact.title, '');
  const header = Header(
    content.header.brandLogo,
    content.header.brandName,
    content.header.menuOptions,
  );

  return {
    header, about, menu, contact, contentBox,
  };
}
