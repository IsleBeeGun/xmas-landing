// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/xmas-main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/Lato-Black.ttf":[["Lato-Black.a6dd37ab.ttf","fonts/Lato-Black.ttf"],"fonts/Lato-Black.ttf"],"./../fonts/Lato-Bold.woff2":[["Lato-Bold.a497623e.woff2","fonts/Lato-Bold.woff2"],"fonts/Lato-Bold.woff2"],"./../fonts/Lato-Bold.woff":[["Lato-Bold.2ba61289.woff","fonts/Lato-Bold.woff"],"fonts/Lato-Bold.woff"],"./../fonts/Lato-Regular.woff2":[["Lato-Regular.1c034558.woff2","fonts/Lato-Regular.woff2"],"fonts/Lato-Regular.woff2"],"./../fonts/Lato-Regular.woff":[["Lato-Regular.5200f20d.woff","fonts/Lato-Regular.woff"],"fonts/Lato-Regular.woff"],"./../fonts/Lato-Light.woff2":[["Lato-Light.0b4c33d0.woff2","fonts/Lato-Light.woff2"],"fonts/Lato-Light.woff2"],"./../fonts/Lato-Light.woff":[["Lato-Light.e23788da.woff","fonts/Lato-Light.woff"],"fonts/Lato-Light.woff"],"./../fonts/Lato-Italic.woff2":[["Lato-Italic.f9859c70.woff2","fonts/Lato-Italic.woff2"],"fonts/Lato-Italic.woff2"],"./../fonts/Lato-Italic.woff":[["Lato-Italic.4aa7727b.woff","fonts/Lato-Italic.woff"],"fonts/Lato-Italic.woff"],"./../images/bg-hero-top.svg":[["bg-hero-top.c01f9fa2.svg","images/bg-hero-top.svg"],"images/bg-hero-top.svg"],"./../images/bg-hero.svg":[["bg-hero.6c7df34c.svg","images/bg-hero.svg"],"images/bg-hero.svg"],"./../images/bg-hero-top-xs.svg":[["bg-hero-top-xs.3e2795b6.svg","images/bg-hero-top-xs.svg"],"images/bg-hero-top-xs.svg"],"./../images/bg-callback-bottom.svg":[["bg-callback-bottom.37733506.svg","images/bg-callback-bottom.svg"],"images/bg-callback-bottom.svg"],"./../images/bg-callback-top.svg":[["bg-callback-top.18d3accf.svg","images/bg-callback-top.svg"],"images/bg-callback-top.svg"],"./../images/bg-callback-top-xs.svg":[["bg-callback-top-xs.3a48c164.svg","images/bg-callback-top-xs.svg"],"images/bg-callback-top-xs.svg"],"./../images/santa.svg":[["santa.2df068fa.svg","images/santa.svg"],"images/santa.svg"],"./../images/candycane1.svg":[["candycane1.10c426ca.svg","images/candycane1.svg"],"images/candycane1.svg"],"./../images/candycane2.svg":[["candycane2.09b97b35.svg","images/candycane2.svg"],"images/candycane2.svg"],"./../images/reindeer.svg":[["reindeer.1290f56d.svg","images/reindeer.svg"],"images/reindeer.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/modal.js":[function(require,module,exports) {
var modalWindow = document.querySelector('.modal-window');
var modalBackdrop = document.querySelector('.modal-backdrop');
var modalExit = document.querySelector('.modal-exit');

var closeModal = function closeModal() {
  modalBackdrop.setAttribute('style', 'visibility:hidden; opacity: 0;');
  modalWindow.setAttribute('style', 'visibility:hidden; opacity: 0;');
  document.querySelector('html').style.overflow = 'visible';
};

