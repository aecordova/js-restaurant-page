export default function Section(titleText, bodyText) {
  const title = document.createElement('h1');
  const body = document.createElement('p');
  const container = document.createElement('div');

  title.innerHTML = titleText;
  body.innerHTML = bodyText;

  container.appendChild(title);
  container.appendChild(body);

  return container;
}
