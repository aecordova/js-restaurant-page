!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=13)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var a=(r=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var r,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){var i=t(2),a=t(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};i(a,o);e.exports=a.locals||{}},function(e,n,t){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function c(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},i=[],a=0;a<e.length;a++){var o=e[a],s=n.base?o[0]+n.base:o[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=c(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:l,updater:b(p,n),references:1}),i.push(l)}return i}function d(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=t.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(n,a);else{var o=document.createTextNode(a),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function m(e,n,t){var i=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,h=0;function b(e,n){var t,i,a;if(n.singleton){var o=h++;t=f||(f=d(n)),i=p.bind(null,t,o,!1),a=p.bind(null,t,o,!0)}else t=d(n),i=m.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var a=c(t[i]);r[a].references--}for(var o=s(e,n),d=0;d<t.length;d++){var l=c(t[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}t=o}}}},function(e,n,t){var i=t(0),a=t(4),o=t(5),r=t(6),c=t(7),s=t(8),d=t(9),l=t(10),u=t(11),p=t(12);(n=i(!1)).i(a),n.i(o),n.i(r),n.i(c),n.i(s);var m=d(l),f=d(u),h=d(p);n.push([e.i,"@font-face {\n\tfont-family: 'Clicker';\n\tsrc: url("+m+") format(\"truetype\");\n}\n\n@font-face {\n\tfont-family: 'Garamond';\n\tsrc: url("+f+") format(\"truetype\");\n}\n\nbody, html{\n  height: 100%;\n  width: 100%;\n  margin: 0  !important;\n  color: #fff;\n}\n\nbody{\n  display: grid;\n  grid-template-rows: 110px;\n  background-color: black ;\n  font-family: 'Garamond';\n  background: url("+h+") 0 0px / cover no-repeat fixed;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n#content{\n  grid-column: 1 / -1;\n  padding: 10px;\n}\n\n.section-box{\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  border-radius: 25px;\n  margin: 0 auto;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .7);\n}\n\n.section-body {\n  line-height: 1em;\n  font-size: 1em;\n  text-align: justify;\n  width: 90%;\n  margin: 0 auto;\n  padding-bottom: 25px;\n}\n\nh1{\n  padding-top: 20px;\n  font-size: 2.5rem;\n  text-align: center;\n  margin: 0;\n  font-family: 'Clicker', cursive;\n}\n\n.vis-hidden{\n  opacity: 0;\n  transition: opacity .2s ease;\n}\n\n.hidden{\n  display: none;\n}\n\n.visible{\n  opacity: 1 !important;\n  transition: opacity .2s ease;\n}\n\n",""]),e.exports=n},function(e,n,t){(n=t(0)(!1)).push([e.i,"\n\n.section-title{\n  /* padding-bottom: 35px; */\n}",""]),e.exports=n},function(e,n,t){(n=t(0)(!1)).push([e.i,'header {\n  grid-column: 1 / -1;\n  display: grid;\n  background-color: rgba(0, 0, 0, 0.9);\n  margin-top: 10px;\n}\n\n.brand-box {\n  grid-column: 1 / -1;\n  width: fit-content;\n  height: fit-content;\n  display: flex;\n  margin: 0 auto;\n  align-items: center;\n  padding: 5px 5px 5px 5px;\n}\n\n.brand-name {\n  padding: 0;\n  line-height: 50px;\n  font-size: 2rem;\n  text-align: center;\n  margin: 0;\n  font-family: "Clicker", cursive;\n}\n\n.brand-logo {\n  height: 2.5rem;\n  /* padding: 0 5px; */\n}\n\n.nav {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0;\n  width: 100%;\n  /* display: none; */\n}\n\nnav .nav-menu-item {\n  border-radius: 5%;\n  text-align: center;\n  width: 100%;\n  padding: 5px;\n}\n\nnav .nav-menu-item:hover{\n  -webkit-box-shadow: inset 0px 0px 27px 13px rgba(5,5,5,1);\n  -moz-box-shadow: inset 0px 0px 27px 13px rgba(5,5,5,1);\n  box-shadow: inset 0px 0px 27px 13px rgba(5,5,5,1);\n  background-color: rgba(255, 255, 255, .5);\n}\n',""]),e.exports=n},function(e,n,t){(n=t(0)(!1)).push([e.i,".menu {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 15px;\n}\n\n.menu-item-desc{\n  font-size: 1rem;\n  margin-bottom: 0;\n  line-height: 1.2rem;\n  margin-top: .5rem;\n}\n\n.menu-item-top{\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  font-weight: 700;\n  justify-content: space-between;\n}\n\n.menu-item-price::before{\n  content: '$ ';\n  font-size: smaller;\n}\n\n.menu-category{\n  grid-column: 1 / -1;\n  font-size: 1.2rem;\n  margin: 0;\n}",""]),e.exports=n},function(e,n,t){(n=t(0)(!1)).push([e.i,".contact {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-column-gap: 20px;\n}\n\nform {\n  display: flex;\n  padding: 15px;\n  flex-flow: column;\n  background-color: rgba(0, 0, 0, .5);\n  border-radius: 25px;\n}\n\nform >:nth-child(3){\n  flex-direction: column;\n}\n\ntextarea {\n  border-radius: 5px;\n  height: 12em;\n  background-color: rgba(0, 0, 0, .5);\n  font-family: Arial, Helvetica, sans-serif;\n  color: #fff;\n  border: none;\n  text-indent: 5px;\n}\n\n.input-group{\n  margin-top: 15px;\n  display: flex;\n  font-size: smaller;\n}\n\ninput[type = 'text'],\ninput[type = 'email'] {\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #fff;\n  color: #fff;\n  font-size: smaller;\n}\n\ninput[type = 'email']:focus,\ninput[type = 'text']:focus,\ntextarea:focus {\n  outline: none;\n}\n\ninput[type = 'submit'] {\n  border-radius: 20px;\n  outline: none;\n  border: none;\n  width: 50%;\n  margin-top: 10px;\n  height: 2em;\n  align-self: flex-end;\n}\n\ninput[type = 'submit']:hover {\n  background-color: #fff;\n  cursor: pointer;\n}\n\n\nlabel{\n  padding-right: 10px;\n  padding-bottom: 5px;\n}\n\n/* .hear{\n  text-align: right;\n} */\n",""]),e.exports=n},function(e,n,t){(n=t(0)(!1)).push([e.i,"\n.cover{\n  display: grid;\n}\n\n.cover-brand-name{\n  font-size: 3em;\n  padding: 0;\n}\n\n.cover-brand-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 25px;\n}\n\n.cover-welcome{\n  text-align: center;\n  margin: .5em;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"e42f5f3be88f23ac82642363ae03ac56.ttf"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"4189ad4d32e9042e6407aaf180558f08.ttf"},function(e,n,t){"use strict";t.r(n),n.default=t.p+"fe2198915f8ee5229be26c5f6bb101af.jpg"},function(e,n,t){"use strict";t.r(n);var i={header:{brandLogo:t.p+"f2bd33056becc45512c8f64ab353d2f8.png",brandName:"Delicious",menuOptions:{About:"#",Menu:"#",Contact:"#"},welcome:"Love Food?... <br>This is the Right place!"},sections:{about:{title:"About Us",body:"Accusantium corporis aperiam architecto inventore. Repudiandae error et quis dolorem debitis repellendus fugit aspernatur. Blanditiis sunt et et eum provident voluptatem odio eos. Voluptatem doloribus rerum nostrum sequi qui at illum. Dolorem dolor vitae in fugit sequi possimus.Iusto assumenda cum dignissimos perferendis corporis velit sit fugit. Temporibus assumenda ab ut rerum possimus voluptates est. Ut et eligendi labore magnam culpa expedita odit hic. Labore aut ipsum ex ut voluptas et. Officiis nesciunt eligendi quo odit voluptatum animi corporis aut.Et in aut ipsum dicta officia harum. Sit et sed nesciunt magni. Distinctio laborum voluptates eius accusantium. Nulla qui ab magni. Voluptas qui sit doloremque voluptas repellendus labore voluptates."},menu:{title:"Our Menu",menuItems:{Salads:[{name:"Siam",price:8.95,desc:"vegan. mixt greens, green papaya, jicama, mango, cucumber, red pepper, fresh herbs, spicy peanuts, thai lemongrass vinaigrette."},{name:"Hatch",price:11.95,desc:"romaine hearts, grilled chicken, roasted red peppers, black beans, sharp cheddar, red onion, point reyes blue cheese dressing with a chipotle honey drizzle"},{name:"Maui",price:5.95,desc:"mixt arugula, grilled flat iron steak, blue cheese, herb roasted potatoes, cherry tomatoes, balsamic vinaigrette, topped with caramelized onions."},{name:"Bachelor",price:7.95,desc:"romaine hearts, white anchovies, shaved parmesan, garlic croutons, caesar dressing."}]}},contact:{title:"Contact Us!",phone:"555-555-5555",email:"contact@deliciousrestaurant.com",twitter:"@delicious-restaurant",facebook:"facebook.com/delicious_restautant",body:"<h2 class='opinion'>Your opinion is very important to us!</h2> If you have any question or concern, please give us a call, send us an email, visit our social media or leave us a message in this form!<h2 class ='hear'>We want to hear from you!</h2>"}}};const a=(e,n,t="div")=>{const i=document.createElement("h1"),a=document.createElement("div");let o;return i.innerHTML=e,"object"==typeof n?o=n:(o=document.createElement(t),o.innerHTML=n),i.classList.add("section-title"),o.classList.add("section-body"),a.appendChild(i),a.appendChild(o),a.classList.add("hidden"),a};function o(){const e=(()=>{const e=document.createElement("div");return e.id="content",e})(),n=(()=>{const e=document.createElement("div");return e.classList.add("section-box"),e})(),t=((e,n,t)=>{const i=document.createElement("div"),a=new Image,o=document.createElement("h1"),r=document.createElement("div"),c=document.createElement("h2");return a.src=e,o.innerHTML=n,c.innerHTML=t,a.classList.add("cover-brand-logo"),o.classList.add("cover-brand-name"),r.classList.add("cover-brand-box"),c.classList.add("cover-welcome"),i.classList.add("cover"),r.appendChild(a),r.appendChild(o),i.appendChild(r),i.appendChild(c),i})(i.header.brandLogo,i.header.brandName,i.header.welcome),o=a(i.sections.about.title,i.sections.about.body),r=a(i.sections.menu.title,(e=>{const n=document.createElement("div");return n.classList.add("menu"),Object.keys(e).forEach(t=>{const i=document.createElement("h3");i.classList.add("menu-category"),i.innerHTML=t,n.appendChild(i),e[t].map(e=>{const n=document.createElement("span"),t=document.createElement("span"),i=document.createElement("p"),a=document.createElement("div"),o=document.createElement("div");return o.classList.add("menu-item"),a.classList.add("menu-item-top"),n.classList.add("menu-item-name"),t.classList.add("menu-item-price"),i.classList.add("menu-item-desc"),n.innerHTML=e.name,t.innerHTML=e.price,i.innerHTML=e.desc,a.appendChild(n),a.appendChild(t),o.appendChild(a),o.appendChild(i),o}).forEach(e=>n.appendChild(e))}),n})(i.sections.menu.menuItems)),c=a(i.sections.contact.title,(()=>{const e=document.createElement("div");e.innerHTML=i.sections.contact.body;const n=document.createElement("div");return n.classList.add("contact"),n.appendChild(e),n.appendChild((()=>{const e=document.createElement("form"),n=document.createElement("input"),t=document.createElement("label"),i=document.createElement("input"),a=document.createElement("label"),o=document.createElement("textarea"),r=document.createElement("label"),c=document.createElement("input"),s=(...e)=>{const n=document.createElement("div");return n.classList.add("input-group"),e.forEach(e=>n.appendChild(e)),n};return n.type="text",i.type="email",c.type="submit",n.id="name-input",i.id="email-input",o.id="comments-input",c.value="Send",t.htmlFor=n.id,a.htmlFor=i.id,r.htmlFor=o.id,t.innerHTML="Name:",a.innerHTML="Email:",r.innerHTML="Comments:",e.appendChild(s(t,n)),e.appendChild(s(a,i)),e.appendChild(s(r,o)),e.appendChild(c),e})()),n})());return{cover:t,header:((e,n,t)=>{const i=document.createElement("header"),a=document.createElement("a");a.href="#";const o=new Image,r=document.createElement("h1"),c=document.createElement("nav");return Object.keys(t).forEach(e=>{const n=document.createElement("a");n.innerHTML=e.toString(),n.classList.add("nav-menu-item"),n.href=t[e],n.dataset.section=e.toString().toLowerCase(),c.appendChild(n)}),a.classList.add("brand-box","nav-menu-item","hidden"),r.classList.add("brand-name"),o.classList.add("brand-logo"),c.classList.add("nav"),r.innerHTML=n,o.src=e,a.appendChild(o),a.appendChild(r),i.appendChild(a),i.appendChild(c),i})(i.header.brandLogo,i.header.brandName,i.header.menuOptions),about:o,menu:r,contact:c,contentBox:e,sectionBox:n}}t(1);const r=o().contentBox,c=o().sectionBox,{cover:s,header:d,about:l,menu:u,contact:p}=o(),m=(...e)=>{e.forEach(e=>{e.classList.contains("hidden")||(e.classList.add("vis-hidden"),e.addEventListener("transitionend",()=>{e.classList.add("hidden")}))})},f=(...e)=>{e.forEach(e=>{e.classList.contains("hidden")&&setTimeout(()=>{e.classList.remove("hidden"),e.classList.remove("vis-hidden")},300)})};document.body.appendChild(d),document.body.appendChild(r),r.appendChild(c),c.appendChild(s),c.appendChild(l),c.appendChild(u),c.appendChild(p);const h=document.querySelector(".brand-box");document.querySelectorAll(".nav-menu-item").forEach(e=>{const n=e.dataset.section;e.addEventListener("click",()=>{(e=>{switch(e){case"menu":m(s,l,p),f(u,h);break;case"about":m(s,u,p),f(l,h);break;case"contact":m(s,l,u),f(p,h);break;default:m(p,l,u,h),f(s)}})(n)})})}]);