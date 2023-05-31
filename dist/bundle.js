(()=>{"use strict";var n={947:(n,e,t)=>{t.d(e,{Z:()=>x});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(11),t.b),d=new URL(t(254),t.b),p=new URL(t(975),t.b),u=new URL(t(713),t.b),f=i()(r()),m=c()(l),g=c()(d),h=c()(p),b=c()(u);f.push([n.id,"@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url("+m+"); /* For IE6-8 */\n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url("+g+") format('woff2'),\n       url("+h+") format('woff'),\n       url("+b+") format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n",""]);const x=f},937:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"\n/* left content styles */\n.content > .left {\n  flex: 1;\n  background-color: rgb(238, 238, 238);\n  min-width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 20px;\n  padding: 20px;\n  padding-top: 40px;\n  padding-right: 25px;\n  overflow-y: auto;\n  color: var(--sidebar-font-color)\n}\n\n.content .left.collapsed {\n   flex: 0;\n   display: none;\n   min-width: 0;\n}\n\n.view-container {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.view {\n  padding: 5px;\n  padding-right: 0;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  width: 100%;\n}\n\n.view.selected {\n  background-color: rgb(225, 225, 225);\n}\n\n.view:hover {\n  background-color: rgb(225, 225, 225);\n  cursor: pointer;\n}\n\n.today {\n  color: #3277dd;\n}\n\n.upcoming {\n  color: #d0645a;\n}\n\n.completed {\n  color: #4b9244;\n}",""]);const s=i},282:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"\n/* right content styles */\n.content > .right {\n  flex: 6;\n  height: 100%;\n  padding: 30px min(25%, 400px);\n  background-color: var(--offwhite);\n  display: flex;\n  justify-content: center;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  width: 100%;\n  min-width: 700px;\n}\n\n.today-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n\n.todays-date {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n\n.today-header h1 {\n  font-size: 1.7rem;\n  margin: 0;\n  padding: 0;\n}\n\n.todays-date > span {\n  font-size: 1rem;\n  color: rgb(115, 115, 115);\n}\n\n.add-task {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n  padding-left: 3px;\n  border-radius: 5px;\n  cursor: pointer;\n  color: var(--sidebar-font-color)\n}\n\n.add-task:hover {\n  color: var(--offwhite);\n  background-color: var(--theme-color);\n}\n\n",""]);const s=i},756:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(947),c=t(937),l=t(282),d=t(145),p=t(342),u=t(898),f=i()(r());f.i(s.Z),f.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Outfit&display=swap);"]),f.i(c.Z),f.i(l.Z),f.i(d.Z),f.i(p.Z),f.i(u.Z),f.push([n.id,"html, body {\n  font-family: 'Outfit', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  --offwhite: rgb(242, 242, 242);\n  --sidebar-font-color: rgb(43, 43, 43);\n  --theme-color: #de483a;\n  overflow: hidden;\n}\n\n.content {\n  display: flex;\n  position: relative;\n  height: calc(100% - 50px);\n  width: 100%;\n}\n\n.footer {\n  position: absolute;\n  text-align: center;\n  font-size: 1.2rem;\n  color: rgb(154, 154, 154);\n  right: 0;\n  left: 0;\n  bottom: 20px;\n}",""]);const m=f},145:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* navbar styles */\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 20px;\n  height: 40px;\n  background-color: #de483a;\n}\n\nnav .left {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 15px;\n}\n\nnav .right {\n  display: flex;\n  align-items: center;\n  color: var(--offwhite);\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n\n/* searchbar styles */\n\n.search-bar {\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.399);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3px;\n  width: max(50%, 260px);\n  height: 18px;\n  padding: 5px;\n}\n\n.search-bar input {\n  background-color: rgba(0, 0, 0, 0);\n  color: rgb(255, 255, 255);\n  width: 200px;\n  font-size: 1.2rem;\n  border: none;\n}\n\n.search-bar input::placeholder {\n  background-color: rgba(0, 0, 0, 0);\n  color: rgb(255, 255, 255);\n  width: 200px;\n  font-size: 1.2rem;\n  border: none;\n}\n\n.search-bar input:focus {\n  border: none;\n  outline: none;\n}\n\n/* icon styles */\n\n.navbar-icons {\n  color: var(--offwhite);\n  font-size: 1.7rem;\n  cursor: pointer;\n}\n\n.icon-container {\n  padding: 2px;\n  border-radius: 5px;\n}\n\n.icon-container:hover {\n  background-color: rgba(255, 255, 255, 0.243);\n}\n\n.searchbar-icon {\n  color: rgb(236, 236, 236);\n  cursor: pointer;\n}\n\n.project-icons {\n  color: var(--sidebar-font-color);\n}",""]);const s=i},898:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* projects styles */\n.project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n  padding-left: 8px;\n  border-radius: 5px;\n}\n\n.project-header:hover {\n  background-color: rgb(225, 225, 225);\n  cursor: pointer;\n}\n\n.project-header:active {\n  background-color: rgb(230, 230, 230);\n}\n\n.project-header h1 {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n}\n\n\n.project-icons {\n  color: rgb(177, 177, 177);\n}\n\n/* project styles */\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 8px 5px;\n  border-bottom: 1px solid rgb(200, 200, 200);\n}\n\n.project {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.color-identifier {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n\n/* project form styles */\n.project-form {\n  display: none;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n  background-color: #de483a;\n  border-radius: 5px;\n\n}\n\n.project-form section {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  gap: 10px 5px;\n}\n\n.project-form label {\n  color: var(--offwhite);\n}\n\n.project-form input {\n  border: none;\n  outline: none;\n  border-radius: 3px;\n  width: 90%;\n}\n.project-form-submit {\n  width: 20%;\n  align-self: center;\n  border: none;\n  background-color: rgba(255, 255, 255, 0);\n  color: var(--offwhite);\n  border-radius: 5px;\n  padding: 3px;\n  padding-bottom: 0;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.project-form-submit:hover {\n  color: var(--theme-color);\n  background-color: var(--offwhite);\n}\n\n.project-form-submit span {\n}",""]);const s=i},342:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* task-styles */\n.task-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 10px;\n  border-bottom: 1px solid rgb(200, 200, 200);\n  padding-bottom: 30px;\n}\n\n.task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(236, 236, 236);\n  padding: 8px;\n  border-radius: 5px;\n}\n\n.task > .left {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.task-name {\n  font-size: 1.3rem;\n  color: var(--sidebar-font-color)\n}\n\n.checked {\n  cursor: pointer;\n  border-radius: 100%;\n}\n\n.checked:hover {\n  background-color: rgb(218, 218, 218);\n}\n\n.task > .right {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  color: rgb(117, 117, 117);\n}\n\n.project-indicator {\n  color: red;\n  cursor: pointer;\n}\n\n.project-indicator2 {\n  color: rgb(18, 172, 224);\n  cursor: pointer;\n}\n\n.task-buttons:hover {\n  cursor: pointer;\n  color: rgb(162, 162, 162);\n}\n\n/* task form styles */\n\n.task-form {\n  display: none;\n  justify-content: space-between;\n  background-color: var(--theme-color);\n  padding: 20px 20px;\n  padding-left: 0;\n  border-radius: 5px;\n}\n\n.task-form section {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr 2fr;\n  text-align: right;\n  gap: 10px;\n}\n\n.task-form label {\n  color: var(--offwhite);\n}\n\n.task-form input, .task-form select {\n  border: none;\n  outline: none;\n  border-radius: 3px;\n}\n\n.task-form-submit {\n  width: 10%;\n  align-self: center;\n  border: none;\n  background-color: rgba(255, 255, 255, 0);\n  color: var(--offwhite);\n  border-radius: 5px;\n  padding: 3px;\n  padding-bottom: 1px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.task-form-submit:hover {\n  color: var(--theme-color);\n  background-color: var(--offwhite);\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},11:(n,e,t)=>{n.exports=t.p+"4674f8ded773cb03e824.eot"},713:(n,e,t)=>{n.exports=t.p+"5e7382c63da0098d634a.ttf"},975:(n,e,t)=>{n.exports=t.p+"83bebaf37c09c7e1c3ee.woff"},254:(n,e,t)=>{n.exports=t.p+"cff684e59ffb052d72cb.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(756),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let h;const b=new Uint8Array(16);function x(){if(!h&&(h="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(b)}const y=[];for(let n=0;n<256;++n)y.push((n+256).toString(16).slice(1));const v=function(n,e,t){if(g.randomUUID&&!e&&!n)return g.randomUUID();const o=(n=n||{}).random||(n.rng||x)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){t=t||0;for(let n=0;n<16;++n)e[t+n]=o[n];return e}return function(n,e=0){return(y[n[e+0]]+y[n[e+1]]+y[n[e+2]]+y[n[e+3]]+"-"+y[n[e+4]]+y[n[e+5]]+"-"+y[n[e+6]]+y[n[e+7]]+"-"+y[n[e+8]]+y[n[e+9]]+"-"+y[n[e+10]]+y[n[e+11]]+y[n[e+12]]+y[n[e+13]]+y[n[e+14]]+y[n[e+15]]).toLowerCase()}(o)};function k({element:n,className:e=null,id:t=null,textContent:o=null,parent:r=null}){const a=document.createElement(n);if(e)if(Array.isArray(e))for(let n=0;n<e.length;n+=1)a.classList.add(e[n]);else a.classList.add(e);return t&&(a.id=t),o&&(a.textContent=o),r&&r.appendChild(a),a}function j({className:n=null,textContent:e=null,parent:t=null}){if(n){if(!Array.isArray(n))return k({element:"i",className:["material-icons",n],textContent:e,parent:t});n.unshift("material-icons")}return k({element:"i",className:"material-icons",textContent:e,parent:t})}const w=new class{constructor(){this.taskForm=document.querySelector(".task-form"),this.projectSelect=document.getElementById("task-project")}init(){this.taskForm=document.querySelector(".task-form"),this.projectSelect=document.getElementById("task-project"),this.taskForm.addEventListener("submit",(n=>{n.preventDefault();const e=document.getElementById("task-title").value,t=document.getElementById("task-deadline").value,o=document.getElementById("task-project").value;console.log(t),C.addTask(e,t,o),this.taskForm.reset(),this.toggleForm()}))}populateProjectDropdown(){for(;this.projectSelect.firstChild;)this.projectSelect.removeChild(this.projectSelect.firstChild);k({element:"option",textContent:"None",parent:this.projectSelect}).value="0";for(let n=0;n<C.projects.length;n+=1)k({element:"option",textContent:C.projects[n].title,parent:this.projectSelect}).value=C.projects[n].id;console.log("populateProjectDropdown")}toggleForm(){this.taskForm.style.display="flex"===this.taskForm.style.display?"none":"flex"}},C=new class{constructor(){this.tasks=[],this.projects=[]}addTask(n,e,t){const o=v(),r=new class{constructor(n,e,t,o){this.title=n,this.deadline=e,this.project=t,this.id=o,this.completed=!1}}(n,e,t,o);this.tasks.push(r),"0"!==t&&this.projects.find((n=>n.id===t)).addTask(r),console.log("test addtask"),function(n){const e=k({element:"div",className:"task",parent:document.querySelector(".task-container")}),t=k({element:"div",className:"left",parent:e});j({className:"checked",textContent:"radio_button_unchecked",parent:t}),k({element:"span",className:"task-name",textContent:n.title,parent:t});const o=k({element:"div",className:"right",parent:e}),r=j({className:"project-indicator",textContent:"folder",parent:o});r.style.color=function(n){return"0"===n.project?"rgb(117, 117, 117)":C.projects.find((e=>e.id===n.project)).color}(n),r.title=function(n){return"0"===n.project?"None":C.projects.find((e=>e.id===n.project)).title}(n),j({className:"task-buttons",textContent:"edit",parent:o}),j({className:"task-buttons",textContent:"date_range",parent:o}).title=n.deadline,j({className:"task-buttons",textContent:"delete",parent:o})}(r)}addProject(n,e){const t=v(),o=new class{constructor(n,e,t){this.title=n,this.color=e,this.id=t,this.tasks=[]}addTask(n){this.tasks.push(n)}}(n,e,t);this.projects.push(o),function(n){const e=k({element:"div",className:"project",parent:document.querySelector(".projects")});e.dataset.id=n.id,k({element:"span",className:"color-identifier",parent:e}).style.backgroundColor=n.color,k({element:"span",className:"project-name",textContent:n.title,parent:e}),w.populateProjectDropdown(),console.log("createProjectElement")}(o),console.log("todoController addProject")}},E=new class{constructor(){this.projectForm=document.querySelector(".project-form")}init(){this.projectForm.addEventListener("submit",(n=>{n.preventDefault();const e=document.getElementById("project-title").value,t=document.getElementById("project-color").value;C.projects.find((n=>n.title===e))?console.log("project name already exists"):(C.addProject(e,t),this.projectForm.reset(),this.toggleForm())}))}toggleForm(){this.projectForm.style.display="flex"===this.projectForm.style.display?"none":"flex"}};!function(){document.getElementById("collapse-icon").addEventListener("click",(()=>{document.querySelector(".content .left").classList.toggle("collapsed")})),document.getElementById("home-icon").addEventListener("click",(()=>{console.log("home")}));const n=document.getElementById("search-bar-form"),e=document.getElementById("search-bar");n.addEventListener("submit",(t=>{t.preventDefault();const o=e.value;console.log(`submitted ${o}`),n.reset()}))}(),document.getElementById("today").addEventListener("click",(()=>{console.log("today view")})),document.getElementById("upcoming").addEventListener("click",(()=>{console.log("upcoming view")})),document.getElementById("completed").addEventListener("click",(()=>{console.log("completed view")})),document.querySelector(".project-header").addEventListener("click",(()=>{E.toggleForm()})),E.init(),function(){const n=document.querySelector(".content-container");for(;n.firstChild;)n.removeChild(n.firstChild)}(),function(){const n=document.querySelector(".content-container"),e=k({element:"div",className:"today-header",parent:n}),t=k({element:"div",className:"todays-date",parent:e});k({element:"h1",textContent:"Today",parent:t}),k({element:"span",textContent:"Sun May 28",parent:t});const o=k({element:"div",className:"add-task",parent:e});j({textContent:"add",parent:o}),k({element:"span",textContent:"Add Task",parent:o}),function(){console.log("createTodayTaskForm");const n=k({element:"form",className:"task-form",parent:document.querySelector(".content-container")});n.setAttribute("autocomplete","off");const e=k({element:"section",parent:n});k({element:"label",textContent:"Name",parent:e}).setAttribute("for","task-title"),k({element:"input",id:"task-title",parent:e}),k({element:"label",className:"task-project",textContent:"Project",parent:e}).setAttribute("for","task-project");const t=k({element:"select",id:"task-project",parent:e});k({element:"option",textContent:"None",parent:t}).value="0",k({element:"label",className:"task-deadline",textContent:"Deadline",parent:e}).setAttribute("for","task-deadline"),k({element:"input",id:"task-deadline",parent:e}).setAttribute("type","date");const o=k({element:"button",className:"task-form-submit",parent:n});o.setAttribute("type","submit"),j({textContent:"add",parent:o})}(),k({element:"div",className:"task-container",parent:n})}(),document.querySelector(".add-task").addEventListener("click",(()=>{w.toggleForm(),console.log("add task")})),w.init()})()})();