export default function createHeader() {
  const header = document.createElement('header');
  const navbar = document.createElement('nav');
  const logo = document.createElement('div');
  const navMenu = document.createElement('ul');
  const logoImg = new Image(50, 50);

  logo.appendChild(logoImg);
  navbar.appendChild(logo);
  navbar.appendChild(navMenu);
  header.appendChild(navbar);

  console.log('Imported successfully');
  return header;
}
