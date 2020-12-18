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
},{}],"../node_modules/slim-select/dist/slimselect.min.js":[function(require,module,exports) {
var define;
!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.SlimSelect = t() : e.SlimSelect = t();
}(window, function () {
  return s = {}, n.m = i = [function (e, t, i) {
    "use strict";

    function s(e, t) {
      t = t || {
        bubbles: !1,
        cancelable: !1,
        detail: void 0
      };
      var i = document.createEvent("CustomEvent");
      return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
    }

    var n;
    t.__esModule = !0, t.hasClassInTree = function (e, t) {
      function s(e, t) {
        return t && e && e.classList && e.classList.contains(t) ? e : null;
      }

      return s(e, t) || function e(t, i) {
        return t && t !== document ? s(t, i) ? t : e(t.parentNode, i) : null;
      }(e, t);
    }, t.ensureElementInView = function (e, t) {
      var i = e.scrollTop + e.offsetTop,
          s = i + e.clientHeight,
          n = t.offsetTop,
          a = n + t.clientHeight;
      n < i ? e.scrollTop -= i - n : s < a && (e.scrollTop += a - s);
    }, t.putContent = function (e, t, i) {
      var s = e.offsetHeight,
          n = e.getBoundingClientRect(),
          a = i ? n.top : n.top - s,
          o = i ? n.bottom : n.bottom + s;
      return a <= 0 ? "below" : o >= window.innerHeight ? "above" : i ? t : "below";
    }, t.debounce = function (n, a, o) {
      var l;
      return void 0 === a && (a = 100), void 0 === o && (o = !1), function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];

        var i = self,
            s = o && !l;
        clearTimeout(l), l = setTimeout(function () {
          l = null, o || n.apply(i, e);
        }, a), s && n.apply(i, e);
      };
    }, t.isValueInArrayOfObjects = function (e, t, i) {
      if (!Array.isArray(e)) return e[t] === i;

      for (var s = 0, n = e; s < n.length; s++) {
        var a = n[s];
        if (a && a[t] && a[t] === i) return !0;
      }

      return !1;
    }, t.highlight = function (e, t, i) {
      var s = e,
          n = new RegExp("(" + t.trim() + ")(?![^<]*>[^<>]*</)", "i");
      if (!e.match(n)) return e;
      var a = e.match(n).index,
          o = a + e.match(n)[0].toString().length,
          l = e.substring(a, o);
      return s = s.replace(n, '<mark class="' + i + '">' + l + "</mark>");
    }, t.kebabCase = function (e) {
      var t = e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function (e) {
        return "-" + e.toLowerCase();
      });
      return e[0] === e[0].toUpperCase() ? t.substring(1) : t;
    }, "function" != typeof (n = window).CustomEvent && (s.prototype = n.Event.prototype, n.CustomEvent = s);
  }, function (e, t, i) {
    "use strict";

    t.__esModule = !0;
    var s = (n.prototype.newOption = function (e) {
      return {
        id: e.id ? e.id : String(Math.floor(1e8 * Math.random())),
        value: e.value ? e.value : "",
        text: e.text ? e.text : "",
        innerHTML: e.innerHTML ? e.innerHTML : "",
        selected: !!e.selected && e.selected,
        display: void 0 === e.display || e.display,
        disabled: !!e.disabled && e.disabled,
        placeholder: !!e.placeholder && e.placeholder,
        class: e.class ? e.class : void 0,
        data: e.data ? e.data : {},
        mandatory: !!e.mandatory && e.mandatory
      };
    }, n.prototype.add = function (e) {
      this.data.push({
        id: String(Math.floor(1e8 * Math.random())),
        value: e.value,
        text: e.text,
        innerHTML: "",
        selected: !1,
        display: !0,
        disabled: !1,
        placeholder: !1,
        class: void 0,
        mandatory: e.mandatory,
        data: {}
      });
    }, n.prototype.parseSelectData = function () {
      this.data = [];

      for (var e = 0, t = this.main.select.element.childNodes; e < t.length; e++) {
        var i = t[e];

        if ("OPTGROUP" === i.nodeName) {
          for (var s = {
            label: i.label,
            options: []
          }, n = 0, a = i.childNodes; n < a.length; n++) {
            var o = a[n];

            if ("OPTION" === o.nodeName) {
              var l = this.pullOptionData(o);
              s.options.push(l), l.placeholder && "" !== l.text.trim() && (this.main.config.placeholderText = l.text);
            }
          }

          this.data.push(s);
        } else "OPTION" === i.nodeName && (l = this.pullOptionData(i), this.data.push(l), l.placeholder && "" !== l.text.trim() && (this.main.config.placeholderText = l.text));
      }
    }, n.prototype.pullOptionData = function (e) {
      return {
        id: !!e.dataset && e.dataset.id || String(Math.floor(1e8 * Math.random())),
        value: e.value,
        text: e.text,
        innerHTML: e.innerHTML,
        selected: e.selected,
        disabled: e.disabled,
        placeholder: "true" === e.dataset.placeholder,
        class: e.className,
        style: e.style.cssText,
        data: e.dataset,
        mandatory: !!e.dataset && "true" === e.dataset.mandatory
      };
    }, n.prototype.setSelectedFromSelect = function () {
      if (this.main.config.isMultiple) {
        for (var e = [], t = 0, i = this.main.select.element.options; t < i.length; t++) {
          var s = i[t];

          if (s.selected) {
            var n = this.getObjectFromData(s.value, "value");
            n && n.id && e.push(n.id);
          }
        }

        this.setSelected(e, "id");
      } else {
        var a = this.main.select.element;

        if (-1 !== a.selectedIndex) {
          var o = a.options[a.selectedIndex].value;
          this.setSelected(o, "value");
        }
      }
    }, n.prototype.setSelected = function (e, t) {
      void 0 === t && (t = "id");

      for (var i = 0, s = this.data; i < s.length; i++) {
        var n = s[i];

        if (n.hasOwnProperty("label")) {
          if (n.hasOwnProperty("options")) {
            var a = n.options;
            if (a) for (var o = 0, l = a; o < l.length; o++) {
              var r = l[o];
              r.placeholder || (r.selected = this.shouldBeSelected(r, e, t));
            }
          }
        } else n.selected = this.shouldBeSelected(n, e, t);
      }
    }, n.prototype.shouldBeSelected = function (e, t, i) {
      if (void 0 === i && (i = "id"), Array.isArray(t)) for (var s = 0, n = t; s < n.length; s++) {
        var a = n[s];
        if (i in e && String(e[i]) === String(a)) return !0;
      } else if (i in e && String(e[i]) === String(t)) return !0;
      return !1;
    }, n.prototype.getSelected = function () {
      for (var e = {
        text: "",
        placeholder: this.main.config.placeholderText
      }, t = [], i = 0, s = this.data; i < s.length; i++) {
        var n = s[i];

        if (n.hasOwnProperty("label")) {
          if (n.hasOwnProperty("options")) {
            var a = n.options;
            if (a) for (var o = 0, l = a; o < l.length; o++) {
              var r = l[o];
              r.selected && (this.main.config.isMultiple ? t.push(r) : e = r);
            }
          }
        } else n.selected && (this.main.config.isMultiple ? t.push(n) : e = n);
      }

      return this.main.config.isMultiple ? t : e;
    }, n.prototype.addToSelected = function (e, t) {
      if (void 0 === t && (t = "id"), this.main.config.isMultiple) {
        var i = [],
            s = this.getSelected();
        if (Array.isArray(s)) for (var n = 0, a = s; n < a.length; n++) {
          var o = a[n];
          i.push(o[t]);
        }
        i.push(e), this.setSelected(i, t);
      }
    }, n.prototype.removeFromSelected = function (e, t) {
      if (void 0 === t && (t = "id"), this.main.config.isMultiple) {
        for (var i = [], s = 0, n = this.getSelected(); s < n.length; s++) {
          var a = n[s];
          String(a[t]) !== String(e) && i.push(a[t]);
        }

        this.setSelected(i, t);
      }
    }, n.prototype.onDataChange = function () {
      this.main.onChange && this.isOnChangeEnabled && this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())));
    }, n.prototype.getObjectFromData = function (e, t) {
      void 0 === t && (t = "id");

      for (var i = 0, s = this.data; i < s.length; i++) {
        var n = s[i];
        if (t in n && String(n[t]) === String(e)) return n;
        if (n.hasOwnProperty("options") && n.options) for (var a = 0, o = n.options; a < o.length; a++) {
          var l = o[a];
          if (String(l[t]) === String(e)) return l;
        }
      }

      return null;
    }, n.prototype.search = function (n) {
      if ("" !== (this.searchValue = n).trim()) {
        var a = this.main.config.searchFilter,
            e = this.data.slice(0);
        n = n.trim();
        var t = e.map(function (e) {
          if (e.hasOwnProperty("options")) {
            var t = e,
                i = [];

            if (t.options && (i = t.options.filter(function (e) {
              return a(e, n);
            })), 0 !== i.length) {
              var s = Object.assign({}, t);
              return s.options = i, s;
            }
          }

          return e.hasOwnProperty("text") && a(e, n) ? e : null;
        });
        this.filtered = t.filter(function (e) {
          return e;
        });
      } else this.filtered = null;
    }, n);

    function n(e) {
      this.contentOpen = !1, this.contentPosition = "below", this.isOnChangeEnabled = !0, this.main = e.main, this.searchValue = "", this.data = [], this.filtered = null, this.parseSelectData(), this.setSelectedFromSelect();
    }

    function r(e) {
      return void 0 !== e.text || (console.error("Data object option must have at least have a text value. Check object: " + JSON.stringify(e)), !1);
    }

    t.Data = s, t.validateData = function (e) {
      if (!e) return console.error("Data must be an array of objects"), !1;

      for (var t = 0, i = 0, s = e; i < s.length; i++) {
        var n = s[i];

        if (n.hasOwnProperty("label")) {
          if (n.hasOwnProperty("options")) {
            var a = n.options;
            if (a) for (var o = 0, l = a; o < l.length; o++) {
              r(l[o]) || t++;
            }
          }
        } else r(n) || t++;
      }

      return 0 === t;
    }, t.validateOption = r;
  }, function (e, t, i) {
    "use strict";

    t.__esModule = !0;
    var s = i(3),
        n = i(4),
        a = i(5),
        r = i(1),
        o = i(0),
        l = (c.prototype.validate = function (e) {
      var t = "string" == typeof e.select ? document.querySelector(e.select) : e.select;
      if (!t) throw new Error("Could not find select element");
      if ("SELECT" !== t.tagName) throw new Error("Element isnt of type select");
      return t;
    }, c.prototype.selected = function () {
      if (this.config.isMultiple) {
        for (var e = [], t = 0, i = n = this.data.getSelected(); t < i.length; t++) {
          var s = i[t];
          e.push(s.value);
        }

        return e;
      }

      var n;
      return (n = this.data.getSelected()) ? n.value : "";
    }, c.prototype.set = function (e, t, i, s) {
      void 0 === t && (t = "value"), void 0 === i && (i = !0), void 0 === s && (s = !0), this.config.isMultiple && !Array.isArray(e) ? this.data.addToSelected(e, t) : this.data.setSelected(e, t), this.select.setValue(), this.data.onDataChange(), this.render(), i && this.close();
    }, c.prototype.setSelected = function (e, t, i, s) {
      void 0 === t && (t = "value"), void 0 === i && (i = !0), void 0 === s && (s = !0), this.set(e, t, i, s);
    }, c.prototype.setData = function (e) {
      if (r.validateData(e)) {
        for (var t = JSON.parse(JSON.stringify(e)), i = this.data.getSelected(), s = 0; s < t.length; s++) t[s].value || t[s].placeholder || (t[s].value = t[s].text);

        if (this.config.isAjax && i) if (this.config.isMultiple) for (var n = 0, a = i.reverse(); n < a.length; n++) {
          var o = a[n];
          t.unshift(o);
        } else {
          for (t.unshift(i), s = 0; s < t.length; s++) t[s].placeholder || t[s].value !== i.value || t[s].text !== i.text || delete t[s];

          var l = !1;

          for (s = 0; s < t.length; s++) t[s].placeholder && (l = !0);

          l || t.unshift({
            text: "",
            placeholder: !0
          });
        }
        this.select.create(t), this.data.parseSelectData(), this.data.setSelectedFromSelect();
      } else console.error("Validation problem on: #" + this.select.element.id);
    }, c.prototype.addData = function (e) {
      r.validateData([e]) ? (this.data.add(this.data.newOption(e)), this.select.create(this.data.data), this.data.parseSelectData(), this.data.setSelectedFromSelect(), this.render()) : console.error("Validation problem on: #" + this.select.element.id);
    }, c.prototype.open = function () {
      var e = this;

      if (this.config.isEnabled && !this.data.contentOpen) {
        if (this.beforeOpen && this.beforeOpen(), this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.plus.classList.add("ss-cross") : this.slim.singleSelected && (this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"), this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")), this.slim[this.config.isMultiple ? "multiSelected" : "singleSelected"].container.classList.add("above" === this.data.contentPosition ? this.config.openAbove : this.config.openBelow), this.config.addToBody) {
          var t = this.slim.container.getBoundingClientRect();
          this.slim.content.style.top = t.top + t.height + window.scrollY + "px", this.slim.content.style.left = t.left + window.scrollX + "px", this.slim.content.style.width = t.width + "px";
        }

        if (this.slim.content.classList.add(this.config.open), "up" === this.config.showContent.toLowerCase() || "down" !== this.config.showContent.toLowerCase() && "above" === o.putContent(this.slim.content, this.data.contentPosition, this.data.contentOpen) ? this.moveContentAbove() : this.moveContentBelow(), !this.config.isMultiple) {
          var i = this.data.getSelected();

          if (i) {
            var s = i.id,
                n = this.slim.list.querySelector('[data-id="' + s + '"]');
            n && o.ensureElementInView(this.slim.list, n);
          }
        }

        setTimeout(function () {
          e.data.contentOpen = !0, e.config.searchFocus && e.slim.search.input.focus(), e.afterOpen && e.afterOpen();
        }, this.config.timeoutDelay);
      }
    }, c.prototype.close = function () {
      var e = this;
      this.data.contentOpen && (this.beforeClose && this.beforeClose(), this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove), this.slim.multiSelected.container.classList.remove(this.config.openBelow), this.slim.multiSelected.plus.classList.remove("ss-cross")) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openAbove), this.slim.singleSelected.container.classList.remove(this.config.openBelow), this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"), this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")), this.slim.content.classList.remove(this.config.open), this.data.contentOpen = !1, this.search(""), setTimeout(function () {
        e.slim.content.removeAttribute("style"), e.data.contentPosition = "below", e.config.isMultiple && e.slim.multiSelected ? (e.slim.multiSelected.container.classList.remove(e.config.openAbove), e.slim.multiSelected.container.classList.remove(e.config.openBelow)) : e.slim.singleSelected && (e.slim.singleSelected.container.classList.remove(e.config.openAbove), e.slim.singleSelected.container.classList.remove(e.config.openBelow)), e.slim.search.input.blur(), e.afterClose && e.afterClose();
      }, this.config.timeoutDelay));
    }, c.prototype.moveContentAbove = function () {
      var e = 0;
      this.config.isMultiple && this.slim.multiSelected ? e = this.slim.multiSelected.container.offsetHeight : this.slim.singleSelected && (e = this.slim.singleSelected.container.offsetHeight);
      var t = e + this.slim.content.offsetHeight - 1;
      this.slim.content.style.margin = "-" + t + "px 0 0 0", this.slim.content.style.height = t - e + 1 + "px", this.slim.content.style.transformOrigin = "center bottom", this.data.contentPosition = "above", this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openBelow), this.slim.multiSelected.container.classList.add(this.config.openAbove)) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openBelow), this.slim.singleSelected.container.classList.add(this.config.openAbove));
    }, c.prototype.moveContentBelow = function () {
      this.data.contentPosition = "below", this.config.isMultiple && this.slim.multiSelected ? (this.slim.multiSelected.container.classList.remove(this.config.openAbove), this.slim.multiSelected.container.classList.add(this.config.openBelow)) : this.slim.singleSelected && (this.slim.singleSelected.container.classList.remove(this.config.openAbove), this.slim.singleSelected.container.classList.add(this.config.openBelow));
    }, c.prototype.enable = function () {
      this.config.isEnabled = !0, this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.container.classList.remove(this.config.disabled) : this.slim.singleSelected && this.slim.singleSelected.container.classList.remove(this.config.disabled), this.select.triggerMutationObserver = !1, this.select.element.disabled = !1, this.slim.search.input.disabled = !1, this.select.triggerMutationObserver = !0;
    }, c.prototype.disable = function () {
      this.config.isEnabled = !1, this.config.isMultiple && this.slim.multiSelected ? this.slim.multiSelected.container.classList.add(this.config.disabled) : this.slim.singleSelected && this.slim.singleSelected.container.classList.add(this.config.disabled), this.select.triggerMutationObserver = !1, this.select.element.disabled = !0, this.slim.search.input.disabled = !0, this.select.triggerMutationObserver = !0;
    }, c.prototype.search = function (t) {
      if (this.data.searchValue !== t) if (this.slim.search.input.value = t, this.config.isAjax) {
        var i = this;
        this.config.isSearching = !0, this.render(), this.ajax && this.ajax(t, function (e) {
          i.config.isSearching = !1, Array.isArray(e) ? (e.unshift({
            text: "",
            placeholder: !0
          }), i.setData(e), i.data.search(t), i.render()) : "string" == typeof e ? i.slim.options(e) : i.render();
        });
      } else this.data.search(t), this.render();
    }, c.prototype.setSearchText = function (e) {
      this.config.searchText = e;
    }, c.prototype.render = function () {
      this.config.isMultiple ? this.slim.values() : (this.slim.placeholder(), this.slim.deselect()), this.slim.options();
    }, c.prototype.destroy = function (e) {
      void 0 === e && (e = null);
      var t = e ? document.querySelector("." + e + ".ss-main") : this.slim.container,
          i = e ? document.querySelector("[data-ssid=" + e + "]") : this.select.element;

      if (t && i && (document.removeEventListener("click", this.documentClick), "auto" === this.config.showContent && window.removeEventListener("scroll", this.windowScroll, !1), i.style.display = "", delete i.dataset.ssid, i.slim = null, t.parentElement && t.parentElement.removeChild(t), this.config.addToBody)) {
        var s = e ? document.querySelector("." + e + ".ss-content") : this.slim.content;
        if (!s) return;
        document.body.removeChild(s);
      }
    }, c);

    function c(e) {
      var t = this;
      this.ajax = null, this.addable = null, this.beforeOnChange = null, this.onChange = null, this.beforeOpen = null, this.afterOpen = null, this.beforeClose = null, this.afterClose = null, this.windowScroll = o.debounce(function (e) {
        t.data.contentOpen && ("above" === o.putContent(t.slim.content, t.data.contentPosition, t.data.contentOpen) ? t.moveContentAbove() : t.moveContentBelow());
      }), this.documentClick = function (e) {
        e.target && !o.hasClassInTree(e.target, t.config.id) && t.close();
      };
      var i = this.validate(e);
      i.dataset.ssid && this.destroy(i.dataset.ssid), e.ajax && (this.ajax = e.ajax), e.addable && (this.addable = e.addable), this.config = new s.Config({
        select: i,
        isAjax: !!e.ajax,
        showSearch: e.showSearch,
        searchPlaceholder: e.searchPlaceholder,
        searchText: e.searchText,
        searchingText: e.searchingText,
        searchFocus: e.searchFocus,
        searchHighlight: e.searchHighlight,
        searchFilter: e.searchFilter,
        closeOnSelect: e.closeOnSelect,
        showContent: e.showContent,
        placeholderText: e.placeholder,
        allowDeselect: e.allowDeselect,
        allowDeselectOption: e.allowDeselectOption,
        hideSelectedOption: e.hideSelectedOption,
        deselectLabel: e.deselectLabel,
        isEnabled: e.isEnabled,
        valuesUseText: e.valuesUseText,
        showOptionTooltips: e.showOptionTooltips,
        selectByGroup: e.selectByGroup,
        limit: e.limit,
        timeoutDelay: e.timeoutDelay,
        addToBody: e.addToBody
      }), this.select = new n.Select({
        select: i,
        main: this
      }), this.data = new r.Data({
        main: this
      }), this.slim = new a.Slim({
        main: this
      }), this.select.element.parentNode && this.select.element.parentNode.insertBefore(this.slim.container, this.select.element.nextSibling), e.data ? this.setData(e.data) : this.render(), document.addEventListener("click", this.documentClick), "auto" === this.config.showContent && window.addEventListener("scroll", this.windowScroll, !1), e.beforeOnChange && (this.beforeOnChange = e.beforeOnChange), e.onChange && (this.onChange = e.onChange), e.beforeOpen && (this.beforeOpen = e.beforeOpen), e.afterOpen && (this.afterOpen = e.afterOpen), e.beforeClose && (this.beforeClose = e.beforeClose), e.afterClose && (this.afterClose = e.afterClose), this.config.isEnabled || this.disable();
    }

    t.default = l;
  }, function (e, t, i) {
    "use strict";

    t.__esModule = !0;
    var s = (n.prototype.searchFilter = function (e, t) {
      return -1 !== e.text.toLowerCase().indexOf(t.toLowerCase());
    }, n);

    function n(e) {
      this.id = "", this.isMultiple = !1, this.isAjax = !1, this.isSearching = !1, this.showSearch = !0, this.searchFocus = !0, this.searchHighlight = !1, this.closeOnSelect = !0, this.showContent = "auto", this.searchPlaceholder = "Search", this.searchText = "No Results", this.searchingText = "Searching...", this.placeholderText = "Select Value", this.allowDeselect = !1, this.allowDeselectOption = !1, this.hideSelectedOption = !1, this.deselectLabel = "x", this.isEnabled = !0, this.valuesUseText = !1, this.showOptionTooltips = !1, this.selectByGroup = !1, this.limit = 0, this.timeoutDelay = 200, this.addToBody = !1, this.main = "ss-main", this.singleSelected = "ss-single-selected", this.arrow = "ss-arrow", this.multiSelected = "ss-multi-selected", this.add = "ss-add", this.plus = "ss-plus", this.values = "ss-values", this.value = "ss-value", this.valueText = "ss-value-text", this.valueDelete = "ss-value-delete", this.content = "ss-content", this.open = "ss-open", this.openAbove = "ss-open-above", this.openBelow = "ss-open-below", this.search = "ss-search", this.searchHighlighter = "ss-search-highlight", this.addable = "ss-addable", this.list = "ss-list", this.optgroup = "ss-optgroup", this.optgroupLabel = "ss-optgroup-label", this.optgroupLabelSelectable = "ss-optgroup-label-selectable", this.option = "ss-option", this.optionSelected = "ss-option-selected", this.highlighted = "ss-highlighted", this.disabled = "ss-disabled", this.hide = "ss-hide", this.id = "ss-" + Math.floor(1e5 * Math.random()), this.style = e.select.style.cssText, this.class = e.select.className.split(" "), this.isMultiple = e.select.multiple, this.isAjax = e.isAjax, this.showSearch = !1 !== e.showSearch, this.searchFocus = !1 !== e.searchFocus, this.searchHighlight = !0 === e.searchHighlight, this.closeOnSelect = !1 !== e.closeOnSelect, e.showContent && (this.showContent = e.showContent), this.isEnabled = !1 !== e.isEnabled, e.searchPlaceholder && (this.searchPlaceholder = e.searchPlaceholder), e.searchText && (this.searchText = e.searchText), e.searchingText && (this.searchingText = e.searchingText), e.placeholderText && (this.placeholderText = e.placeholderText), this.allowDeselect = !0 === e.allowDeselect, this.allowDeselectOption = !0 === e.allowDeselectOption, this.hideSelectedOption = !0 === e.hideSelectedOption, e.deselectLabel && (this.deselectLabel = e.deselectLabel), e.valuesUseText && (this.valuesUseText = e.valuesUseText), e.showOptionTooltips && (this.showOptionTooltips = e.showOptionTooltips), e.selectByGroup && (this.selectByGroup = e.selectByGroup), e.limit && (this.limit = e.limit), e.searchFilter && (this.searchFilter = e.searchFilter), null != e.timeoutDelay && (this.timeoutDelay = e.timeoutDelay), this.addToBody = !0 === e.addToBody;
    }

    t.Config = s;
  }, function (e, t, i) {
    "use strict";

    t.__esModule = !0;
    var s = i(0),
        n = (a.prototype.setValue = function () {
      if (this.main.data.getSelected()) {
        if (this.main.config.isMultiple) for (var e = this.main.data.getSelected(), t = 0, i = this.element.options; t < i.length; t++) {
          var s = i[t];
          s.selected = !1;

          for (var n = 0, a = e; n < a.length; n++) a[n].value === s.value && (s.selected = !0);
        } else e = this.main.data.getSelected(), this.element.value = e ? e.value : "";
        this.main.data.isOnChangeEnabled = !1, this.element.dispatchEvent(new CustomEvent("change", {
          bubbles: !0
        })), this.main.data.isOnChangeEnabled = !0;
      }
    }, a.prototype.addAttributes = function () {
      this.element.tabIndex = -1, this.element.style.display = "none", this.element.dataset.ssid = this.main.config.id;
    }, a.prototype.addEventListeners = function () {
      var t = this;
      this.element.addEventListener("change", function (e) {
        t.main.data.setSelectedFromSelect(), t.main.render();
      });
    }, a.prototype.addMutationObserver = function () {
      var t = this;
      this.main.config.isAjax || (this.mutationObserver = new MutationObserver(function (e) {
        t.triggerMutationObserver && (t.main.data.parseSelectData(), t.main.data.setSelectedFromSelect(), t.main.render(), e.forEach(function (e) {
          "class" === e.attributeName && t.main.slim.updateContainerDivClass(t.main.slim.container);
        }));
      }), this.observeMutationObserver());
    }, a.prototype.observeMutationObserver = function () {
      this.mutationObserver && this.mutationObserver.observe(this.element, {
        attributes: !0,
        childList: !0,
        characterData: !0
      });
    }, a.prototype.disconnectMutationObserver = function () {
      this.mutationObserver && this.mutationObserver.disconnect();
    }, a.prototype.create = function (e) {
      this.element.innerHTML = "";

      for (var t = 0, i = e; t < i.length; t++) {
        var s = i[t];

        if (s.hasOwnProperty("options")) {
          var n = s,
              a = document.createElement("optgroup");
          if (a.label = n.label, n.options) for (var o = 0, l = n.options; o < l.length; o++) {
            var r = l[o];
            a.appendChild(this.createOption(r));
          }
          this.element.appendChild(a);
        } else this.element.appendChild(this.createOption(s));
      }
    }, a.prototype.createOption = function (t) {
      var i = document.createElement("option");
      return i.value = "" !== t.value ? t.value : t.text, i.innerHTML = t.innerHTML || t.text, t.selected && (i.selected = t.selected), !1 === t.display && (i.style.display = "none"), t.disabled && (i.disabled = !0), t.placeholder && i.setAttribute("data-placeholder", "true"), t.mandatory && i.setAttribute("data-mandatory", "true"), t.class && t.class.split(" ").forEach(function (e) {
        i.classList.add(e);
      }), t.data && "object" == typeof t.data && Object.keys(t.data).forEach(function (e) {
        i.setAttribute("data-" + s.kebabCase(e), t.data[e]);
      }), i;
    }, a);

    function a(e) {
      this.triggerMutationObserver = !0, this.element = e.select, this.main = e.main, this.element.disabled && (this.main.config.isEnabled = !1), this.addAttributes(), this.addEventListeners(), this.mutationObserver = null, this.addMutationObserver(), this.element.slim = e.main;
    }

    t.Select = n;
  }, function (e, t, i) {
    "use strict";

    t.__esModule = !0;
    var a = i(0),
        o = i(1),
        s = (n.prototype.containerDiv = function () {
      var e = document.createElement("div");
      return e.style.cssText = this.main.config.style, this.updateContainerDivClass(e), e;
    }, n.prototype.updateContainerDivClass = function (e) {
      this.main.config.class = this.main.select.element.className.split(" "), e.className = "", e.classList.add(this.main.config.id), e.classList.add(this.main.config.main);

      for (var t = 0, i = this.main.config.class; t < i.length; t++) {
        var s = i[t];
        "" !== s.trim() && e.classList.add(s);
      }
    }, n.prototype.singleSelectedDiv = function () {
      var t = this,
          e = document.createElement("div");
      e.classList.add(this.main.config.singleSelected);
      var i = document.createElement("span");
      i.classList.add("placeholder"), e.appendChild(i);
      var s = document.createElement("span");
      s.innerHTML = this.main.config.deselectLabel, s.classList.add("ss-deselect"), s.onclick = function (e) {
        e.stopPropagation(), t.main.config.isEnabled && t.main.set("");
      }, e.appendChild(s);
      var n = document.createElement("span");
      n.classList.add(this.main.config.arrow);
      var a = document.createElement("span");
      return a.classList.add("arrow-down"), n.appendChild(a), e.appendChild(n), e.onclick = function () {
        t.main.config.isEnabled && (t.main.data.contentOpen ? t.main.close() : t.main.open());
      }, {
        container: e,
        placeholder: i,
        deselect: s,
        arrowIcon: {
          container: n,
          arrow: a
        }
      };
    }, n.prototype.placeholder = function () {
      var e = this.main.data.getSelected();

      if (null === e || e && e.placeholder) {
        var t = document.createElement("span");
        t.classList.add(this.main.config.disabled), t.innerHTML = this.main.config.placeholderText, this.singleSelected && (this.singleSelected.placeholder.innerHTML = t.outerHTML);
      } else {
        var i = "";
        e && (i = e.innerHTML && !0 !== this.main.config.valuesUseText ? e.innerHTML : e.text), this.singleSelected && (this.singleSelected.placeholder.innerHTML = e ? i : "");
      }
    }, n.prototype.deselect = function () {
      if (this.singleSelected) {
        if (!this.main.config.allowDeselect) return void this.singleSelected.deselect.classList.add("ss-hide");
        "" === this.main.selected() ? this.singleSelected.deselect.classList.add("ss-hide") : this.singleSelected.deselect.classList.remove("ss-hide");
      }
    }, n.prototype.multiSelectedDiv = function () {
      var t = this,
          e = document.createElement("div");
      e.classList.add(this.main.config.multiSelected);
      var i = document.createElement("div");
      i.classList.add(this.main.config.values), e.appendChild(i);
      var s = document.createElement("div");
      s.classList.add(this.main.config.add);
      var n = document.createElement("span");
      return n.classList.add(this.main.config.plus), n.onclick = function (e) {
        t.main.data.contentOpen && (t.main.close(), e.stopPropagation());
      }, s.appendChild(n), e.appendChild(s), e.onclick = function (e) {
        t.main.config.isEnabled && (e.target.classList.contains(t.main.config.valueDelete) || (t.main.data.contentOpen ? t.main.close() : t.main.open()));
      }, {
        container: e,
        values: i,
        add: s,
        plus: n
      };
    }, n.prototype.values = function () {
      if (this.multiSelected) {
        for (var e, t = this.multiSelected.values.childNodes, i = this.main.data.getSelected(), s = [], n = 0, a = t; n < a.length; n++) {
          var o = a[n];
          e = !0;

          for (var l = 0, r = i; l < r.length; l++) {
            var c = r[l];
            String(c.id) === String(o.dataset.id) && (e = !1);
          }

          e && s.push(o);
        }

        for (var d = 0, h = s; d < h.length; d++) {
          var u = h[d];
          u.classList.add("ss-out"), this.multiSelected.values.removeChild(u);
        }

        for (t = this.multiSelected.values.childNodes, c = 0; c < i.length; c++) {
          e = !1;

          for (var p = 0, m = t; p < m.length; p++) o = m[p], String(i[c].id) === String(o.dataset.id) && (e = !0);

          e || (0 !== t.length && HTMLElement.prototype.insertAdjacentElement ? 0 === c ? this.multiSelected.values.insertBefore(this.valueDiv(i[c]), t[c]) : t[c - 1].insertAdjacentElement("afterend", this.valueDiv(i[c])) : this.multiSelected.values.appendChild(this.valueDiv(i[c])));
        }

        if (0 === i.length) {
          var f = document.createElement("span");
          f.classList.add(this.main.config.disabled), f.innerHTML = this.main.config.placeholderText, this.multiSelected.values.innerHTML = f.outerHTML;
        }
      }
    }, n.prototype.valueDiv = function (a) {
      var o = this,
          e = document.createElement("div");
      e.classList.add(this.main.config.value), e.dataset.id = a.id;
      var t = document.createElement("span");

      if (t.classList.add(this.main.config.valueText), t.innerHTML = a.innerHTML && !0 !== this.main.config.valuesUseText ? a.innerHTML : a.text, e.appendChild(t), !a.mandatory) {
        var i = document.createElement("span");
        i.classList.add(this.main.config.valueDelete), i.innerHTML = this.main.config.deselectLabel, i.onclick = function (e) {
          e.preventDefault(), e.stopPropagation();
          var t = !1;

          if (o.main.beforeOnChange || (t = !0), o.main.beforeOnChange) {
            for (var i = o.main.data.getSelected(), s = JSON.parse(JSON.stringify(i)), n = 0; n < s.length; n++) s[n].id === a.id && s.splice(n, 1);

            !1 !== o.main.beforeOnChange(s) && (t = !0);
          }

          t && (o.main.data.removeFromSelected(a.id, "id"), o.main.render(), o.main.select.setValue(), o.main.data.onDataChange());
        }, e.appendChild(i);
      }

      return e;
    }, n.prototype.contentDiv = function () {
      var e = document.createElement("div");
      return e.classList.add(this.main.config.content), e;
    }, n.prototype.searchDiv = function () {
      var n = this,
          e = document.createElement("div"),
          s = document.createElement("input"),
          a = document.createElement("div");
      e.classList.add(this.main.config.search);
      var t = {
        container: e,
        input: s
      };
      return this.main.config.showSearch || (e.classList.add(this.main.config.hide), s.readOnly = !0), s.type = "search", s.placeholder = this.main.config.searchPlaceholder, s.tabIndex = 0, s.setAttribute("aria-label", this.main.config.searchPlaceholder), s.setAttribute("autocapitalize", "off"), s.setAttribute("autocomplete", "off"), s.setAttribute("autocorrect", "off"), s.onclick = function (e) {
        setTimeout(function () {
          "" === e.target.value && n.main.search("");
        }, 10);
      }, s.onkeydown = function (e) {
        "ArrowUp" === e.key ? (n.main.open(), n.highlightUp(), e.preventDefault()) : "ArrowDown" === e.key ? (n.main.open(), n.highlightDown(), e.preventDefault()) : "Tab" === e.key ? n.main.data.contentOpen ? n.main.close() : setTimeout(function () {
          n.main.close();
        }, n.main.config.timeoutDelay) : "Enter" === e.key && e.preventDefault();
      }, s.onkeyup = function (e) {
        var t = e.target;

        if ("Enter" === e.key) {
          if (n.main.addable && e.ctrlKey) return a.click(), e.preventDefault(), void e.stopPropagation();
          var i = n.list.querySelector("." + n.main.config.highlighted);
          i && i.click();
        } else "ArrowUp" === e.key || "ArrowDown" === e.key || ("Escape" === e.key ? n.main.close() : n.main.config.showSearch && n.main.data.contentOpen ? n.main.search(t.value) : s.value = "");

        e.preventDefault(), e.stopPropagation();
      }, s.onfocus = function () {
        n.main.open();
      }, e.appendChild(s), this.main.addable && (a.classList.add(this.main.config.addable), a.innerHTML = "+", a.onclick = function (e) {
        if (n.main.addable) {
          e.preventDefault(), e.stopPropagation();
          var t = n.search.input.value;
          if ("" === t.trim()) return void n.search.input.focus();
          var i = n.main.addable(t),
              s = "";
          if (!i) return;
          "object" == typeof i ? o.validateOption(i) && (n.main.addData(i), s = i.value ? i.value : i.text) : (n.main.addData(n.main.data.newOption({
            text: i,
            value: i
          })), s = i), n.main.search(""), setTimeout(function () {
            n.main.set(s, "value", !1, !1);
          }, 100), n.main.config.closeOnSelect && setTimeout(function () {
            n.main.close();
          }, 100);
        }
      }, e.appendChild(a), t.addable = a), t;
    }, n.prototype.highlightUp = function () {
      var e = this.list.querySelector("." + this.main.config.highlighted),
          t = null;
      if (e) for (t = e.previousSibling; null !== t && t.classList.contains(this.main.config.disabled);) t = t.previousSibling;else {
        var i = this.list.querySelectorAll("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");
        t = i[i.length - 1];
      }

      if (t && t.classList.contains(this.main.config.optgroupLabel) && (t = null), null === t) {
        var s = e.parentNode;

        if (s.classList.contains(this.main.config.optgroup) && s.previousSibling) {
          var n = s.previousSibling.querySelectorAll("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");
          n.length && (t = n[n.length - 1]);
        }
      }

      t && (e && e.classList.remove(this.main.config.highlighted), t.classList.add(this.main.config.highlighted), a.ensureElementInView(this.list, t));
    }, n.prototype.highlightDown = function () {
      var e = this.list.querySelector("." + this.main.config.highlighted),
          t = null;
      if (e) for (t = e.nextSibling; null !== t && t.classList.contains(this.main.config.disabled);) t = t.nextSibling;else t = this.list.querySelector("." + this.main.config.option + ":not(." + this.main.config.disabled + ")");

      if (null === t && null !== e) {
        var i = e.parentNode;
        i.classList.contains(this.main.config.optgroup) && i.nextSibling && (t = i.nextSibling.querySelector("." + this.main.config.option + ":not(." + this.main.config.disabled + ")"));
      }

      t && (e && e.classList.remove(this.main.config.highlighted), t.classList.add(this.main.config.highlighted), a.ensureElementInView(this.list, t));
    }, n.prototype.listDiv = function () {
      var e = document.createElement("div");
      return e.classList.add(this.main.config.list), e;
    }, n.prototype.options = function (e) {
      void 0 === e && (e = "");
      var t,
          i = this.main.data.filtered || this.main.data.data;
      if ((this.list.innerHTML = "") !== e) return (t = document.createElement("div")).classList.add(this.main.config.option), t.classList.add(this.main.config.disabled), t.innerHTML = e, void this.list.appendChild(t);
      if (this.main.config.isAjax && this.main.config.isSearching) return (t = document.createElement("div")).classList.add(this.main.config.option), t.classList.add(this.main.config.disabled), t.innerHTML = this.main.config.searchingText, void this.list.appendChild(t);

      if (0 === i.length) {
        var s = document.createElement("div");
        return s.classList.add(this.main.config.option), s.classList.add(this.main.config.disabled), s.innerHTML = this.main.config.searchText, void this.list.appendChild(s);
      }

      for (var n = function (e) {
        if (e.hasOwnProperty("label")) {
          var t = e,
              n = document.createElement("div");
          n.classList.add(c.main.config.optgroup);
          var i = document.createElement("div");
          i.classList.add(c.main.config.optgroupLabel), c.main.config.selectByGroup && c.main.config.isMultiple && i.classList.add(c.main.config.optgroupLabelSelectable), i.innerHTML = t.label, n.appendChild(i);
          var s = t.options;

          if (s) {
            for (var a = 0, o = s; a < o.length; a++) {
              var l = o[a];
              n.appendChild(c.option(l));
            }

            if (c.main.config.selectByGroup && c.main.config.isMultiple) {
              var r = c;
              i.addEventListener("click", function (e) {
                e.preventDefault(), e.stopPropagation();

                for (var t = 0, i = n.children; t < i.length; t++) {
                  var s = i[t];
                  -1 !== s.className.indexOf(r.main.config.option) && s.click();
                }
              });
            }
          }

          c.list.appendChild(n);
        } else c.list.appendChild(c.option(e));
      }, c = this, a = 0, o = i; a < o.length; a++) n(o[a]);
    }, n.prototype.option = function (r) {
      if (r.placeholder) {
        var e = document.createElement("div");
        return e.classList.add(this.main.config.option), e.classList.add(this.main.config.hide), e;
      }

      var t = document.createElement("div");
      t.classList.add(this.main.config.option), r.class && r.class.split(" ").forEach(function (e) {
        t.classList.add(e);
      }), r.style && (t.style.cssText = r.style);
      var c = this.main.data.getSelected();
      t.dataset.id = r.id, this.main.config.searchHighlight && this.main.slim && r.innerHTML && "" !== this.main.slim.search.input.value.trim() ? t.innerHTML = a.highlight(r.innerHTML, this.main.slim.search.input.value, this.main.config.searchHighlighter) : r.innerHTML && (t.innerHTML = r.innerHTML), this.main.config.showOptionTooltips && t.textContent && t.setAttribute("title", t.textContent);
      var d = this;
      t.addEventListener("click", function (e) {
        e.preventDefault(), e.stopPropagation();
        var t = this.dataset.id;

        if (!0 === r.selected && d.main.config.allowDeselectOption) {
          var i = !1;

          if (d.main.beforeOnChange && d.main.config.isMultiple || (i = !0), d.main.beforeOnChange && d.main.config.isMultiple) {
            for (var s = d.main.data.getSelected(), n = JSON.parse(JSON.stringify(s)), a = 0; a < n.length; a++) n[a].id === t && n.splice(a, 1);

            !1 !== d.main.beforeOnChange(n) && (i = !0);
          }

          i && (d.main.config.isMultiple ? (d.main.data.removeFromSelected(t, "id"), d.main.render(), d.main.select.setValue(), d.main.data.onDataChange()) : d.main.set(""));
        } else {
          if (r.disabled || r.selected) return;
          if (d.main.config.limit && Array.isArray(c) && d.main.config.limit <= c.length) return;

          if (d.main.beforeOnChange) {
            var o = void 0,
                l = JSON.parse(JSON.stringify(d.main.data.getObjectFromData(t)));
            l.selected = !0, d.main.config.isMultiple ? (o = JSON.parse(JSON.stringify(c))).push(l) : o = JSON.parse(JSON.stringify(l)), !1 !== d.main.beforeOnChange(o) && d.main.set(t, "id", d.main.config.closeOnSelect);
          } else d.main.set(t, "id", d.main.config.closeOnSelect);
        }
      });
      var i = c && a.isValueInArrayOfObjects(c, "id", r.id);
      return (r.disabled || i) && (t.onclick = null, d.main.config.allowDeselectOption || t.classList.add(this.main.config.disabled), d.main.config.hideSelectedOption && t.classList.add(this.main.config.hide)), i ? t.classList.add(this.main.config.optionSelected) : t.classList.remove(this.main.config.optionSelected), t;
    }, n);

    function n(e) {
      this.main = e.main, this.container = this.containerDiv(), this.content = this.contentDiv(), this.search = this.searchDiv(), this.list = this.listDiv(), this.options(), this.singleSelected = null, this.multiSelected = null, this.main.config.isMultiple ? (this.multiSelected = this.multiSelectedDiv(), this.multiSelected && this.container.appendChild(this.multiSelected.container)) : (this.singleSelected = this.singleSelectedDiv(), this.container.appendChild(this.singleSelected.container)), this.main.config.addToBody ? (this.content.classList.add(this.main.config.id), document.body.appendChild(this.content)) : this.container.appendChild(this.content), this.content.appendChild(this.search.container), this.content.appendChild(this.list);
    }

    t.Slim = s;
  }], n.c = s, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var s in t) n.d(i, s, function (e) {
      return t[e];
    }.bind(null, s));
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2).default;

  function n(e) {
    if (s[e]) return s[e].exports;
    var t = s[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return i[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports;
  }

  var i, s;
});
},{}],"js/dropdownSelector.js":[function(require,module,exports) {
"use strict";

var _slimSelect = _interopRequireDefault(require("slim-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var regions = [{
  text: 'Выберите из списка',
  value: 'none'
}, {
  text: 'г. Москва',
  value: 'г. Москва'
}, {
  text: 'Санкт-Петербург',
  value: 'Санкт-Петербург'
}, {
  text: 'Алтайский край',
  value: 'Алтайский край'
}, {
  text: 'Амурская область',
  value: 'Амурская область'
}, {
  text: 'Архангельская область',
  value: 'Архангельская область'
}, {
  text: 'Астраханская область',
  value: 'Астраханская область'
}, {
  text: 'Белгородская область',
  value: 'Белгородская область'
}, {
  text: 'Брянская область',
  value: 'Брянская область'
}, {
  text: 'Владимирская область',
  value: 'Владимирская область'
}, {
  text: 'Волгоградская область',
  value: 'Волгоградская область'
}, {
  text: 'Вологодская область',
  value: 'Вологодская область'
}, {
  text: 'Воронежская область',
  value: 'Воронежская область'
}, {
  text: 'Еврейская автономная область',
  value: 'Еврейская автономная область'
}, {
  text: 'Забайкальский край',
  value: 'Забайкальский край'
}, {
  text: 'Ивановская область',
  value: 'Ивановская область'
}, {
  text: 'Иные территории, включая город и космодром Байконур',
  value: 'Иные территории, включая город и космодром Байконур'
}, {
  text: 'Иркутская область',
  value: 'Иркутская область'
}, {
  text: 'Кабардино-Балкарская Республика',
  value: 'Кабардино-Балкарская Республика'
}, {
  text: 'Калининградская область',
  value: 'Калининградская область'
}, {
  text: 'Калужская область',
  value: 'Калужская область'
}, {
  text: 'Камчатский край',
  value: 'Камчатский край'
}, {
  text: 'Карачаево-Черкесская Республика',
  value: 'Карачаево-Черкесская Республика'
}, {
  text: 'Кемеровская область',
  value: 'Кемеровская область'
}, {
  text: 'Кировская область',
  value: 'Кировская область'
}, {
  text: 'Костромская область',
  value: 'Костромская область'
}, {
  text: 'Краснодарский край',
  value: 'Краснодарский край'
}, {
  text: 'Красноярский край',
  value: 'Красноярский край'
}, {
  text: 'Курганская область',
  value: 'Курганская область'
}, {
  text: 'Курская область',
  value: 'Курская область'
}, {
  text: 'Ленинградская область',
  value: 'Ленинградская область'
}, {
  text: 'Липецкая область',
  value: 'Липецкая область'
}, {
  text: 'Магаданская область',
  value: 'Магаданская область'
}, {
  text: 'Московская область',
  value: 'Московская область'
}, {
  text: 'Мурманская область',
  value: 'Мурманская область'
}, {
  text: 'Ненецкий автономный округ',
  value: 'Ненецкий автономный округ'
}, {
  text: 'Нижегородская область',
  value: 'Нижегородская область'
}, {
  text: 'Новгородская область',
  value: 'Новгородская область'
}, {
  text: 'Новосибирская область',
  value: 'Новосибирская область'
}, {
  text: 'Омская область',
  value: 'Омская область'
}, {
  text: 'Оренбургская область',
  value: 'Оренбургская область'
}, {
  text: 'Орловская область',
  value: 'Орловская область'
}, {
  text: 'Пензенская область',
  value: 'Пензенская область'
}, {
  text: 'Пермский край',
  value: 'Пермский край'
}, {
  text: 'Приморский край',
  value: 'Приморский край'
}, {
  text: 'Псковская область',
  value: 'Псковская область'
}, {
  text: 'Республика Адыгея (Адыгея)',
  value: 'Республика Адыгея (Адыгея)'
}, {
  text: 'Республика Алтай',
  value: 'Республика Алтай'
}, {
  text: 'Республика Башкортостан',
  value: 'Республика Башкортостан'
}, {
  text: 'Республика Бурятия',
  value: 'Республика Бурятия'
}, {
  text: 'Республика Дагестан',
  value: 'Республика Дагестан'
}, {
  text: 'Республика Ингушетия',
  value: 'Республика Ингушетия'
}, {
  text: 'Республика Калмыкия',
  value: 'Республика Калмыкия'
}, {
  text: 'Республика Карелия',
  value: 'Республика Карелия'
}, {
  text: 'Республика Коми',
  value: 'Республика Коми'
}, {
  text: 'Республика Крым',
  value: 'Республика Крым'
}, {
  text: 'Республика Марий Эл',
  value: 'Республика Марий Эл'
}, {
  text: 'Республика Мордовия',
  value: 'Республика Мордовия'
}, {
  text: 'Республика Саха (Якутия)',
  value: 'Республика Саха (Якутия)'
}, {
  text: 'Республика Северная Осетия - Алания',
  value: 'Республика Северная Осетия - Алания'
}, {
  text: 'Республика Татарстан (Татарстан)',
  value: 'Республика Татарстан (Татарстан)'
}, {
  text: 'Республика Тыва',
  value: 'Республика Тыва'
}, {
  text: 'Республика Хакасия',
  value: 'Республика Хакасия'
}, {
  text: 'Ростовская область',
  value: 'Ростовская область'
}, {
  text: 'Рязанская область',
  value: 'Рязанская область'
}, {
  text: 'Самарская область',
  value: 'Самарская область'
}, {
  text: 'Саратовская область',
  value: 'Саратовская область'
}, {
  text: 'Сахалинская область',
  value: 'Сахалинская область'
}, {
  text: 'Свердловская область',
  value: 'Свердловская область'
}, {
  text: 'Севастополь',
  value: 'Севастополь'
}, {
  text: 'Смоленская область',
  value: 'Смоленская область'
}, {
  text: 'Ставропольский край',
  value: 'Ставропольский край'
}, {
  text: 'Тамбовская область',
  value: 'Тамбовская область'
}, {
  text: 'Тверская область',
  value: 'Тверская область'
}, {
  text: 'Томская область',
  value: 'Томская область'
}, {
  text: 'Тульская область',
  value: 'Тульская область'
}, {
  text: 'Тюменская область',
  value: 'Тюменская область'
}, {
  text: 'Удмуртская Республика',
  value: 'Удмуртская Республика'
}, {
  text: 'Ульяновская область',
  value: 'Ульяновская область'
}, {
  text: 'Хабаровский край',
  value: 'Хабаровский край'
}, {
  text: 'Ханты-Мансийский автономный округ - Югра',
  value: 'Ханты-Мансийский автономный округ - Югра'
}, {
  text: 'Челябинская область',
  value: 'Челябинская область'
}, {
  text: 'Чеченская Республика',
  value: 'Чеченская Республика'
}, {
  text: 'Чувашская Республика - Чувашия',
  value: 'Чувашская Республика - Чувашия'
}, {
  text: 'Чукотский автономный округ',
  value: 'Чукотский автономный округ'
}, {
  text: 'Ямало-Ненецкий автономный округ',
  value: 'Ямало-Ненецкий автономный округ'
}, {
  text: 'Ярославская область',
  value: 'Ярославская область'
}];

if (document.getElementById('callbackRegion')) {
  // Applying & configuring SlimSelect
  var regionSelector = new _slimSelect.default({
    select: '#callbackRegion',
    placeholder: 'Выберите регион',
    searchPlaceholder: 'Поиск',
    searchText: 'Нет результатов',
    searchFocus: false,
    showContent: 'down',
    data: regions
  });
}
},{"slim-select":"../node_modules/slim-select/dist/slimselect.min.js"}],"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ = _typeof;
exports.a = _createClass;
exports.b = _classCallCheck;
exports.c = _objectWithoutProperties;
exports.d = _inherits;
exports.e = _possibleConstructorReturn;
exports.f = _getPrototypeOf;
exports.g = _get;
exports.h = _set;
exports.i = _slicedToArray;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    exports._ = _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    exports._ = _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  exports.f = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    exports.g = _get = Reflect.get;
  } else {
    exports.g = _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
},{}],"../node_modules/imask/esm/core/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeRegExp = escapeRegExp;
exports.forceDirection = forceDirection;
exports.indexInDirection = indexInDirection;
exports.isString = isString;
exports.objectIncludes = objectIncludes;
exports.posInDirection = posInDirection;
exports.DIRECTION = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/


