import cont from './pageContent';

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

  container.classList.add('hidden');

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
  const cbox = document.createElement('div');
  cbox.id = 'content';
  return cbox;
};

const SectionBox = () => {
  const sBox = document.createElement('div');
  sBox.classList.add('section-box');
  return sBox;
};

const Header = (logoImg, name, menuLinks) => {
  const header = document.createElement('header');
  const brandBox = document.createElement('a');
  brandBox.href='#';
  const brandLogo = new Image();
  const brandName = document.createElement('h1');
  const navBar = document.createElement('nav');

  Object.keys(menuLinks).forEach(item => {
    const menuItem = document.createElement('a');
    menuItem.innerHTML = item.toString();
    menuItem.classList.add('nav-menu-item');
    menuItem.href = menuLinks[item];
    menuItem.dataset.section = item.toString().toLowerCase();
    
    navBar.appendChild(menuItem);
  });

  brandBox.classList.add('brand-box','nav-menu-item');
  brandName.classList.add('brand-name');
  brandLogo.classList.add('brand-logo');
  navBar.classList.add('nav');

  brandName.innerHTML = name;
  brandLogo.src = logoImg;


  brandBox.appendChild(brandLogo);
  brandBox.appendChild(brandName);
  header.appendChild(brandBox);
  header.appendChild(navBar);

  return header;
};

export default function PageSections() {
  const contentBox = ContentBox();
  const sectionBox = SectionBox();
  const about = Section(cont.sections.about.title,''); //cont.sections.about.body
  const menu = Section(cont.sections.menu.title, ''); //Menu(cont.sections.menu.menuItems)
  const contact = Section(cont.sections.contact.title, '');
  const header = Header(cont.header.brandLogo, cont.header.brandName, cont.header.menuOptions);
  return {
    header, about, menu, contact, contentBox, sectionBox,
  };
}
