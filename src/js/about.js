import Section from './section.js';


export default function About(titleText, bodyText) {
  const title = document.createElement('h1');
  const body = document.createElement('p');
  const container = document.createElement('div');

  title.innerHTML = titleText;
  body.innerHTML = bodyText;
  title.classList.add('about-title');
  body.classList.add('about-body');

  container.appendChild(title);
  container.appendChild(body);

  return container;
}