var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */

exports.DIRECTION = DIRECTION;

function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */


function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */


function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */


function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes


function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && (0, _rollupPluginBabelHelpers3c58f0e._)(a) === 'object' && (0, _rollupPluginBabelHelpers3c58f0e._)(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js"}],"../node_modules/imask/esm/core/action-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

var _utils = require("./utils.js");

/** Provides details of changing input */
var ActionDetails = /*#__PURE__*/function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, ActionDetails);
    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  (0, _rollupPluginBabelHelpers3c58f0e.a)(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return _utils.DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? _utils.DIRECTION.RIGHT : _utils.DIRECTION.LEFT;
    }
  }]);
  return ActionDetails;
}();

var _default = ActionDetails;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","./utils.js":"../node_modules/imask/esm/core/utils.js"}],"../node_modules/imask/esm/core/change-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var ChangeDetails = /*#__PURE__*/function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, ChangeDetails);
    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  (0, _rollupPluginBabelHelpers3c58f0e.a)(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);
  return ChangeDetails;
}();

var _default = ChangeDetails;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js"}],"../node_modules/imask/esm/core/continuous-tail-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

/** Provides details of continuous extracted tail */
var ContinuousTailDetails = /*#__PURE__*/function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, ContinuousTailDetails);
    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.value.length) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);
  return ContinuousTailDetails;
}();

