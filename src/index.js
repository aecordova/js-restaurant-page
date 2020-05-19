import sections from './js/pageSections';
import './css/general.css';


const content = sections().contentBox;
const section = sections().sectionBox;

document.body.appendChild(sections().header);
document.body.appendChild(content);
content.appendChild(section);

// content.appendChild(section);