modalExit.addEventListener('click', function (event) {
  closeModal();
});
modalBackdrop.addEventListener('click', function (event) {
  closeModal();
});
},{}],"js/snowfall.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('snowfall');
  var ctx = canvas.getContext('2d');
  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  var mp = Math.floor(W / 6);

  if (W < 400) {
    mp = Math.floor(W / 5);
  }

  var particles = [];

  for (var i = 0; i < mp; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 4 + 0,
      d: Math.random() * mp
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#fff';
    ctx.beginPath();

    for (var i = 0; i < mp; i++) {
      var p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 4, true);
    }

    ctx.fill();
    update();
  }

  var angle = 2;

  function update() {
    angle += 0.0;

    for (var i = 0; i < mp; i++) {
      var p = particles[i];
      p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
      p.x += Math.sin(angle) * 2;

      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (i % 3 > 0) {
          particles[i] = {
            x: Math.random() * W,
            y: -10,
            r: p.r,
            d: p.d
          };
        } else {
          if (Math.sin(angle) > 0) {
            particles[i] = {
              x: -4,
              y: Math.random() * H,
              r: p.r,
              d: p.d
            };
          } else {
            particles[i] = {
              x: W + 5,
              y: Math.random() * H,
              r: p.r,
              d: p.d
            };
          }
        }
      }
    }
  }

  setInterval(draw, 15);
}); // window.onload = function () {
//     var canvas = document.getElementById('snowfall')
//     var ctx = canvas.getContext('2d')
//     var W = window.innerWidth
//     var H = window.innerHeight
//     canvas.width = W
//     canvas.height = H
//     var mp = 255
//     var particles = []
//     for (var i = 0; i < mp; i++) {
//         particles.push({
//             x: Math.random() * W,
//             y: Math.random() * H,
//             r: Math.random() * 4 + 0,
//             d: Math.random() * mp,
//         })
//     }
//     function draw() {
//         ctx.clearRect(0, 0, W, H)
//         ctx.fillStyle = '#fff'
//         ctx.beginPath()
//         for (var i = 0; i < mp; i++) {
//             var p = particles[i]
//             ctx.moveTo(p.x, p.y)
//             ctx.arc(p.x, p.y, p.r, 0, Math.PI * 4, true)
//         }
//         ctx.fill()
//         update()
//     }
//     var angle = 2
//     function update() {
//         angle += 0.0
//         for (var i = 0; i < mp; i++) {
//             var p = particles[i]
//             p.y += Math.cos(angle + p.d) + 1 + p.r / 2
//             p.x += Math.sin(angle) * 2
//             if (p.x > W + 5 || p.x < -5 || p.y > H) {
//                 if (i % 3 > 0) {
//                     particles[i] = {x: Math.random() * W, y: -10, r: p.r, d: p.d}
//                 } else {
//                     if (Math.sin(angle) > 0) {
//                         particles[i] = {x: -4, y: Math.random() * H, r: p.r, d: p.d}
//                     } else {
//                         particles[i] = {x: W + 5, y: Math.random() * H, r: p.r, d: p.d}
//                     }
//                 }
//             }
//         }
//     }
//     setInterval(draw, 15)
// }
},{}],"js/popupNotify.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
template.innerHTML = "\n  <style>\n\n    .tooltip-container {\n      display: inline-block;\n      position: relative;\n      z-index: 2;\n    }\n    \n    .cancel {\n      display: none;\n    }\n\n    svg {\n      width: 12px;\n      cursor: pointer;\n    }\n\n    .notify-container {\n      position: absolute;\n      bottom: 125%;\n      z-index: 9;\n      width: 15.375rem;\n      height: max-content;\n      background: white; \n      box-shadow: 2px 6px 20px rgba(0, 0, 0, 0.25);\n      font-size: 0.75rem;\n      line-height: 0.9rem;\n      border-radius: 15px;\n      padding: 1rem;\n      transform: scale(0);\n      transform-origin: bottom left;\n      transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);\n    }\n\n    .tooltip-backdrop {\n      display: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n      z-index: 2;\n      background-color: transparent;\n    }\n    \n  </style>\n\n  <div class=\"tooltip-backdrop\"></div>\n  <div class=\"tooltip-container\">\n\n    <svg viewBox=\"0 0 12 12\" class=\"alert\" fill=\"none\" >\n    \n        <path d=\"M6 9.45703C6.3236 9.45703 6.58594 9.1947 6.58594 8.87109C6.58594 8.54749 6.3236 8.28516 6 8.28516C5.6764 8.28516 5.41406 8.54749 5.41406 8.87109C5.41406 9.1947 5.6764 9.45703 6 9.45703Z\" fill=\"#D2D2D2\"/>\n        <path d=\"M6 0C2.68397 0 0 2.68352 0 6C0 9.31603 2.68352 12 6 12C9.31603 12 12 9.31648 12 6C12 2.68397 9.31648 0 6 0ZM6 11.0625C3.2021 11.0625 0.9375 8.79827 0.9375 6C0.9375 3.2021 3.20173 0.9375 6 0.9375C8.7979 0.9375 11.0625 3.20173 11.0625 6C11.0625 8.7979 8.79827 11.0625 6 11.0625Z\" fill=\"#D2D2D2\"/>\n        <path d=\"M6 3.01172C4.96613 3.01172 4.125 3.85284 4.125 4.88672C4.125 5.14561 4.33486 5.35547 4.59375 5.35547C4.85264 5.35547 5.0625 5.14561 5.0625 4.88672C5.0625 4.36978 5.48306 3.94922 6 3.94922C6.51694 3.94922 6.9375 4.36978 6.9375 4.88672C6.9375 5.40366 6.51694 5.82422 6 5.82422C5.74111 5.82422 5.53125 6.03408 5.53125 6.29297V7.46484C5.53125 7.72373 5.74111 7.93359 6 7.93359C6.25889 7.93359 6.46875 7.72373 6.46875 7.46484V6.7024C7.27655 6.49373 7.875 5.7588 7.875 4.88672C7.875 3.85284 7.03387 3.01172 6 3.01172Z\" fill=\"#D2D2D2\"/>\n     \n    </svg>\n\n\n\n    <svg viewBox=\"0 0 28 28\" class=\"cancel\">\n      <g id=\"exit\" transform=\"translate(-943 -484)\">\n        <circle id=\"\u042D\u043B\u043B\u0438\u043F\u0441_3\" data-name=\"\u042D\u043B\u043B\u0438\u043F\u0441 3\" cx=\"14\" cy=\"14\" r=\"14\" transform=\"translate(943 484)\" fill=\"#2a3985\"/>\n        <rect id=\"\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A_1\" data-name=\"\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 1\" width=\"2\" height=\"12\" transform=\"translate(952.197 494.818) rotate(-45)\" fill=\"#fff\"/>\n        <rect id=\"\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A_4\" data-name=\"\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 4\" width=\"2\" height=\"12\" transform=\"translate(960.682 493.404) rotate(45)\" fill=\"#fff\"/>\n      </g>\n    </svg>\n\n    <div class=\"notify-container\">\n      <slot name=\"message\" />\n    </div>\n\n  </div>\n";