var _default = ContinuousTailDetails;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js"}],"../node_modules/imask/esm/core/holder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // currently available only for input-like elements

  return new IMask.InputMask(el, opts);
}

var _default = IMask;
exports.default = _default;
},{}],"../node_modules/imask/esm/masked/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

var _utils = require("../core/utils.js");

var _changeDetails = _interopRequireDefault(require("../core/change-details.js"));

var _continuousTailDetails = _interopRequireDefault(require("../core/continuous-tail-details.js"));

var _holder = _interopRequireDefault(require("../core/holder.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Supported mask type */

/** Provides common masking stuff */
var Masked = /*#__PURE__*/function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */
  function Masked(opts) {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, Masked);
    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, {}, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  (0, _rollupPluginBabelHelpers3c58f0e.a)(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "reset",

    /** Resets value */
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "resolve",

    /** Resolve new value */
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "nearestInputPos",

    /** Finds nearest input position in direction */
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _continuousTailDetails.default(this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if ((0, _utils.isString)(tail)) tail = new _continuousTailDetails.default(String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ch = this.doPrepare(ch, flags);
      if (!ch) return new _changeDetails.default();
      this._value += ch;
      return new _changeDetails.default({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;

      var details = this._appendCharRaw(ch, flags);

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.shiftBefore(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new _changeDetails.default();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new _changeDetails.default();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!(0, _utils.isString)(str)) throw new Error('value should be string');
      var details = new _changeDetails.default();
      var checkTail = (0, _utils.isString)(tail) ? new _continuousTailDetails.default(String(tail)) : tail;
      if (flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new _changeDetails.default();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var startChangePos = this.nearestInputPos(start, removeDirection);
      var changeDetails = new _changeDetails.default({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
        input: true
      }, tail));
      return changeDetails;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }]);
  return Masked;
}();

Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
_holder.default.Masked = Masked;
var _default = Masked;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js"}],"../node_modules/imask/esm/masked/factory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maskedClass = maskedClass;
exports.default = void 0;

require("../_rollupPluginBabelHelpers-3c58f0e3.js");

var _utils = require("../core/utils.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Get Masked class by mask type */
function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return _holder.default.MaskedRegExp; // $FlowFixMe

  if ((0, _utils.isString)(mask)) return _holder.default.MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return _holder.default.MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return _holder.default.MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return _holder.default.MaskedDynamic; // $FlowFixMe

  if (_holder.default.Masked && mask.prototype instanceof _holder.default.Masked) return mask; // $FlowFixMe

  if (mask instanceof Function) return _holder.default.MaskedFunction; // $FlowFixMe

  if (mask instanceof _holder.default.Masked) return mask.constructor;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return _holder.default.Masked;
}
/** Creates new {@link Masked} depending on mask type */


function createMask(opts) {
  // $FlowFixMe
  if (_holder.default.Masked && opts instanceof _holder.default.Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (_holder.default.Masked && mask instanceof _holder.default.Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}

_holder.default.createMask = createMask;
var _default = createMask;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js"}],"../node_modules/imask/esm/masked/pattern/input-definition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_INPUT_DEFINITIONS = exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../../_rollupPluginBabelHelpers-3c58f0e3.js");

var _utils = require("../../core/utils.js");

var _changeDetails = _interopRequireDefault(require("../../core/change-details.js"));

require("../../core/holder.js");

var _factory = _interopRequireDefault(require("../factory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

exports.DEFAULT_INPUT_DEFINITIONS = DEFAULT_INPUT_DEFINITIONS;

var PatternInputDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, PatternInputDefinition);
    var mask = opts.mask,
        blockOpts = (0, _rollupPluginBabelHelpers3c58f0e.c)(opts, ["mask"]);
    this.masked = (0, _factory.default)({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this._isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this._isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new _changeDetails.default();
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this._isFilled) return new _changeDetails.default();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(str, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this._isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _changeDetails.default();
      if (this._isFilled || this.isOptional) return details;
      this._isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case _utils.DIRECTION.LEFT:
        case _utils.DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case _utils.DIRECTION.RIGHT:
        case _utils.DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case _utils.DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        _isFilled: this._isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this._isFilled = state._isFilled;
    }
  }]);
  return PatternInputDefinition;
}();

var _default = PatternInputDefinition;
exports.default = _default;
},{"../../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../../core/utils.js":"../node_modules/imask/esm/core/utils.js","../../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../../core/holder.js":"../node_modules/imask/esm/core/holder.js","../factory.js":"../node_modules/imask/esm/masked/factory.js"}],"../node_modules/imask/esm/masked/pattern/fixed-definition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../../_rollupPluginBabelHelpers-3c58f0e3.js");

