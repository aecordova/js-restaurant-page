import cont from './pageContent';

const Section = (titleContent, bodyContent, type = 'div') => {
  const title = document.createElement('h1');
  const container = document.createElement('div');
  let body;

  title.innerHTML = titleContent;

  if (typeof bodyContent === 'object') {
    body = bodyContent;
  } else {
    body = document.createElement(type);
    body.innerHTML = bodyContent;
  }

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
    const catHeader = document.createElement('h3');
    catHeader.classList.add('menu-category');
    catHeader.innerHTML = category;
    menu.appendChild(catHeader);
    menuItems[category]
      .map(item => {
        const name = document.createElement('span');
        const price = document.createElement('span');
        const desc = document.createElement('p');
        const top = document.createElement('div');
        const menuItemBox = document.createElement('div');

        menuItemBox.classList.add('menu-item');
        top.classList.add('menu-item-top');
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
      .forEach(item => menu.appendChild(item));
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

const ContactForm = () => {
  const cForm = document.createElement('form');
  const name = document.createElement('input');
  const nameLbl = document.createElement('label');
  const email = document.createElement('input');
  const emailLbl = document.createElement('label');
  const comments = document.createElement('textarea');
  const commentsLbl = document.createElement('label');
  const submit = document.createElement('input');

  const inputGrp = (...elements) => {
    const iGrp = document.createElement('div');
    iGrp.classList.add('input-group');
    elements.forEach(e => iGrp.appendChild(e));
    return iGrp;
  };

  name.type = 'text';
  email.type = 'email';
  submit.type = 'submit';

  name.id = 'name-input';
  email.id = 'email-input';
  comments.id = 'comments-input';

  nameLbl.htmlFor = name.id;
  emailLbl.htmlFor = email.id;
  commentsLbl.htmlFor = comments.id;

  nameLbl.innerHTML = 'Name:';
  emailLbl.innerHTML = 'Email:';
  commentsLbl.innerHTML = 'Comments:';

  cForm.appendChild(inputGrp(nameLbl, name));
  cForm.appendChild(inputGrp(emailLbl, email));
  cForm.appendChild(inputGrp(commentsLbl, comments));
  cForm.appendChild(submit);

  return cForm;
};

export default function PageSections() {
  const contentBox = ContentBox();
  const sectionBox = SectionBox();
  const about = Section(cont.sections.about.title, cont.sections.about.body); //
  const menu = Section(cont.sections.menu.title, Menu(cont.sections.menu.menuItems));
  const contact = Section(cont.sections.contact.title, (() => {
    const contactInfo = document.createElement('div');
    contactInfo.innerHTML = 'This is the message I want to display in contact info';
    const container = document.createElement('div');
    container.classList.add('contact');
    container.appendChild(contactInfo);
    container.appendChild(ContactForm());
    return container; 
  })());
  const header = Header(cont.header.brandLogo, cont.header.brandName, cont.header.menuOptions);
  return {
    header, about, menu, contact, contentBox, sectionBox,
  };
}