var PopupNotify = /*#__PURE__*/function (_HTMLElement) {
  _inherits(PopupNotify, _HTMLElement);

  var _super = _createSuper(PopupNotify);

  function PopupNotify() {
    var _this;

    _classCallCheck(this, PopupNotify);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    _this.shadowRoot.appendChild(template.content.cloneNode(true));

    return _this;
  }

  _createClass(PopupNotify, [{
    key: "tooltip",
    value: function tooltip(expandState) {
      var tooltip = this.shadowRoot.querySelector('.notify-container');
      var alert = this.shadowRoot.querySelector('.alert');
      var cancel = this.shadowRoot.querySelector('.cancel');
      var backdrop = this.shadowRoot.querySelector('.tooltip-backdrop');

      if (expandState == true) {
        tooltip.style.transform = 'scale(1)';
        alert.style.display = 'none';
        cancel.style.display = 'block';
        backdrop.style.display = 'block';
      } else {
        tooltip.style.transform = 'scale(0)';
        alert.style.display = 'block';
        cancel.style.display = 'none';
        backdrop.style.display = 'none';
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.shadowRoot.querySelector('.alert').addEventListener('click', function () {
        _this2.tooltip(true);
      });
      this.shadowRoot.querySelector('.cancel').addEventListener('click', function () {
        _this2.tooltip(false);
      });
      this.shadowRoot.querySelector('.tooltip-backdrop').addEventListener('click', function () {
        _this2.tooltip(false);
      });

      if (this.getAttribute('tip_background')) {
        this.shadowRoot.querySelector('.notify-container').style.background = this.getAttribute('tip_background');
      }

      if (this.getAttribute('tip_color')) {
        this.shadowRoot.querySelector('.notify-container').style.color = this.getAttribute('tip_color');
      }

      if (this.getAttribute('tip_position')) {
        switch (this.getAttribute('tip_position')) {
          case 'bottom':
            {
              this.shadowRoot.querySelector('.notify-container').style.bottom = '0%';
              this.shadowRoot.querySelector('.notify-container').style.top = '125%';
              this.shadowRoot.querySelector('.notify-container').style.transformOrigin = 'top left';
            }
            break;

          case 'top':
            {
              if (window.innerWidth < 758) {
                this.shadowRoot.querySelector('.notify-container').style.width = '10rem';
                this.shadowRoot.querySelector('.notify-container').style.bottom = '125%';
                this.shadowRoot.querySelector('.notify-container').style.right = '0%';
                this.shadowRoot.querySelector('.notify-container').style.transformOrigin = 'bottom right';
              } else if (window.innerWidth < 1220) {
                this.shadowRoot.querySelector('.notify-container').style.width = '8rem';
                this.shadowRoot.querySelector('.notify-container').style.transformOrigin = 'bottom left';
              } else {
                this.shadowRoot.querySelector('.notify-container').style.bottom = '125%';
                this.shadowRoot.querySelector('.notify-container').style.transformOrigin = 'bottom left';
              }
            }
            break;

          case 'top-left':
            {
              if (window.innerWidth < 758) {
                this.shadowRoot.querySelector('.notify-container').style.width = '10rem';
              }

              this.shadowRoot.querySelector('.notify-container').style.bottom = '125%';
              this.shadowRoot.querySelector('.notify-container').style.right = '0%';
              this.shadowRoot.querySelector('.notify-container').style.transformOrigin = 'bottom right';
            }
            break;

          default:
            {
              if (window.innerWidth < 758) {
                this.shadowRoot.querySelector('.notify-container').style.width = '10rem';
                this.shadowRoot.querySelector('.notify-container').style.bottom = '125%';
                this.shadowRoot.querySelector('.notify-container').style.right = '0%';
                this.shadowRoot.querySelector('.notify-container').style.transformOrigin = 'bottom right';
              } else {
                this.shadowRoot.querySelector('.notify-container').style.bottom = '125%';
                this.shadowRoot.querySelector('.notify-container').style.transformOrigin = 'bottom left';
              }
            }
            break;
        }
      }
    }
  }]);

  return PopupNotify;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

if (typeof window.ShadowRoot === 'function') {
  window.customElements.define('popup-notify', PopupNotify);
}
},{}],"../node_modules/zenscroll/zenscroll.js":[function(require,module,exports) {
var define;
/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */

/*jshint devel:true, asi:true */

/*global define, module */


(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		define([], factory())
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory()
	} else {
		(function install() {
			// To make sure Zenscroll can be referenced from the header, before `body` is available
			if (document && document.body) {
				root.zenscroll = factory()
			} else {
				// retry 9ms later
				setTimeout(install, 9)
			}
		})()
	}
}(this, function () {
	"use strict"


	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
	var isNativeSmoothScrollEnabledOn = function (elem) {
		return elem && "getComputedStyle" in window &&
			window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
	}


	// Exit if it’s not a browser environment:
	if (typeof window === "undefined" || !("document" in window)) {
		return {}
	}


	var makeScroller = function (container, defaultDuration, edgeOffset) {

		// Use defaults if not provided
		defaultDuration = defaultDuration || 999 //ms
		if (!edgeOffset && edgeOffset !== 0) {
			// When scrolling, this amount of distance is kept from the edges of the container:
			edgeOffset = 9 //px
		}

		// Handling the life-cycle of the scroller
		var scrollTimeoutId
		var setScrollTimeoutId = function (newValue) {
			scrollTimeoutId = newValue
		}

		/**
		 * Stop the current smooth scroll operation immediately
		 */
		var stopScroll = function () {
			clearTimeout(scrollTimeoutId)
			setScrollTimeoutId(0)
		}

		var getTopWithEdgeOffset = function (elem) {
			return Math.max(0, container.getTopOf(elem) - edgeOffset)
		}

		/**
		 * Scrolls to a specific vertical position in the document.
		 *
		 * @param {targetY} The vertical position within the document.
		 * @param {duration} Optionally the duration of the scroll operation.
		 *        If not provided the default duration is used.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToY = function (targetY, duration, onDone) {
			stopScroll()
			if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
				container.toY(targetY)
				if (onDone) {
					onDone()
				}
			} else {
				var startY = container.getY()
				var distance = Math.max(0, targetY) - startY
				var startTime = new Date().getTime()
				duration = duration || Math.min(Math.abs(distance), defaultDuration);
				(function loopScroll() {
					setScrollTimeoutId(setTimeout(function () {
						// Calculate percentage:
						var p = Math.min(1, (new Date().getTime() - startTime) / duration)
						// Calculate the absolute vertical position:
						var y = Math.max(0, Math.floor(startY + distance*(p < 0.5 ? 2*p*p : p*(4 - p*2)-1)))
						container.toY(y)
						if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
							loopScroll()
						} else {
							setTimeout(stopScroll, 99) // with cooldown time
							if (onDone) {
								onDone()
							}
						}
					}, 9))
				})()
			}
		}

		/**
		 * Scrolls to the top of a specific element.
		 *
		 * @param {elem} The element to scroll to.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToElem = function (elem, duration, onDone) {
			scrollToY(getTopWithEdgeOffset(elem), duration, onDone)
		}

		/**
		 * Scrolls an element into view if necessary.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollIntoView = function (elem, duration, onDone) {
			var elemHeight = elem.getBoundingClientRect().height
			var elemBottom = container.getTopOf(elem) + elemHeight
			var containerHeight = container.getHeight()
			var y = container.getY()
			var containerBottom = y + containerHeight
			if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
				// Element is clipped at top or is higher than screen.
				scrollToElem(elem, duration, onDone)
			} else if ((elemBottom + edgeOffset) > containerBottom) {
				// Element is clipped at the bottom.
				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone)
			} else if (onDone) {
				onDone()
			}
		}

		/**
		 * Scrolls to the center of an element.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {offset} Optionally the offset of the top of the element from the center of the screen.
		 *        A value of 0 is ignored.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToCenterOf = function (elem, duration, offset, onDone) {
			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight()/2 + (offset || elem.getBoundingClientRect().height/2)), duration, onDone)
		}

		/**
		 * Changes default settings for this scroller.
		 *
		 * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
		 *        Ignored if null or undefined.
		 * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
		 * @returns An object with the current values.
		 */
		var setup = function (newDefaultDuration, newEdgeOffset) {
			if (newDefaultDuration === 0 || newDefaultDuration) {
				defaultDuration = newDefaultDuration
			}
			if (newEdgeOffset === 0 || newEdgeOffset) {
				edgeOffset = newEdgeOffset
			}
			return {
				defaultDuration: defaultDuration,
				edgeOffset: edgeOffset
			}
		}

		return {
			setup: setup,
			to: scrollToElem,
			toY: scrollToY,
			intoView: scrollIntoView,
			center: scrollToCenterOf,
			stop: stopScroll,
			moving: function () { return !!scrollTimeoutId },
			getY: container.getY,
			getTopOf: container.getTopOf
		}

	}


	var docElem = document.documentElement
	var getDocY = function () { return window.scrollY || docElem.scrollTop }

	// Create a scroller for the document:
	var zenscroll = makeScroller({
		body: document.scrollingElement || document.body,
		toY: function (y) { window.scrollTo(0, y) },
		getY: getDocY,
		getHeight: function () { return window.innerHeight || docElem.clientHeight },
		getTopOf: function (elem) { return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop }
	})


	/**
	 * Creates a scroller from the provided container element (e.g., a DIV)
	 *
	 * @param {scrollContainer} The vertical position within the document.
	 * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
	 *        Ignored if 0 or null or undefined.
	 * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
	 *        Ignored if null or undefined.
	 * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
	 */
	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
		return makeScroller({
			body: scrollContainer,
			toY: function (y) { scrollContainer.scrollTop = y },
			getY: function () { return scrollContainer.scrollTop },
			getHeight: function () { return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight) },
			getTopOf: function (elem) { return elem.offsetTop }
		}, defaultDuration, edgeOffset)
	}


	// Automatic link-smoothing on achors
	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

		var isHistorySupported = "history" in window && "pushState" in history
		var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history

		// On first load & refresh make sure the browser restores the position first
		if (isScrollRestorationSupported) {
			history.scrollRestoration = "auto"
		}

		window.addEventListener("load", function () {

			if (isScrollRestorationSupported) {
				// Set it to manual
				setTimeout(function () { history.scrollRestoration = "manual" }, 9)
				window.addEventListener("popstate", function (event) {
					if (event.state && "zenscrollY" in event.state) {
						zenscroll.toY(event.state.zenscrollY)
					}
				}, false)
			}

			// Add edge offset on first load if necessary
			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
			if (window.location.hash) {
				setTimeout(function () {
					// Adjustment is only needed if there is an edge offset:
					var edgeOffset = zenscroll.setup().edgeOffset
					if (edgeOffset) {
						var targetElem = document.getElementById(window.location.href.split("#")[1])
						if (targetElem) {
							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset)
							var diff = zenscroll.getY() - targetY
							// Only do the adjustment if the browser is very close to the element:
							if (0 <= diff && diff < 9 ) {
								window.scrollTo(0, targetY)
							}
						}
					}
				}, 9)
			}

		}, false)

		// Handling clicks on anchors
		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)")
		window.addEventListener("click", function (event) {
			var anchor = event.target
			while (anchor && anchor.tagName !== "A") {
				anchor = anchor.parentNode
			}
			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
				return
			}
			// Save the current scrolling position so it can be used for scroll restoration:
			if (isScrollRestorationSupported) {
				var historyState = history.state && typeof history.state === "object" ? history.state : {}
				historyState.zenscrollY = zenscroll.getY()
				try {
					history.replaceState(historyState, "")
				} catch (e) {
					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
				}
			}
			// Find the referenced ID:
			var href = anchor.getAttribute("href") || ""
			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
				var targetY = 0
				var targetElem = document.getElementById(href.substring(1))
				if (href !== "#") {
					if (!targetElem) {
						// Let the browser handle the click if the target ID is not found.
						return
					}
					targetY = zenscroll.getTopOf(targetElem)
				}
				event.preventDefault()
				// By default trigger the browser's `hashchange` event...
				var onDone = function () { window.location = href }
				// ...unless there is an edge offset specified
				var edgeOffset = zenscroll.setup().edgeOffset
				if (edgeOffset) {
					targetY = Math.max(0, targetY - edgeOffset)
					if (isHistorySupported) {
						onDone = function () { history.pushState({}, "", href) }
					}
				}
				zenscroll.toY(targetY, null, onDone)
			}
		}, false)

	}


	return zenscroll


}));

},{}],"js/xmas-main.js":[function(require,module,exports) {
"use strict";

require("../styles/xmas-main.scss");

require("./modal");

require("./snowfall");

require("./popupNotify");

var _zenscroll = _interopRequireDefault(require("zenscroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { handleFormByID } from './forms-logic';
// Setup forms
//const formDesktop = handleFormByID('form-desktop');
//const formMobile = handleFormByID('form-mobile');
// Setup scroll
_zenscroll.default.setup(null, 0); // setting top offset to zero
},{"../styles/xmas-main.scss":"styles/xmas-main.scss","./modal":"js/modal.js","./snowfall":"js/snowfall.js","./popupNotify":"js/popupNotify.js","zenscroll":"../node_modules/zenscroll/zenscroll.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63767" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/xmas-main.js"], null)
//# sourceMappingURL=/xmas-main.9b365464.js.map