var _utils = require("../../core/utils.js");

var _changeDetails = _interopRequireDefault(require("../../core/change-details.js"));

var _continuousTailDetails = _interopRequireDefault(require("../../core/continuous-tail-details.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatternFixedDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, PatternFixedDefinition);
    Object.assign(this, opts);
    this._value = '';
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(PatternFixedDefinition, [{
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new _changeDetails.default();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case _utils.DIRECTION.LEFT:
        case _utils.DIRECTION.FORCE_LEFT:
          return minPos;

        case _utils.DIRECTION.NONE:
        case _utils.DIRECTION.RIGHT:
        case _utils.DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new _changeDetails.default();
      if (this._value) return details;
      var appended = this.char === str[0];
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _changeDetails.default();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _continuousTailDetails.default('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if ((0, _utils.isString)(tail)) tail = new _continuousTailDetails.default(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str, flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);
  return PatternFixedDefinition;
}();

var _default = PatternFixedDefinition;
exports.default = _default;
},{"../../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../../core/utils.js":"../node_modules/imask/esm/core/utils.js","../../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js"}],"../node_modules/imask/esm/masked/pattern/chunk-tail-details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../../_rollupPluginBabelHelpers-3c58f0e3.js");

var _utils = require("../../core/utils.js");

var _changeDetails = _interopRequireDefault(require("../../core/change-details.js"));

var _continuousTailDetails = _interopRequireDefault(require("../../core/continuous-tail-details.js"));

var _holder = _interopRequireDefault(require("../../core/holder.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChunksTailDetails = /*#__PURE__*/function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, ChunksTailDetails);
    this.chunks = chunks;
    this.from = from;
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if ((0, _utils.isString)(tailChunk)) tailChunk = new _continuousTailDetails.default(String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof _continuousTailDetails.default) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof _holder.default.MaskedPattern)) {
        var tail = new _continuousTailDetails.default(this.toString());
        return tail.appendTo(masked);
      }

      var details = new _changeDetails.default();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }

      return details;
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.chunks.length) return '';
      var chunkShiftPos = pos - this.from;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shiftBefore(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = (0, _rollupPluginBabelHelpers3c58f0e.c)(state, ["chunks"]);
      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new _continuousTailDetails.default(); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }]);
  return ChunksTailDetails;
}();

