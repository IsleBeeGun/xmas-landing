parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FQ5H":[function(require,module,exports) {

},{"./../fonts/Lato-Black.ttf":[["Lato-Black.6cf5539c.ttf","v6IW"],"v6IW"],"./../fonts/Lato-Bold.woff2":[["Lato-Bold.25bc545b.woff2","cyiI"],"cyiI"],"./../fonts/Lato-Bold.woff":[["Lato-Bold.172b6fe1.woff","duQU"],"duQU"],"./../fonts/Lato-Regular.woff2":[["Lato-Regular.f0c7b2c2.woff2","liH8"],"liH8"],"./../fonts/Lato-Regular.woff":[["Lato-Regular.4d417de1.woff","LpL8"],"LpL8"],"./../fonts/Lato-Light.woff2":[["Lato-Light.e740ee5a.woff2","WvyH"],"WvyH"],"./../fonts/Lato-Light.woff":[["Lato-Light.074c2336.woff","zcf3"],"zcf3"],"./../fonts/Lato-Italic.woff2":[["Lato-Italic.7fae71bb.woff2","yATR"],"yATR"],"./../fonts/Lato-Italic.woff":[["Lato-Italic.5589d871.woff","WEAD"],"WEAD"],"./../images/bg-hero-top.svg":[["bg-hero-top.856019e8.svg","eKf7"],"eKf7"],"./../images/bg-hero.svg":[["bg-hero.5864d0e5.svg","Nqwb"],"Nqwb"],"./../images/bg-hero-top-xs.svg":[["bg-hero-top-xs.b680ca77.svg","hPIf"],"hPIf"],"./../images/bg-callback-bottom.svg":[["bg-callback-bottom.349a113c.svg","fBeR"],"fBeR"],"./../images/bg-callback-top.svg":[["bg-callback-top.8892ec8a.svg","tkE3"],"tkE3"],"./../images/bg-callback-top-xs.svg":[["bg-callback-top-xs.186fca84.svg","Sze7"],"Sze7"],"./../images/santa.svg":[["santa.507db2a3.svg","BQ9n"],"BQ9n"],"./../images/candycane1.svg":[["candycane1.ef70201d.svg","GtKh"],"GtKh"],"./../images/candycane2.svg":[["candycane2.53cb4667.svg","GFK2"],"GFK2"],"./../images/reindeer.svg":[["reindeer.c63b30d9.svg","kjiu"],"kjiu"]}],"RSqK":[function(require,module,exports) {
var e=document.querySelector(".modal-window"),t=document.querySelector(".modal-backdrop"),i=document.querySelector(".modal-exit"),o=function(){t.setAttribute("style","visibility:hidden; opacity: 0;"),e.setAttribute("style","visibility:hidden; opacity: 0;"),document.querySelector("html").style.overflow="visible"};i.addEventListener("click",function(e){o()}),t.addEventListener("click",function(e){o()});
},{}],"L05D":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("snowfall"),a=t.getContext("2d"),r=window.innerWidth,n=window.innerHeight;t.width=r,t.height=n;var d=Math.trunc(r/6);r<400&&(d=Math.trunc(r/5));for(var o=[],e=0;e<d;e++)o.push({x:Math.random()*r,y:Math.random()*n,r:4*Math.random()+0,d:Math.random()*d});var h=2;setInterval(function(){a.clearRect(0,0,r,n),a.fillStyle="#fff",a.beginPath();for(var t=0;t<d;t++){var e=o[t];a.moveTo(e.x,e.y),a.arc(e.x,e.y,e.r,0,4*Math.PI,!0)}a.fill(),function(){h+=0;for(var t=0;t<d;t++){var a=o[t];a.y+=Math.cos(h+a.d)+1+a.r/2,a.x+=2*Math.sin(h),(a.x>r+5||a.x<-5||a.y>n)&&(t%3>0?o[t]={x:Math.random()*r,y:-10,r:a.r,d:a.d}:Math.sin(h)>0?o[t]={x:-4,y:Math.random()*n,r:a.r,d:a.d}:o[t]={x:r+5,y:Math.random()*n,r:a.r,d:a.d})}}()},15)});
},{}],"vEjd":[function(require,module,exports) {
function t(o){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(o)}function o(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function e(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}function r(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&y(t,o)}function i(t){var o=u();return function(){var e,n=d(t);if(o){var r=d(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)}}function a(o,e){return!e||"object"!==t(e)&&"function"!=typeof e?c(o):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){var o="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||!f(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,e)}function e(){return l(t,arguments,d(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),y(e,t)})(t)}function l(t,o,e){return(l=u()?Reflect.construct:function(t,o,e){var n=[null];n.push.apply(n,o);var r=new(Function.bind.apply(t,n));return e&&y(r,e.prototype),r}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function y(t,o){return(y=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=document.createElement("template");h.innerHTML='\n  <style>\n\n    .tooltip-container {\n      display: inline-block;\n      position: relative;\n      z-index: 2;\n    }\n    \n    .cancel {\n      display: none;\n    }\n\n    svg {\n      width: 12px;\n      cursor: pointer;\n    }\n\n    .notify-container {\n      position: absolute;\n      bottom: 125%;\n      z-index: 9;\n      width: 15.375rem;\n      height: max-content;\n      background: white; \n      box-shadow: 2px 6px 20px rgba(0, 0, 0, 0.25);\n      font-size: 0.75rem;\n      line-height: 0.9rem;\n      border-radius: 15px;\n      padding: 1rem;\n      transform: scale(0);\n      transform-origin: bottom left;\n      transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);\n    }\n\n    .tooltip-backdrop {\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n      z-index: 2;\n      background-color: transparent;\n    }\n    \n  </style>\n\n  <div class="tooltip-backdrop"></div>\n  <div class="tooltip-container">\n\n    <svg viewBox="0 0 12 12" class="alert" fill="none" >\n    \n        <path d="M6 9.45703C6.3236 9.45703 6.58594 9.1947 6.58594 8.87109C6.58594 8.54749 6.3236 8.28516 6 8.28516C5.6764 8.28516 5.41406 8.54749 5.41406 8.87109C5.41406 9.1947 5.6764 9.45703 6 9.45703Z" fill="#D2D2D2"/>\n        <path d="M6 0C2.68397 0 0 2.68352 0 6C0 9.31603 2.68352 12 6 12C9.31603 12 12 9.31648 12 6C12 2.68397 9.31648 0 6 0ZM6 11.0625C3.2021 11.0625 0.9375 8.79827 0.9375 6C0.9375 3.2021 3.20173 0.9375 6 0.9375C8.7979 0.9375 11.0625 3.20173 11.0625 6C11.0625 8.7979 8.79827 11.0625 6 11.0625Z" fill="#D2D2D2"/>\n        <path d="M6 3.01172C4.96613 3.01172 4.125 3.85284 4.125 4.88672C4.125 5.14561 4.33486 5.35547 4.59375 5.35547C4.85264 5.35547 5.0625 5.14561 5.0625 4.88672C5.0625 4.36978 5.48306 3.94922 6 3.94922C6.51694 3.94922 6.9375 4.36978 6.9375 4.88672C6.9375 5.40366 6.51694 5.82422 6 5.82422C5.74111 5.82422 5.53125 6.03408 5.53125 6.29297V7.46484C5.53125 7.72373 5.74111 7.93359 6 7.93359C6.25889 7.93359 6.46875 7.72373 6.46875 7.46484V6.7024C7.27655 6.49373 7.875 5.7588 7.875 4.88672C7.875 3.85284 7.03387 3.01172 6 3.01172Z" fill="#D2D2D2"/>\n     \n    </svg>\n\n\n\n    <svg viewBox="0 0 28 28" class="cancel">\n      <g id="exit" transform="translate(-943 -484)">\n        <circle id="Эллипс_3" data-name="Эллипс 3" cx="14" cy="14" r="14" transform="translate(943 484)" fill="#2a3985"/>\n        <rect id="Прямоугольник_1" data-name="Прямоугольник 1" width="2" height="12" transform="translate(952.197 494.818) rotate(-45)" fill="#fff"/>\n        <rect id="Прямоугольник_4" data-name="Прямоугольник 4" width="2" height="12" transform="translate(960.682 493.404) rotate(45)" fill="#fff"/>\n      </g>\n    </svg>\n\n    <div class="notify-container">\n      <slot name="message" />\n    </div>\n\n  </div>\n';var p=function(t){r(a,s(HTMLElement));var e=i(a);function a(){var t;return o(this,a),(t=e.call(this)).attachShadow({mode:"open"}),t.shadowRoot.appendChild(h.content.cloneNode(!0)),t}return n(a,[{key:"tooltip",value:function(t){var o=this.shadowRoot.querySelector(".notify-container"),e=this.shadowRoot.querySelector(".alert"),n=this.shadowRoot.querySelector(".cancel"),r=this.shadowRoot.querySelector(".tooltip-backdrop");1==t?(o.style.transform="scale(1)",e.style.display="none",n.style.display="block",r.style.display="block"):(o.style.transform="scale(0)",e.style.display="block",n.style.display="none",r.style.display="none")}},{key:"connectedCallback",value:function(){var t=this;if(this.shadowRoot.querySelector(".alert").addEventListener("click",function(){t.tooltip(!0)}),this.shadowRoot.querySelector(".cancel").addEventListener("click",function(){t.tooltip(!1)}),this.shadowRoot.querySelector(".tooltip-backdrop").addEventListener("click",function(){t.tooltip(!1)}),this.getAttribute("tip_background")&&(this.shadowRoot.querySelector(".notify-container").style.background=this.getAttribute("tip_background")),this.getAttribute("tip_color")&&(this.shadowRoot.querySelector(".notify-container").style.color=this.getAttribute("tip_color")),this.getAttribute("tip_position"))switch(this.getAttribute("tip_position")){case"bottom":this.shadowRoot.querySelector(".notify-container").style.bottom="0%",this.shadowRoot.querySelector(".notify-container").style.top="125%",this.shadowRoot.querySelector(".notify-container").style.transformOrigin="top left";break;case"top":window.innerWidth<758?(this.shadowRoot.querySelector(".notify-container").style.width="10rem",this.shadowRoot.querySelector(".notify-container").style.bottom="125%",this.shadowRoot.querySelector(".notify-container").style.right="0%",this.shadowRoot.querySelector(".notify-container").style.transformOrigin="bottom right"):window.innerWidth<1220?(this.shadowRoot.querySelector(".notify-container").style.width="8rem",this.shadowRoot.querySelector(".notify-container").style.transformOrigin="bottom left"):(this.shadowRoot.querySelector(".notify-container").style.bottom="125%",this.shadowRoot.querySelector(".notify-container").style.transformOrigin="bottom left");break;case"top-left":window.innerWidth<758&&(this.shadowRoot.querySelector(".notify-container").style.width="10rem"),this.shadowRoot.querySelector(".notify-container").style.bottom="125%",this.shadowRoot.querySelector(".notify-container").style.right="0%",this.shadowRoot.querySelector(".notify-container").style.transformOrigin="bottom right";break;default:window.innerWidth<758?(this.shadowRoot.querySelector(".notify-container").style.width="10rem",this.shadowRoot.querySelector(".notify-container").style.bottom="125%",this.shadowRoot.querySelector(".notify-container").style.right="0%",this.shadowRoot.querySelector(".notify-container").style.transformOrigin="bottom right"):(this.shadowRoot.querySelector(".notify-container").style.bottom="125%",this.shadowRoot.querySelector(".notify-container").style.transformOrigin="bottom left")}}}]),a}();"function"==typeof window.ShadowRoot?(console.log("shadow root detected"),console.log(t(window.ShadowRoot)),window.customElements.define("popup-notify",p)):(console.log("shadow root NOT detected"),console.log(t(window.ShadowRoot)),document.querySelector("popup-notify").style.display="none");
},{}],"lm7q":[function(require,module,exports) {
var define;
var t;!function(e,n){"function"==typeof t&&t.amd?t([],n()):"object"==typeof module&&module.exports?module.exports=n():function t(){document&&document.body?e.zenscroll=n():setTimeout(t,9)}()}(this,function(){"use strict";var t=function(t){return t&&"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){var i;n=n||999,o||0===o||(o=9);var r=function(t){i=t},u=function(){clearTimeout(i),r(0)},c=function(t){return Math.max(0,e.getTopOf(t)-o)},a=function(o,i,c){if(u(),0===i||i&&i<0||t(e.body))e.toY(o),c&&c();else{var a=e.getY(),s=Math.max(0,o)-a,f=(new Date).getTime();i=i||Math.min(Math.abs(s),n),function t(){r(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-f)/i),o=Math.max(0,Math.floor(a+s*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(o),n<1&&e.getHeight()+o<e.body.scrollHeight?t():(setTimeout(u,99),c&&c())},9))}()}},s=function(t,e,n){a(c(t),e,n)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(o=e),{defaultDuration:n,edgeOffset:o}},to:s,toY:a,intoView:function(t,n,i){var r=t.getBoundingClientRect().height,u=e.getTopOf(t)+r,f=e.getHeight(),l=e.getY(),d=l+f;c(t)<l||r+o>f?s(t,n,i):u+o>d?a(u-f+o,n,i):i&&i()},center:function(t,n,o,i){a(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(o||t.getBoundingClientRect().height/2)),n,i)},stop:u,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(t,o,i){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},o,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var r="history"in window&&"pushState"in history,u=r&&"scrollRestoration"in history;u&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){u&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=i.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var n=Math.max(0,i.getTopOf(e)-t),o=i.getY()-n;0<=o&&o<9&&window.scrollTo(0,n)}}},9)},!1);var c=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(u){var n=history.state&&"object"==typeof history.state?history.state:{};n.zenscrollY=i.getY();try{history.replaceState(n,"")}catch(d){}}var o=e.getAttribute("href")||"";if(0===o.indexOf("#")&&!c.test(e.className)){var a=0,s=document.getElementById(o.substring(1));if("#"!==o){if(!s)return;a=i.getTopOf(s)}t.preventDefault();var f=function(){window.location=o},l=i.setup().edgeOffset;l&&(a=Math.max(0,a-l),r&&(f=function(){history.pushState({},"",o)})),i.toY(a,null,f)}}},!1)}return i});
},{}],"FgYK":[function(require,module,exports) {
"use strict";require("../styles/xmas-main.scss"),require("./modal"),require("./snowfall"),require("./popupNotify");var e=r(require("zenscroll"));function r(e){return e&&e.__esModule?e:{default:e}}e.default.setup(null,0);
},{"../styles/xmas-main.scss":"FQ5H","./modal":"RSqK","./snowfall":"L05D","./popupNotify":"vEjd","zenscroll":"lm7q"}]},{},["FgYK"], null)
//# sourceMappingURL=xmas-main.ab68cf23.js.map