(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,n||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:String(n)}function i(e,n,o){return n=f(n),function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}(e,l()?Reflect.construct(n,o||[],f(e).constructor):n.apply(e,o))}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}function a(t){var e="function"==typeof Map?new Map:void 0;return a=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(l())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var r=new(t.bind.apply(t,o));return n&&s(r,n.prototype),r}(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)},a(t)}function l(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(l=function(){return!!t})()}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}var p=function(t){function n(){var t;return e(this,n),(t=i(this,n)).mainDetailsToggle=t.querySelector("details"),t.content=t.mainDetailsToggle.querySelector("summary").nextElementSibling,t.mainDetailsToggle.addEventListener("focusout",t.onFocusOut.bind(u(t))),t.mainDetailsToggle.addEventListener("toggle",t.onToggle.bind(u(t))),t}return c(n,t),o(n,[{key:"onFocusOut",value:function(){var t=this;setTimeout((function(){t.contains(document.activeElement)||t.close()}))}},{key:"onToggle",value:function(){this.animations||(this.animations=this.content.getAnimations()),this.mainDetailsToggle.hasAttribute("open")?this.animations.forEach((function(t){return t.play()})):this.animations.forEach((function(t){return t.cancel()}))}},{key:"close",value:function(){this.mainDetailsToggle.removeAttribute("open"),this.mainDetailsToggle.querySelector("summary").setAttribute("aria-expanded",!1)}}]),n}(a(HTMLElement));customElements.define("details-disclosure",p);var y=function(t){function n(){var t;return e(this,n),(t=i(this,n)).header=document.querySelector(".header-wrapper"),t}return c(n,t),o(n,[{key:"onToggle",value:function(){this.header&&(this.header.preventHide=this.mainDetailsToggle.open,""===document.documentElement.style.getPropertyValue("--header-bottom-position-desktop")&&document.documentElement.style.setProperty("--header-bottom-position-desktop","".concat(Math.floor(this.header.getBoundingClientRect().bottom),"px")))}}]),n}(p);customElements.define("header-menu",y)})();