var _default = ChunksTailDetails;
exports.default = _default;
},{"../../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../../core/utils.js":"../node_modules/imask/esm/core/utils.js","../../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../../core/holder.js":"../node_modules/imask/esm/core/holder.js"}],"../node_modules/imask/esm/masked/regexp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

require("../core/utils.js");

require("../core/change-details.js");

require("../core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

var _base = _interopRequireDefault(require("./base.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Masking by RegExp */
var MaskedRegExp = /*#__PURE__*/function (_Masked) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(MaskedRegExp, _Masked);

  function MaskedRegExp() {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, MaskedRegExp);
    return (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedRegExp).apply(this, arguments));
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(MaskedRegExp, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedRegExp;
}(_base.default);

_holder.default.MaskedRegExp = MaskedRegExp;
var _default = MaskedRegExp;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./base.js":"../node_modules/imask/esm/masked/base.js"}],"../node_modules/imask/esm/masked/pattern.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

var _utils = require("../core/utils.js");

var _changeDetails = _interopRequireDefault(require("../core/change-details.js"));

require("../core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

var _base = _interopRequireDefault(require("./base.js"));

var _factory = _interopRequireDefault(require("./factory.js"));

var _inputDefinition = _interopRequireWildcard(require("./pattern/input-definition.js"));

var _fixedDefinition = _interopRequireDefault(require("./pattern/fixed-definition.js"));

var _chunkTailDetails = _interopRequireDefault(require("./pattern/chunk-tail-details.js"));

require("./regexp.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var MaskedPattern = /*#__PURE__*/function (_Masked) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(MaskedPattern, _Masked);
  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */

  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, MaskedPattern); // TODO type $Shape<MaskedPatternOptions>={} does not work

    opts.definitions = Object.assign({}, _inputDefinition.DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern).call(this, Object.assign({}, MaskedPattern.DEFAULTS, {}, opts)));
  }
  /**
    @override
    @param {Object} opts
  */


  (0, _rollupPluginBabelHelpers3c58f0e.a)(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              var maskedBlock = (0, _factory.default)(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];

        var _isInput = (char in defs);

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          _isInput = false;
        }

        var def = _isInput ? new _inputDefinition.default({
          parent: this,
          lazy: this.lazy,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new _fixedDefinition.default({
          char: char,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "reset",

    /**
      @override
    */
    value: function reset() {
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",

    /**
      @override
    */
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",

    /**
      @override
    */
    value: function appendTail(tail) {
      return (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ch = this.doPrepare(ch, flags);

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new _changeDetails.default();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, flags);

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new _chunkTailDetails.default();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof _chunkTailDetails.default) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new _changeDetails.default();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var removeDetails = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils.DIRECTION.NONE; // TODO refactor - extract alignblock

      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset,
          beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock) return cursorPos;
      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, (0, _utils.forceDirection)(direction));
      }

      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

      if (direction === _utils.DIRECTION.NONE) {
        // NONE direction used to calculate start input position if no chars were removed
        // FOR NONE:
        // -
        // input|any
        // ->
        //  any|input
        // <-
        //  filled-input|any
        // check if first block at left is input
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, _utils.DIRECTION.NONE); // is input

          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        } // ->


        var firstInputAtRight = searchBlockIndex;

        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];

          var _blockInputPos = blockAtRight.nearestInputPos(0, _utils.DIRECTION.NONE);

          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        } // <-
        // find first non-fixed symbol


        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];

          var _blockInputPos2 = _block3.nearestInputPos(0, _utils.DIRECTION.NONE); // is input


          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }

        return cursorPos;
      }

      if (direction === _utils.DIRECTION.LEFT || direction === _utils.DIRECTION.FORCE_LEFT) {
        // -
        //  any|filled-input
        // <-
        //  any|first not empty is not-len-aligned
        //  not-0-aligned|any
        // ->
        //  any|not-len-aligned or end
        // check if first block at right is filled input
        var firstFilledBlockIndexAtRight;

        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
          if (this._blocks[_bi2].value) {
            firstFilledBlockIndexAtRight = _bi2;
            break;
          }
        }

        if (firstFilledBlockIndexAtRight != null) {
          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

          var _blockInputPos3 = filledBlock.nearestInputPos(0, _utils.DIRECTION.RIGHT);

          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
            // filled block is input
            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
          }
        } // <-
        // find this vars


        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];

          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, _utils.DIRECTION.FORCE_LEFT);

          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              // aligned inside block - return immediately
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              // found filled
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }

        if (direction === _utils.DIRECTION.LEFT) {
          // try find first empty input before start searching position only when not forced
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];

            var _blockInputPos5 = _block5.nearestInputPos(0, _utils.DIRECTION.NONE);

            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
          }
        } // process overflow


        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        } // for lazy if has aligned left inside fixed and has came to the start - use start position


        if (direction === _utils.DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }

        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        } // find first input


        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];

          var _blockInputPos6 = _block6.nearestInputPos(0, _utils.DIRECTION.NONE); // is input


          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }

        return 0;
      }

      if (direction === _utils.DIRECTION.RIGHT || direction === _utils.DIRECTION.FORCE_RIGHT) {
        // ->
        //  any|not-len-aligned and filled
        //  any|not-len-aligned
        // <-
        //  not-0-aligned or start|any
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;

        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];

          var _blockInputPos7 = _block7.nearestInputPos(0, _utils.DIRECTION.NONE);

          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }

        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];

            var _blockInputPos8 = _block8.nearestInputPos(0, _utils.DIRECTION.FORCE_RIGHT);

            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }

          return direction === _utils.DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }

        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];

          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, _utils.DIRECTION.LEFT);

          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

            if (alignedPos >= cursorPos) return alignedPos;
            break;
          }
        }
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = (0, _rollupPluginBabelHelpers3c58f0e.c)(state, ["_blocks"]);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      (0, _rollupPluginBabelHelpers3c58f0e.h)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      (0, _rollupPluginBabelHelpers3c58f0e.h)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      (0, _rollupPluginBabelHelpers3c58f0e.h)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedPattern.prototype), "value", value, this, true);
    }
  }]);
  return MaskedPattern;
}(_base.default);

MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _inputDefinition.default;
MaskedPattern.FixedDefinition = _fixedDefinition.default;

function isInput(block) {
  if (!block) return false;
  var value = block.value;
  return !value || block.nearestInputPos(0, _utils.DIRECTION.NONE) !== value.length;
}

_holder.default.MaskedPattern = MaskedPattern;
var _default = MaskedPattern;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./base.js":"../node_modules/imask/esm/masked/base.js","./factory.js":"../node_modules/imask/esm/masked/factory.js","./pattern/input-definition.js":"../node_modules/imask/esm/masked/pattern/input-definition.js","./pattern/fixed-definition.js":"../node_modules/imask/esm/masked/pattern/fixed-definition.js","./pattern/chunk-tail-details.js":"../node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./regexp.js":"../node_modules/imask/esm/masked/regexp.js"}],"../node_modules/imask/esm/masked/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

require("../core/utils.js");

require("../core/change-details.js");

require("../core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

require("./base.js");

require("./factory.js");

require("./pattern/input-definition.js");

require("./pattern/fixed-definition.js");

require("./pattern/chunk-tail-details.js");

require("./regexp.js");

var _pattern = _interopRequireDefault(require("./pattern.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Pattern which accepts ranges */
var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(MaskedRange, _MaskedPattern);

  function MaskedRange() {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, MaskedRange);
    return (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedRange).apply(this, arguments));
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(MaskedRange, [{
    key: "_update",

    /**
      @override
    */
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = (0, _rollupPluginBabelHelpers3c58f0e.i)(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      str = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
      if (!this.autofix) return str;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var val = this.value;
      var prepStr = '';

      for (var ci = 0; ci < str.length; ++ci) {
        var nextVal = val + prepStr + str[ci];

        var _this$boundaries = this.boundaries(nextVal),
            _this$boundaries2 = (0, _rollupPluginBabelHelpers3c58f0e.i)(_this$boundaries, 2),
            minstr = _this$boundaries2[0],
            maxstr = _this$boundaries2[1];

        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
      }

      return prepStr;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = (0, _rollupPluginBabelHelpers3c58f0e.i)(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "_matchFrom",

    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    get: function get() {
      return this.maxLength - String(this.from).length;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }]);
  return MaskedRange;
}(_pattern.default);

_holder.default.MaskedRange = MaskedRange;
var _default = MaskedRange;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./base.js":"../node_modules/imask/esm/masked/base.js","./factory.js":"../node_modules/imask/esm/masked/factory.js","./pattern/input-definition.js":"../node_modules/imask/esm/masked/pattern/input-definition.js","./pattern/fixed-definition.js":"../node_modules/imask/esm/masked/pattern/fixed-definition.js","./pattern/chunk-tail-details.js":"../node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./regexp.js":"../node_modules/imask/esm/masked/regexp.js","./pattern.js":"../node_modules/imask/esm/masked/pattern.js"}],"../node_modules/imask/esm/masked/date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

require("../core/utils.js");

require("../core/change-details.js");

require("../core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

require("./base.js");

require("./factory.js");

require("./pattern/input-definition.js");

require("./pattern/fixed-definition.js");

require("./pattern/chunk-tail-details.js");

require("./regexp.js");

var _pattern = _interopRequireDefault(require("./pattern.js"));

var _range = _interopRequireDefault(require("./range.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Date mask */
var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(MaskedDate, _MaskedPattern);
  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */

  function MaskedDate(opts) {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, MaskedDate);
    return (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDate).call(this, Object.assign({}, MaskedDate.DEFAULTS, {}, opts)));
  }
  /**
    @override
  */


  (0, _rollupPluginBabelHelpers3c58f0e.a)(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b)) b.autofix = opts.autofix;
      });
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      (0, _rollupPluginBabelHelpers3c58f0e.h)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDate.prototype), "typedValue", value, this, true);
    }
  }]);
  return MaskedDate;
}(_pattern.default);

MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = (0, _rollupPluginBabelHelpers3c58f0e.i)(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: _range.default,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: _range.default,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: _range.default,
      from: 1900,
      to: 9999
    }
  };
};

_holder.default.MaskedDate = MaskedDate;
var _default = MaskedDate;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./base.js":"../node_modules/imask/esm/masked/base.js","./factory.js":"../node_modules/imask/esm/masked/factory.js","./pattern/input-definition.js":"../node_modules/imask/esm/masked/pattern/input-definition.js","./pattern/fixed-definition.js":"../node_modules/imask/esm/masked/pattern/fixed-definition.js","./pattern/chunk-tail-details.js":"../node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./regexp.js":"../node_modules/imask/esm/masked/regexp.js","./pattern.js":"../node_modules/imask/esm/masked/pattern.js","./range.js":"../node_modules/imask/esm/masked/range.js"}],"../node_modules/imask/esm/controls/mask-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Generic element API to use with mask
  @interface
*/
var MaskElement = /*#__PURE__*/function () {
  function MaskElement() {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, MaskElement);
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(MaskElement, [{
    key: "select",

    /** Safely sets element selection */
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",

    /** Should be overriden in subclasses */
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }, {
    key: "selectionStart",

    /** */

    /** */

    /** */

    /** Safely returns selection start */
    get: function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
  }]);
  return MaskElement;
}();

_holder.default.MaskElement = MaskElement;
var _default = MaskElement;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js"}],"../node_modules/imask/esm/controls/html-mask-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

