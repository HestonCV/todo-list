(()=>{"use strict";var n,e,t,r,o,a,i,c,s,l,p,d,f,u,g={947:(n,e,t)=>{t.d(e,{Z:()=>v});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(11),t.b),p=new URL(t(254),t.b),d=new URL(t(975),t.b),f=new URL(t(713),t.b),u=i()(o()),g=s()(l),h=s()(p),b=s()(d),m=s()(f);u.push([n.id,"@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url("+g+"); /* For IE6-8 */\n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url("+h+") format('woff2'),\n       url("+b+") format('woff'),\n       url("+m+") format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n",""]);const v=u},426:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(947),s=i()(o());s.i(c.Z),s.push([n.id,"html, body {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  --offwhite: rgb(242, 242, 242);\n  --sidebar-font-color: rgb(43, 43, 43);\n  overflow: hidden;\n}\n\n/* navbar styles */\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 20px;\n  height: 40px;\n  background-color: #de483a;\n}\n\nnav .left {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 15px;\n}\n\nnav .right {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n/* icon styles */\n\n.navbar-icons {\n  color: var(--offwhite);\n  font-size: 1.7rem;\n  cursor: pointer;\n}\n\n.icon-container {\n  padding: 3px;\n  border-radius: 5px;\n}\n\n.icon-container:hover {\n  background-color: rgba(255, 255, 255, 0.243);\n}\n\n.today {\n  color: #3277dd;\n}\n\n.upcoming {\n  color: #4b9244;\n}\n\n.searchbar-icon {\n  color: rgb(236, 236, 236);\n  cursor: pointer;\n}\n\n.project-icons {\n  color: var(--sidebar-font-color);\n}\n\n/* searchbar styles */\n\n.search-bar {\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.399);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3px;\n  width: max(50%, 260px);\n  height: 18px;\n  padding: 5px;\n}\n\n.search-bar input {\n  background-color: rgba(0, 0, 0, 0);\n  color: rgb(255, 255, 255);\n  width: 200px;\n  font-size: 1.2rem;\n  border: none;\n}\n\n.search-bar input::placeholder {\n  background-color: rgba(0, 0, 0, 0);\n  color: rgb(255, 255, 255);\n  width: 200px;\n  font-size: 1.2rem;\n  border: none;\n}\n\n.search-bar input:focus {\n  border: none;\n  outline: none;\n}\n\n/* content styles */\n\n.content {\n  display: flex;\n  height: calc(100% - 50px);\n  width: 100%;\n}\n\n/* left sidebar styles */\n\n.content .left {\n  flex: 1;\n  background-color: rgb(238, 238, 238);\n  min-width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 20px;\n  padding: 20px;\n  padding-top: 40px;\n  padding-right: 25px;\n  overflow-y: auto;\n  color: var(--sidebar-font-color)\n}\n\n.content .left.collapsed {\n   flex: 0;\n   display: none;\n   min-width: 0;\n}\n\n.time-view-container {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.time-view {\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  width: 100%;\n}\n\n.time-view.active {\n  background-color: rgb(225, 225, 225);\n}\n\n.time-view:hover {\n  background-color: rgb(225, 225, 225);\n  cursor: pointer;\n}\n\n/* sidebar projects styles */\n\n.project-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n  border-radius: 8px;\n}\n\n.project-header h1 {\n  font-size: 1.2rem;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n}\n\n.project-header:hover {\n  background-color: rgb(225, 225, 225);\n  cursor: pointer;\n}\n\n\n/* right content styles */\n.content .right {\n  flex: 6;\n  height: 100%;\n  background-color: var(--offwhite);\n  display: flex;\n  justify-content: center;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.today-header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: baseline;\n  gap: 5px;\n}\n\n.today-header h1 {\n  margin: 0;\n  padding: 0;\n}\n\n.today-header span {\n  font-size: 1rem;\n  color: rgb(115, 115, 115);\n}",""]);const l=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var f=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var g=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},11:(n,e,t)=>{n.exports=t.p+"4674f8ded773cb03e824.eot"},713:(n,e,t)=>{n.exports=t.p+"5e7382c63da0098d634a.ttf"},975:(n,e,t)=>{n.exports=t.p+"83bebaf37c09c7e1c3ee.woff"},254:(n,e,t)=>{n.exports=t.p+"cff684e59ffb052d72cb.woff2"}},h={};function b(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return g[n](t,t.exports,b),t.exports}b.m=g,b.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return b.d(e,{a:e}),e},b.d=(n,e)=>{for(var t in e)b.o(e,t)&&!b.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),b.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;b.g.importScripts&&(n=b.g.location+"");var e=b.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=n})(),b.b=document.baseURI||self.location.href,b.nc=void 0,n=b(379),e=b.n(n),t=b(795),r=b.n(t),o=b(569),a=b.n(o),i=b(565),c=b.n(i),s=b(216),l=b.n(s),p=b(589),d=b.n(p),f=b(426),(u={}).styleTagTransform=d(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=l(),e()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals,document.getElementById("collapse-icon").addEventListener("click",(()=>{const n=document.querySelector(".content .left");n.classList.contains("collapsed")?(console.log("test"),n.classList.remove("collapsed")):n.classList.add("collapsed")}))})();