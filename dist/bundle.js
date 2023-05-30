(()=>{"use strict";var n={947:(n,e,t)=>{t.d(e,{Z:()=>x});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(11),t.b),d=new URL(t(254),t.b),p=new URL(t(975),t.b),u=new URL(t(713),t.b),f=a()(r()),g=s()(l),m=s()(d),h=s()(p),b=s()(u);f.push([n.id,"@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url("+g+"); /* For IE6-8 */\n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url("+m+") format('woff2'),\n       url("+h+") format('woff'),\n       url("+b+") format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n",""]);const x=f},937:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"\n/* left content styles */\n.content > .left {\n  flex: 1;\n  background-color: rgb(238, 238, 238);\n  min-width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 20px;\n  padding: 20px;\n  padding-top: 40px;\n  padding-right: 25px;\n  overflow-y: auto;\n  color: var(--sidebar-font-color)\n}\n\n.content .left.collapsed {\n   flex: 0;\n   display: none;\n   min-width: 0;\n}\n\n.view-container {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.view {\n  padding: 5px;\n  padding-right: 0;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  width: 100%;\n}\n\n.view.selected {\n  background-color: rgb(225, 225, 225);\n}\n\n.view:hover {\n  background-color: rgb(225, 225, 225);\n  cursor: pointer;\n}\n\n.today {\n  color: #3277dd;\n}\n\n.upcoming {\n  color: #d0645a;\n}\n\n.completed {\n  color: #4b9244;\n}",""]);const c=a},282:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"\n/* right content styles */\n.content > .right {\n  flex: 6;\n  height: 100%;\n  padding: 30px min(25%, 400px);\n  background-color: var(--offwhite);\n  display: flex;\n  justify-content: center;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  width: 100%;\n  min-width: 700px;\n}\n\n.today-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n\n.todays-date {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n\n.today-header h1 {\n  font-size: 1.7rem;\n  margin: 0;\n  padding: 0;\n}\n\n.todays-date > span {\n  font-size: 1rem;\n  color: rgb(115, 115, 115);\n}\n\n.add-task {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  padding-left: 3px;\n  border-radius: 5px;\n  cursor: pointer;\n  color: var(--sidebar-font-color)\n}\n\n.add-task:hover {\n  color: var(--offwhite);\n  background-color: var(--theme-color);\n}\n\n",""]);const c=a},756:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(947),s=t(937),l=t(282),d=t(145),p=t(342),u=t(898),f=a()(r());f.i(c.Z),f.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Outfit&display=swap);"]),f.i(s.Z),f.i(l.Z),f.i(d.Z),f.i(p.Z),f.i(u.Z),f.push([n.id,"html, body {\n  font-family: 'Outfit', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  --offwhite: rgb(242, 242, 242);\n  --sidebar-font-color: rgb(43, 43, 43);\n  --theme-color: #de483a;\n  overflow: hidden;\n}\n\n.content {\n  display: flex;\n  position: relative;\n  height: calc(100% - 50px);\n  width: 100%;\n}\n\n.footer {\n  position: absolute;\n  text-align: center;\n  font-size: 1.2rem;\n  color: rgb(154, 154, 154);\n  right: 0;\n  left: 0;\n  bottom: 20px;\n}",""]);const g=f},145:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"/* navbar styles */\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 20px;\n  height: 40px;\n  background-color: #de483a;\n}\n\nnav .left {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 15px;\n}\n\nnav .right {\n  display: flex;\n  align-items: center;\n  color: var(--offwhite);\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n/* searchbar styles */\n\n.search-bar {\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.399);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3px;\n  width: max(50%, 260px);\n  height: 18px;\n  padding: 5px;\n}\n\n.search-bar input {\n  background-color: rgba(0, 0, 0, 0);\n  color: rgb(255, 255, 255);\n  width: 200px;\n  font-size: 1.2rem;\n  border: none;\n}\n\n.search-bar input::placeholder {\n  background-color: rgba(0, 0, 0, 0);\n  color: rgb(255, 255, 255);\n  width: 200px;\n  font-size: 1.2rem;\n  border: none;\n}\n\n.search-bar input:focus {\n  border: none;\n  outline: none;\n}\n\n/* icon styles */\n\n.navbar-icons {\n  color: var(--offwhite);\n  font-size: 1.7rem;\n  cursor: pointer;\n}\n\n.icon-container {\n  padding: 2px;\n  border-radius: 5px;\n}\n\n.icon-container:hover {\n  background-color: rgba(255, 255, 255, 0.243);\n}\n\n.searchbar-icon {\n  color: rgb(236, 236, 236);\n  cursor: pointer;\n}\n\n.project-icons {\n  color: var(--sidebar-font-color);\n}",""]);const c=a},898:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"/* projects styles */\n.project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\n.project-header:hover {\n  background-color: rgb(225, 225, 225);\n  cursor: pointer;\n}\n\n.project-header:active {\n  background-color: rgb(230, 230, 230);\n}\n\n.project-header h1 {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n}\n\n\n.project-icons {\n  color: rgb(177, 177, 177);\n}\n\n/* project styles */\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  background-color: rgb(232, 232, 232);\n  padding: 8px 5px;\n  border-radius: 5px;\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.color-identifier {\n  width: 8px;\n  height: 8px;\n  border-radius: 100%;\n  background-color: red;\n}\n\n.color-identifier2 {\n  width: 8px;\n  height: 8px;\n  border-radius: 100%;\n  background-color: rgb(18, 172, 224);\n}\n\n/* project form styles */\n.project-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 10px;\n  background-color: #de483a;\n  border-radius: 5px;\n\n}\n\n.project-form section {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  gap: 10px 5px;\n}\n\n.project-form label {\n  color: var(--offwhite);\n}\n\n.project-form input {\n  border: none;\n  outline: none;\n  border-radius: 3px;\n  width: 90%;\n}\n\n.project-form-submit {\n  display: flex;\n  align-items: center;\n  border: none;\n  width: 56%;\n  background-color: rgba(255, 255, 255, 0);\n  color: var(--offwhite);\n  border-radius: 5px;\n  padding: 5px;\n  padding-left: 3px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.project-form-submit:hover {\n  color: var(--theme-color);\n  background-color: var(--offwhite);\n}\n\n.project-form-submit span {\n}",""]);const c=a},342:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"/* task-styles */\n.task-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 10px;\n  border-bottom: 1px solid rgb(200, 200, 200);\n  padding-bottom: 30px;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(236, 236, 236);\n  padding: 8px;\n  border-radius: 5px;\n}\n\n.task > .left {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.task-name {\n  font-size: 1.3rem;\n  color: var(--sidebar-font-color)\n}\n\n.checked {\n  cursor: pointer;\n  border-radius: 100%;\n}\n\n.checked:hover {\n  background-color: rgb(218, 218, 218);\n}\n\n.task > .right {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  color: rgb(117, 117, 117);\n}\n\n.project-indicator {\n  color: red;\n  cursor: pointer;\n}\n\n.project-indicator2 {\n  color: rgb(18, 172, 224);\n  cursor: pointer;\n}\n\n.task-buttons:hover {\n  cursor: pointer;\n  color: rgb(162, 162, 162);\n}",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},11:(n,e,t)=>{n.exports=t.p+"4674f8ded773cb03e824.eot"},713:(n,e,t)=>{n.exports=t.p+"5e7382c63da0098d634a.ttf"},975:(n,e,t)=>{n.exports=t.p+"83bebaf37c09c7e1c3ee.woff"},254:(n,e,t)=>{n.exports=t.p+"cff684e59ffb052d72cb.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(756),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const m={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let h;const b=new Uint8Array(16);function x(){if(!h&&(h="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(b)}const y=[];for(let n=0;n<256;++n)y.push((n+256).toString(16).slice(1));const v=function(n,e,t){if(m.randomUUID&&!e&&!n)return m.randomUUID();const o=(n=n||{}).random||(n.rng||x)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){t=t||0;for(let n=0;n<16;++n)e[t+n]=o[n];return e}return function(n,e=0){return(y[n[e+0]]+y[n[e+1]]+y[n[e+2]]+y[n[e+3]]+"-"+y[n[e+4]]+y[n[e+5]]+"-"+y[n[e+6]]+y[n[e+7]]+"-"+y[n[e+8]]+y[n[e+9]]+"-"+y[n[e+10]]+y[n[e+11]]+y[n[e+12]]+y[n[e+13]]+y[n[e+14]]+y[n[e+15]]).toLowerCase()}(o)},w=function({element:n,className:e=null,id:t=null,textContent:o=null,parent:r=null}){const i=document.createElement(n);return e&&i.classList.add(e),t&&(i.id=t),o&&(i.textContent=o),r&&r.appendChild(i),i},j=new class{constructor(){this.tasks=[],this.projects=[]}addTask(n,e,t){const o=v(),r=new class{constructor(n,e,t,o){this.title=n,this.dueDate=e,this.project=t,this.id=o,this.completed=!1}}(n,e,t,o);this.tasks.push(r),0!==t&&this.projects.find((n=>n.id===t)).addTask(r)}addProject(n,e){const t=v(),o=new class{constructor(n,e,t){this.title=n,this.color=e,this.id=t,this.tasks=[]}addTask(n){this.tasks.push(n)}}(n,e,t);this.projects.push(o),function(n){const e=document.querySelector(".projects"),t=w({element:"div",className:"project",parent:e});t.dataset.id=n.id,w({element:"span",className:"color-identifier",parent:t}).style.backgroundColor=n.color,w({element:"span",className:"project-name",textContent:n.title,parent:t})}(o)}},k=new class{constructor(){this.projectForm=document.querySelector(".project-form")}init(){this.projectForm.addEventListener("submit",(n=>{n.preventDefault(),console.log("test form");const e=document.getElementById("projectTitle").value,t=document.getElementById("projectColor").value;j.projects.find((n=>n.title===e))?console.log("project name already exists"):j.addProject(e,t)}))}toggleForm(){this.projectForm.style.display="flex"===this.projectForm.style.display?"none":"flex"}};!function(){document.getElementById("collapse-icon").addEventListener("click",(()=>{document.querySelector(".content .left").classList.toggle("collapsed")})),document.getElementById("home-icon").addEventListener("click",(()=>{console.log("home")}));const n=document.getElementById("search-bar-form"),e=document.getElementById("search-bar");n.addEventListener("submit",(t=>{t.preventDefault();const o=e.value;console.log(`submitted ${o}`),n.reset()}))}(),document.getElementById("today").addEventListener("click",(()=>{console.log("today view")})),document.getElementById("upcoming").addEventListener("click",(()=>{console.log("upcoming view")})),document.getElementById("completed").addEventListener("click",(()=>{console.log("completed view")})),document.querySelector(".project-header").addEventListener("click",(()=>{k.toggleForm()})),k.init()})()})();