var _maskElement = _interopRequireDefault(require("./mask-element.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Bridge between HTMLElement and {@link Masked} */
var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(HTMLMaskElement, _MaskElement);
  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */

  function HTMLMaskElement(input) {
    var _this;

    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, HTMLMaskElement);
    _this = (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(HTMLMaskElement).call(this));
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  (0, _rollupPluginBabelHelpers3c58f0e.a)(HTMLMaskElement, [{
    key: "_unsafeSelect",

    /**
      Sets HTMLElement selection
      @override
    */
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "bindEvents",

    /**
      Binds HTMLElement events to mask internal events
      @override
    */
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }, {
    key: "rootElement",
    get: function get() {
      return this.input.getRootNode ? this.input.getRootNode() : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
  }]);
  return HTMLMaskElement;
}(_maskElement.default);

HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_holder.default.HTMLMaskElement = HTMLMaskElement;
var _default = HTMLMaskElement;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./mask-element.js":"../node_modules/imask/esm/controls/mask-element.js"}],"../node_modules/imask/esm/controls/html-contenteditable-mask-element.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

require("./mask-element.js");

var _htmlMaskElement = _interopRequireDefault(require("./html-mask-element.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(HTMLContenteditableMaskElement, _HTMLMaskElement);

  function HTMLContenteditableMaskElement() {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, HTMLContenteditableMaskElement);
    return (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(HTMLContenteditableMaskElement).apply(this, arguments));
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelect",

    /**
      Sets HTMLElement selection
      @override
    */
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "_unsafeSelectionStart",

    /**
      Returns HTMLElement selection start
      @override
    */
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && selection.anchorOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      return selection && this._unsafeSelectionStart + String(selection).length;
    }
  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);
  return HTMLContenteditableMaskElement;
}(_htmlMaskElement.default);

_holder.default.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
var _default = HTMLContenteditableMaskElement;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./mask-element.js":"../node_modules/imask/esm/controls/mask-element.js","./html-mask-element.js":"../node_modules/imask/esm/controls/html-mask-element.js"}],"../node_modules/imask/esm/controls/input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

var _utils = require("../core/utils.js");

var _actionDetails = _interopRequireDefault(require("../core/action-details.js"));

require("../core/change-details.js");

require("../core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

require("../masked/base.js");

var _factory = _interopRequireWildcard(require("../masked/factory.js"));

require("../masked/pattern/input-definition.js");

require("../masked/pattern/fixed-definition.js");

require("../masked/pattern/chunk-tail-details.js");

require("../masked/regexp.js");

require("../masked/pattern.js");

require("../masked/range.js");

var _date = _interopRequireDefault(require("../masked/date.js"));

var _maskElement = _interopRequireDefault(require("./mask-element.js"));

var _htmlMaskElement = _interopRequireDefault(require("./html-mask-element.js"));

var _htmlContenteditableMaskElement = _interopRequireDefault(require("./html-contenteditable-mask-element.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Listens to element events and controls changes between element and {@link Masked} */
var InputMask = /*#__PURE__*/function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, InputMask);
    this.el = el instanceof _maskElement.default ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _htmlContenteditableMaskElement.default(el) : new _htmlMaskElement.default(el);
    this.masked = (0, _factory.default)(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  (0, _rollupPluginBabelHelpers3c58f0e.a)(InputMask, [{
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof _date.default;
    }
  }, {
    key: "_bindEvents",

    /**
      Starts listening to element events
      @protected
    */
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "_saveSelection",

    /**
      Stores current selection
      @protected
    */
    value: function _saveSelection()
    /* ev */
    {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = (0, _rollupPluginBabelHelpers3c58f0e.c)(opts, ["mask"]);
      var updateMask = !this.maskEquals(mask);
      var updateOpts = !(0, _utils.objectIncludes)(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, _utils.DIRECTION.LEFT);
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new _actionDetails.default( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _utils.DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }, {
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return;

      if (!(mask instanceof _holder.default.Masked) && this.masked.constructor === (0, _factory.maskedClass)(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = (0, _factory.default)({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
  }]);
  return InputMask;
}();

_holder.default.InputMask = InputMask;
var _default = InputMask;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/action-details.js":"../node_modules/imask/esm/core/action-details.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","../masked/base.js":"../node_modules/imask/esm/masked/base.js","../masked/factory.js":"../node_modules/imask/esm/masked/factory.js","../masked/pattern/input-definition.js":"../node_modules/imask/esm/masked/pattern/input-definition.js","../masked/pattern/fixed-definition.js":"../node_modules/imask/esm/masked/pattern/fixed-definition.js","../masked/pattern/chunk-tail-details.js":"../node_modules/imask/esm/masked/pattern/chunk-tail-details.js","../masked/regexp.js":"../node_modules/imask/esm/masked/regexp.js","../masked/pattern.js":"../node_modules/imask/esm/masked/pattern.js","../masked/range.js":"../node_modules/imask/esm/masked/range.js","../masked/date.js":"../node_modules/imask/esm/masked/date.js","./mask-element.js":"../node_modules/imask/esm/controls/mask-element.js","./html-mask-element.js":"../node_modules/imask/esm/controls/html-mask-element.js","./html-contenteditable-mask-element.js":"../node_modules/imask/esm/controls/html-contenteditable-mask-element.js"}],"../node_modules/imask/esm/imask.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./_rollupPluginBabelHelpers-3c58f0e3.js");

require("./core/utils.js");

require("./core/action-details.js");

require("./core/change-details.js");

require("./core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("./core/holder.js"));

require("./masked/base.js");

require("./masked/factory.js");

require("./masked/pattern/input-definition.js");

require("./masked/pattern/fixed-definition.js");

require("./masked/pattern/chunk-tail-details.js");

require("./masked/regexp.js");

require("./masked/pattern.js");

require("./masked/range.js");

require("./masked/date.js");

require("./controls/mask-element.js");

require("./controls/html-mask-element.js");

require("./controls/html-contenteditable-mask-element.js");

require("./controls/input.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _holder.default;
exports.default = _default;
},{"./_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","./core/utils.js":"../node_modules/imask/esm/core/utils.js","./core/action-details.js":"../node_modules/imask/esm/core/action-details.js","./core/change-details.js":"../node_modules/imask/esm/core/change-details.js","./core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","./core/holder.js":"../node_modules/imask/esm/core/holder.js","./masked/base.js":"../node_modules/imask/esm/masked/base.js","./masked/factory.js":"../node_modules/imask/esm/masked/factory.js","./masked/pattern/input-definition.js":"../node_modules/imask/esm/masked/pattern/input-definition.js","./masked/pattern/fixed-definition.js":"../node_modules/imask/esm/masked/pattern/fixed-definition.js","./masked/pattern/chunk-tail-details.js":"../node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./masked/regexp.js":"../node_modules/imask/esm/masked/regexp.js","./masked/pattern.js":"../node_modules/imask/esm/masked/pattern.js","./masked/range.js":"../node_modules/imask/esm/masked/range.js","./masked/date.js":"../node_modules/imask/esm/masked/date.js","./controls/mask-element.js":"../node_modules/imask/esm/controls/mask-element.js","./controls/html-mask-element.js":"../node_modules/imask/esm/controls/html-mask-element.js","./controls/html-contenteditable-mask-element.js":"../node_modules/imask/esm/controls/html-contenteditable-mask-element.js","./controls/input.js":"../node_modules/imask/esm/controls/input.js"}],"../node_modules/imask/esm/masked/enum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

require("../core/utils.js");

require("../core/change-details.js");

require("../core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

require("./base.js");

require("./factory.js");

require("./pattern/input-definition.js");

require("./pattern/fixed-definition.js");

require("./pattern/chunk-tail-details.js");

require("./regexp.js");

var _pattern = _interopRequireDefault(require("./pattern.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Pattern which validates enum values */
var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(MaskedEnum, _MaskedPattern);

  function MaskedEnum() {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, MaskedEnum);
    return (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedEnum).apply(this, arguments));
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(MaskedEnum, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);
  return MaskedEnum;
}(_pattern.default);

_holder.default.MaskedEnum = MaskedEnum;
var _default = MaskedEnum;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./base.js":"../node_modules/imask/esm/masked/base.js","./factory.js":"../node_modules/imask/esm/masked/factory.js","./pattern/input-definition.js":"../node_modules/imask/esm/masked/pattern/input-definition.js","./pattern/fixed-definition.js":"../node_modules/imask/esm/masked/pattern/fixed-definition.js","./pattern/chunk-tail-details.js":"../node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./regexp.js":"../node_modules/imask/esm/masked/regexp.js","./pattern.js":"../node_modules/imask/esm/masked/pattern.js"}],"../node_modules/imask/esm/masked/number.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

var _utils = require("../core/utils.js");

var _changeDetails = _interopRequireDefault(require("../core/change-details.js"));

require("../core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

var _base = _interopRequireDefault(require("./base.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var MaskedNumber = /*#__PURE__*/function (_Masked) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(MaskedNumber, _Masked);
  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */

  function MaskedNumber(opts) {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, MaskedNumber);
    return (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber).call(this, Object.assign({}, MaskedNumber.DEFAULTS, {}, opts)));
  }
  /**
    @override
  */


  (0, _rollupPluginBabelHelpers3c58f0e.a)(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + (0, _utils.escapeRegExp)(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(_utils.escapeRegExp).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp((0, _utils.escapeRegExp)(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_get2 = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = (0, _rollupPluginBabelHelpers3c58f0e.i)(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators((0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);
      var appendDetails = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = (0, _rollupPluginBabelHelpers3c58f0e.i)(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new _changeDetails.default({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case _utils.DIRECTION.NONE:
        case _utils.DIRECTION.LEFT:
        case _utils.DIRECTION.FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _utils.DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case _utils.DIRECTION.RIGHT:
        case _utils.DIRECTION.FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      (0, _rollupPluginBabelHelpers3c58f0e.h)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      (0, _rollupPluginBabelHelpers3c58f0e.h)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);
  return MaskedNumber;
}(_base.default);

MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
_holder.default.MaskedNumber = MaskedNumber;
var _default = MaskedNumber;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./base.js":"../node_modules/imask/esm/masked/base.js"}],"../node_modules/imask/esm/masked/function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

require("../core/utils.js");

require("../core/change-details.js");

require("../core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

var _base = _interopRequireDefault(require("./base.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Masking by custom Function */
var MaskedFunction = /*#__PURE__*/function (_Masked) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(MaskedFunction, _Masked);

  function MaskedFunction() {
    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, MaskedFunction);
    return (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedFunction).apply(this, arguments));
  }

  (0, _rollupPluginBabelHelpers3c58f0e.a)(MaskedFunction, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);
  return MaskedFunction;
}(_base.default);

_holder.default.MaskedFunction = MaskedFunction;
var _default = MaskedFunction;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./base.js":"../node_modules/imask/esm/masked/base.js"}],"../node_modules/imask/esm/masked/dynamic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rollupPluginBabelHelpers3c58f0e = require("../_rollupPluginBabelHelpers-3c58f0e3.js");

require("../core/utils.js");

var _changeDetails = _interopRequireDefault(require("../core/change-details.js"));

require("../core/continuous-tail-details.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

var _base = _interopRequireDefault(require("./base.js"));

var _factory = _interopRequireDefault(require("./factory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Dynamic mask for choosing apropriate mask in run-time */
var MaskedDynamic = /*#__PURE__*/function (_Masked) {
  (0, _rollupPluginBabelHelpers3c58f0e.d)(MaskedDynamic, _Masked);
  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */

  function MaskedDynamic(opts) {
    var _this;

    (0, _rollupPluginBabelHelpers3c58f0e.b)(this, MaskedDynamic);
    _this = (0, _rollupPluginBabelHelpers3c58f0e.e)(this, (0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic).call(this, Object.assign({}, MaskedDynamic.DEFAULTS, {}, opts)));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  (0, _rollupPluginBabelHelpers3c58f0e.a)(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return (0, _factory.default)(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        var _this$currentMask;

        details.aggregate((_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new _changeDetails.default();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset(); // $FlowFixMe - it's ok, we don't change current mask above

          var d = this.currentMask.append(insertValue, {
            raw: true
          });
          details.tailShift = d.inserted.length - prevValueBeforeTail.length;

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask) this.currentMask.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "remove",

    /**
      @override
    */
    value: function remove() {
      var details = new _changeDetails.default();

      if (this.currentMask) {
        var _this$currentMask3;

        details.aggregate((_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",

    /**
      @override
    */
    value: function extractInput() {
      var _this$currentMask4;

      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractInput.apply(_this$currentMask4, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask5, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args) : (_get3 = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();
      (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask6, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args) : (_get4 = (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      (0, _rollupPluginBabelHelpers3c58f0e.h)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      (0, _rollupPluginBabelHelpers3c58f0e.h)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = (0, _rollupPluginBabelHelpers3c58f0e.c)(state, ["compiledMasks", "currentMaskRef", "currentMask"]);
      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      (0, _rollupPluginBabelHelpers3c58f0e.h)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : (0, _rollupPluginBabelHelpers3c58f0e.g)((0, _rollupPluginBabelHelpers3c58f0e.f)(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);
  return MaskedDynamic;
}(_base.default);

MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
_holder.default.MaskedDynamic = MaskedDynamic;
var _default = MaskedDynamic;
exports.default = _default;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/change-details.js":"../node_modules/imask/esm/core/change-details.js","../core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./base.js":"../node_modules/imask/esm/masked/base.js","./factory.js":"../node_modules/imask/esm/masked/factory.js"}],"../node_modules/imask/esm/masked/pipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPipe = createPipe;
exports.pipe = pipe;
exports.PIPE_TYPE = void 0;

require("../_rollupPluginBabelHelpers-3c58f0e3.js");

require("../core/utils.js");

var _holder = _interopRequireDefault(require("../core/holder.js"));

var _factory = _interopRequireDefault(require("./factory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Mask pipe source and destination types */
var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

exports.PIPE_TYPE = PIPE_TYPE;

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = (0, _factory.default)(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */


function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}

_holder.default.PIPE_TYPE = PIPE_TYPE;
_holder.default.createPipe = createPipe;
_holder.default.pipe = pipe;
},{"../_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","../core/utils.js":"../node_modules/imask/esm/core/utils.js","../core/holder.js":"../node_modules/imask/esm/core/holder.js","./factory.js":"../node_modules/imask/esm/masked/factory.js"}],"../node_modules/imask/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Masked", {
  enumerable: true,
  get: function () {
    return _base.default;
  }
});
Object.defineProperty(exports, "createMask", {
  enumerable: true,
  get: function () {
    return _factory.default;
  }
});
Object.defineProperty(exports, "MaskedRegExp", {
  enumerable: true,
  get: function () {
    return _regexp.default;
  }
});
Object.defineProperty(exports, "MaskedPattern", {
  enumerable: true,
  get: function () {
    return _pattern.default;
  }
});
Object.defineProperty(exports, "MaskedRange", {
  enumerable: true,
  get: function () {
    return _range.default;
  }
});
Object.defineProperty(exports, "MaskedDate", {
  enumerable: true,
  get: function () {
    return _date.default;
  }
});
Object.defineProperty(exports, "MaskElement", {
  enumerable: true,
  get: function () {
    return _maskElement.default;
  }
});
Object.defineProperty(exports, "HTMLMaskElement", {
  enumerable: true,
  get: function () {
    return _htmlMaskElement.default;
  }
});
Object.defineProperty(exports, "HTMLContenteditableMaskElement", {
  enumerable: true,
  get: function () {
    return _htmlContenteditableMaskElement.default;
  }
});
Object.defineProperty(exports, "InputMask", {
  enumerable: true,
  get: function () {
    return _input.default;
  }
});
Object.defineProperty(exports, "MaskedEnum", {
  enumerable: true,
  get: function () {
    return _enum.default;
  }
});
Object.defineProperty(exports, "MaskedNumber", {
  enumerable: true,
  get: function () {
    return _number.default;
  }
});
Object.defineProperty(exports, "MaskedFunction", {
  enumerable: true,
  get: function () {
    return _function.default;
  }
});
Object.defineProperty(exports, "MaskedDynamic", {
  enumerable: true,
  get: function () {
    return _dynamic.default;
  }
});
Object.defineProperty(exports, "PIPE_TYPE", {
  enumerable: true,
  get: function () {
    return _pipe.PIPE_TYPE;
  }
});
Object.defineProperty(exports, "createPipe", {
  enumerable: true,
  get: function () {
    return _pipe.createPipe;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
exports.default = void 0;

require("./_rollupPluginBabelHelpers-3c58f0e3.js");

require("./core/utils.js");

require("./core/action-details.js");

require("./core/change-details.js");

require("./core/continuous-tail-details.js");

require("./core/holder.js");

var _base = _interopRequireDefault(require("./masked/base.js"));

var _factory = _interopRequireDefault(require("./masked/factory.js"));

require("./masked/pattern/input-definition.js");

require("./masked/pattern/fixed-definition.js");

require("./masked/pattern/chunk-tail-details.js");

var _regexp = _interopRequireDefault(require("./masked/regexp.js"));

var _pattern = _interopRequireDefault(require("./masked/pattern.js"));

var _range = _interopRequireDefault(require("./masked/range.js"));

var _date = _interopRequireDefault(require("./masked/date.js"));

var _maskElement = _interopRequireDefault(require("./controls/mask-element.js"));

var _htmlMaskElement = _interopRequireDefault(require("./controls/html-mask-element.js"));

var _htmlContenteditableMaskElement = _interopRequireDefault(require("./controls/html-contenteditable-mask-element.js"));

var _input = _interopRequireDefault(require("./controls/input.js"));

var _imask = _interopRequireDefault(require("./imask.js"));

var _enum = _interopRequireDefault(require("./masked/enum.js"));

var _number = _interopRequireDefault(require("./masked/number.js"));

var _function = _interopRequireDefault(require("./masked/function.js"));

var _dynamic = _interopRequireDefault(require("./masked/dynamic.js"));

var _pipe = require("./masked/pipe.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

try {
  globalThis.IMask = _imask.default;
} catch (e) {}

var _default = _imask.default;
exports.default = _default;
},{"./_rollupPluginBabelHelpers-3c58f0e3.js":"../node_modules/imask/esm/_rollupPluginBabelHelpers-3c58f0e3.js","./core/utils.js":"../node_modules/imask/esm/core/utils.js","./core/action-details.js":"../node_modules/imask/esm/core/action-details.js","./core/change-details.js":"../node_modules/imask/esm/core/change-details.js","./core/continuous-tail-details.js":"../node_modules/imask/esm/core/continuous-tail-details.js","./core/holder.js":"../node_modules/imask/esm/core/holder.js","./masked/base.js":"../node_modules/imask/esm/masked/base.js","./masked/factory.js":"../node_modules/imask/esm/masked/factory.js","./masked/pattern/input-definition.js":"../node_modules/imask/esm/masked/pattern/input-definition.js","./masked/pattern/fixed-definition.js":"../node_modules/imask/esm/masked/pattern/fixed-definition.js","./masked/pattern/chunk-tail-details.js":"../node_modules/imask/esm/masked/pattern/chunk-tail-details.js","./masked/regexp.js":"../node_modules/imask/esm/masked/regexp.js","./masked/pattern.js":"../node_modules/imask/esm/masked/pattern.js","./masked/range.js":"../node_modules/imask/esm/masked/range.js","./masked/date.js":"../node_modules/imask/esm/masked/date.js","./controls/mask-element.js":"../node_modules/imask/esm/controls/mask-element.js","./controls/html-mask-element.js":"../node_modules/imask/esm/controls/html-mask-element.js","./controls/html-contenteditable-mask-element.js":"../node_modules/imask/esm/controls/html-contenteditable-mask-element.js","./controls/input.js":"../node_modules/imask/esm/controls/input.js","./imask.js":"../node_modules/imask/esm/imask.js","./masked/enum.js":"../node_modules/imask/esm/masked/enum.js","./masked/number.js":"../node_modules/imask/esm/masked/number.js","./masked/function.js":"../node_modules/imask/esm/masked/function.js","./masked/dynamic.js":"../node_modules/imask/esm/masked/dynamic.js","./masked/pipe.js":"../node_modules/imask/esm/masked/pipe.js"}],"js/sendHttpRequest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendHttpRequest;

function sendHttpRequest(data, url, method) {
  //console.log('[Inside XHR:] ', data);
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';

    xhr.onload = function () {
      if (this.status >= 200 & this.status < 300) {
        resolve(xhr.response);
      } else {
        // new Error("Проблема с сервером")
        reject(xhr.response);
      }
    };

    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
        errors: ['Проблема с интернет-соединением']
      });
    };

    xhr.send(JSON.stringify(data));
  });
}
},{}],"js/forms-logic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFormByID = void 0;

var _imask = _interopRequireDefault(require("imask"));

var _sendHttpRequest = _interopRequireDefault(require("./sendHttpRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importing input mask plugin
// setting input masks
var inputMaskPhoneOptions = {
  mask: '+7 (000) 000-00-00'
};
var inputMaskTimeOptions = {
  mask: '00:00'
}; // Regular Expressions

var REGEX_PHONE = /^\+\d{1,2}\s+?\(\d{3,5}\)\s+?\d{1,3}-\d{2}-\d{2}$/;
var REGEX_NAME = /[^ ]/;
var REGEX_TIME = /^(?:\d|[01]\d|2[0-3]):[0-5]\d$/; // Validation (suitable for all fields)

var setCssValid = function setCssValid(target) {
  if (target.nextElementSibling) {
    target.nextElementSibling.children[0].classList.remove('fa-check', 'has-text-success', 'has-text-danger');
    target.nextElementSibling.children[0].classList.add('fa-check', 'has-text-success');
  }

  showCheck(target);
  colorSuccess(target);
};

var setCssInvalid = function setCssInvalid(target) {
  hideCheck(target);
  colorWarning(target);
};

var showCheck = function showCheck(target) {
  if (target.nextElementSibling) {
    target.nextElementSibling.classList.remove('is-invisible');
  }
};

var hideCheck = function hideCheck(target) {
  if (target.nextElementSibling) {
    target.nextElementSibling.classList.add('is-invisible');
  }
};

var colorSuccess = function colorSuccess(target) {
  target.classList.add('fieldValid');
  target.classList.remove('fieldInvalid');
};

var colorWarning = function colorWarning(target) {
  target.classList.add('fieldInvalid');
  target.classList.remove('fieldValid');
};

var validateField = function validateField(event, inputMask) {
  var target = event.target;

  if (target.name == 'name') {
    // color validation
    REGEX_NAME.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  }

  if (target.name == 'phone') {
    // color validation
    REGEX_PHONE.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  }

  if (target.name == 'from') {
    // color validation
    REGEX_TIME.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  }

  if (target.name == 'till') {
    // color validation
    REGEX_TIME.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  }

  if (target.name == 'city') {
    // color validation
    if (target.value === 'none') {
      colorWarning(target.nextElementSibling.firstChild);
      target.nextElementSibling.firstChild.style.borderColor = '#ffcc00';
    } else {
      //console.log(target.nextElementSibling);
      colorSuccess(target.nextElementSibling.firstChild);
      target.nextElementSibling.firstChild.style.borderColor = 'hsl(141, 71%, 48%)';
      target.nextElementSibling.firstChild.style.color = 'rgb(54, 54, 54)';
    } //REGEX_NAME.test(target.value) ? setCssValid(target) : setCssInvalid(target);

  } // if (target.name == 'day') {
  //   // color validation
  //   let month = target.closest('.field-body').children[1].children[0]
  //     .children[0];
  //   let year = target.closest('.field-body').children[2].children[0]
  //     .children[0];
  //   REGEX_DAY.test(target.value) ? setCssValid(target) : setCssInvalid(target);
  //   if (
  //     REGEX_MONTH.test(month.value) &&
  //     REGEX_YEAR.test(year.value) &&
  //     REGEX_DAY.test(target.value)
  //   ) {
  //     setCssValid(year);
  //     setCssValid(month);
  //   } else {
  //     if (REGEX_YEAR.test(year.value)) {
  //       colorSuccess(year);
  //       hideCheck(year);
  //     } else {
  //       setCssInvalid(year);
  //     }
  //     REGEX_MONTH.test(month.value) ? colorSuccess(month) : colorWarning(month);
  //   }
  //   // reset if wrong
  //   if (!'0123'.includes(target.value[0])) {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  //   if (+target.value < 0 || +target.value > 31) {
  //     inputMask.value = '';
  //   }
  //   if (target.value === '00') {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  // }
  // if (target.name == 'month') {
  //   // color validation
  //   let day = target.closest('.field-body').children[0].children[0].children[0];
  //   let year = target.closest('.field-body').children[2].children[0]
  //     .children[0];
  //   REGEX_MONTH.test(target.value)
  //     ? setCssValid(target)
  //     : setCssInvalid(target);
  //   if (
  //     REGEX_DAY.test(day.value) &&
  //     REGEX_YEAR.test(year.value) &&
  //     REGEX_MONTH.test(target.value)
  //   ) {
  //     setCssValid(year);
  //     setCssValid(day);
  //   } else {
  //     if (REGEX_YEAR.test(year.value)) {
  //       colorSuccess(year);
  //       hideCheck(year);
  //     } else {
  //       setCssInvalid(year);
  //     }
  //     REGEX_DAY.test(day.value) ? colorSuccess(day) : colorWarning(day);
  //   }
  //   // reset if wrong
  //   if (!'01'.includes(target.value[0])) {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  //   if (+target.value < 0 || +target.value > 12) {
  //     inputMask.value = '';
  //   }
  //   if (target.value === '00') {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  // }
  // if (target.name == 'year') {
  //   // color validation
  //   let day = target.closest('.field-body').children[0].children[0].children[0];
  //   let month = target.closest('.field-body').children[1].children[0]
  //     .children[0];
  //   REGEX_YEAR.test(target.value)
  //     ? colorSuccess(target)
  //     : setCssInvalid(target);
  //   if (
  //     REGEX_DAY.test(day.value) &&
  //     REGEX_MONTH.test(month.value) &&
  //     REGEX_YEAR.test(target.value)
  //   ) {
  //     setCssValid(target);
  //   } else {
  //     REGEX_MONTH.test(month.value) ? colorSuccess(month) : colorWarning(month);
  //     REGEX_DAY.test(day.value) ? colorSuccess(day) : colorWarning(day);
  //   }
  //   // reset if wrong
  //   if (!'12'.includes(target.value[0])) {
  //     setCssInvalid(target);
  //     inputMask.value = '';
  //   }
  // }

};

var handleFormByID = function handleFormByID(id) {
  // -- Getting form by id
  var form = document.querySelector("#".concat(id)); // -- Name handling

  var name = form.elements.namedItem('name');
  name.addEventListener('input', validateField); // -- Phone handling

  var phone = form.elements.namedItem('phone');
  var inputMaskPhone = (0, _imask.default)(phone, inputMaskPhoneOptions);
  phone.addEventListener('input', function (event) {
    return validateField(event, inputMaskPhone);
  }); // -- Time handling

  var from = form.elements.namedItem('from');
  var inputMaskFrom = (0, _imask.default)(from, inputMaskTimeOptions);
  from.addEventListener('input', function (event) {
    return validateField(event, inputMaskFrom);
  });
  var till = form.elements.namedItem('till');
  var inputMaskTill = (0, _imask.default)(till, inputMaskTimeOptions);
  till.addEventListener('input', function (event) {
    return validateField(event, inputMaskTill);
  }); // -- Region handling

  var city = form.elements.namedItem('city');
  city.addEventListener('change', validateField); // - Handling submit action

  form.addEventListener('submit', function (event) {
    console.log('clickkkked');
    event.preventDefault();

    if (!REGEX_NAME.test(name.value) || !REGEX_PHONE.test(phone.value) || !REGEX_TIME.test(from.value) || !REGEX_TIME.test(till.value) || city.value === 'none') {
      if (city.value === 'none') {
        city.focus();

        if (city.nextElementSibling.firstChild) {
          colorWarning(city.nextElementSibling.firstChild);
          city.nextElementSibling.firstChild.style.borderColor = '#ffcc00';
          city.nextElementSibling.firstChild.style.color = '#f2323f';
        }
      }

      if (!REGEX_NAME.test(name.value)) {
        name.focus();

        if (name.nextElementSibling) {
          name.nextElementSibling.classList.remove('is-invisible');
          name.nextElementSibling.children[0].classList.remove('fa-check', 'has-text-success');
          name.nextElementSibling.children[0].classList.add('fa-exclamation-triangle', 'has-text-danger');
        }
      }

      if (!REGEX_PHONE.test(phone.value)) {
        phone.focus();

        if (phone.nextElementSibling) {
          phone.nextElementSibling.classList.remove('is-invisible');
          phone.nextElementSibling.children[0].classList.remove('fa-check', 'has-text-success');
          phone.nextElementSibling.children[0].classList.add('fa-exclamation-triangle', 'has-text-danger');
        }
      }

      if (!REGEX_TIME.test(from.value)) {
        from.focus();

        if (from.nextElementSibling) {
          from.nextElementSibling.classList.remove('is-invisible');
          from.nextElementSibling.children[0].classList.remove('fa-check', 'has-text-success');
          from.nextElementSibling.children[0].classList.add('fa-exclamation-triangle', 'has-text-danger');
        }
      }

      if (!REGEX_TIME.test(till.value)) {
        till.focus();

        if (till.nextElementSibling) {
          till.nextElementSibling.classList.remove('is-invisible');
          till.nextElementSibling.children[0].classList.remove('fa-check', 'has-text-success');
          till.nextElementSibling.children[0].classList.add('fa-exclamation-triangle', 'has-text-danger');
        }
      }
    } else {
      var finCity = city.value;
      var finFrom = from.value;
      var finTill = till.value;
      var finName = name.value;
      var finPhone = phone.value.replace(/\s+/g, '');
      console.log(finCity, finFrom, finTill, finName, finPhone); // v------------------ Getting Recaptcha and sending request -----------------v
      //
      //
      // sendHttpRequest(body, 'http://testapi.euro-ins.ru/account/new', 'POST')
      //   .then(res => {
      //     console.log('[first res:]', res);
      //     document.querySelector('html').style.overflow = 'hidden';
      //     document.querySelector(
      //       '.modal-message'
      //     ).innerHTML = `<h3 class='has-text-success is-size-5'>Заявка на регистрацию успешно отправлена!</h3>`;
      //     document
      //       .querySelector('.modal-backdrop')
      //       .setAttribute('style', 'visibility:visible; opacity: 1;');
      //     document
      //       .querySelector('.modal-window')
      //       .setAttribute('style', 'visibility:visible; opacity: 1;');
      //   })
      //   .catch(rej => {
      //     if (rej === null) {
      //       const errorMessageHTML = `<h3 class='has-text-danger is-size-5'>Что-то пошло не так:</h3> <p>Неизвестная ошибка</p>`;
      //       document.querySelector(
      //         '.modal-message'
      //       ).innerHTML = errorMessageHTML;
      //     } else {
      //       if (rej.errors) {
      //         const listOfErrors = [];
      //         let listOfErrorsHTML = '';
      //         for (const key in rej.errors) {
      //           listOfErrors.push(rej.errors[key]);
      //         }
      //         for (const error of listOfErrors) {
      //           listOfErrorsHTML += `<li class='mb-2'>${error}</li>`;
      //         }
      //         const errorMessageHTML = `<h3 class='has-text-danger is-size-5'>Что-то пошло не так:</h3> <ul>${listOfErrorsHTML}</ul>`;
      //         document.querySelector(
      //           '.modal-message'
      //         ).innerHTML = errorMessageHTML;
      //       } else {
      //         const errorMessageHTML = `<h3 class='has-text-danger is-size-5'>Что-то пошло не так:</h3> <p>${rej.status}</p>`;
      //         document.querySelector(
      //           '.modal-message'
      //         ).innerHTML = errorMessageHTML;
      //       }
      //     }
      //     document.querySelector('html').style.overflow = 'hidden';
      //     document
      //       .querySelector('.modal-backdrop')
      //       .setAttribute('style', 'visibility:visible; opacity: 1;');
      //     document
      //       .querySelector('.modal-window')
      //       .setAttribute('style', 'visibility:visible; opacity: 1;');
      //   });
      //
      //
      // ^------------------ Getting Recaptcha and sending request -----------------^
    }
  });
  return form;
};

exports.handleFormByID = handleFormByID;
},{"imask":"../node_modules/imask/esm/index.js","./sendHttpRequest":"js/sendHttpRequest.js"}],"../node_modules/zenscroll/zenscroll.js":[function(require,module,exports) {
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

require("./popupNotify");

require("./dropdownSelector");

var _formsLogic = require("./forms-logic");

var _zenscroll = _interopRequireDefault(require("zenscroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './snowfall';
// Setup forms
var callbackForm = (0, _formsLogic.handleFormByID)('callback-form'); //const formMobile = handleFormByID('form-mobile');
// Setup scroll

_zenscroll.default.setup(null, 0); // setting top offset to zero
},{"../styles/xmas-main.scss":"styles/xmas-main.scss","./modal":"js/modal.js","./popupNotify":"js/popupNotify.js","./dropdownSelector":"js/dropdownSelector.js","./forms-logic":"js/forms-logic.js","zenscroll":"../node_modules/zenscroll/zenscroll.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61380" + '/');

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