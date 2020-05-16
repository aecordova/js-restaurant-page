import '../css/header.css';

export default function Header(logoImg, name, menuLinks) {
  const header = document.createElement('header');
  const brandBox = document.createElement('div');
  const brandLogo = new Image();
  const brandName = document.createElement('span');
  const navBar = document.createElement('nav');
  const navMenu = document.createElement('ul');

  Object.keys(menuLinks).forEach(item => {
    const menuItem = document.createElement('a');
    const caption = document.createElement('li');
    caption.innerHTML = item.toString();
    menuItem.classList.add('menu-item');
    menuItem.href = menuLinks[item];
    menuItem.appendChild(caption);
    navMenu.appendChild(menuItem);
  });

  brandBox.classList.add('brand-box');
  brandName.classList.add('brand-name');
  brandLogo.classList.add('brand-logo');
  navBar.classList.add('nav-bar');
  navMenu.classList.add('nav-menu');

  brandName.innerHTML = name;
  brandLogo.src = logoImg;


  brandBox.appendChild(brandLogo);
  brandBox.appendChild(brandName);
  navBar.appendChild(navMenu);
  header.appendChild(brandBox);
  header.appendChild(navBar);

  return header;
}
