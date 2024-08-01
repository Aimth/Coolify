(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,r||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:String(r)}function o(t,e,r){return e=p(e),c(t,s()?Reflect.construct(e,r||[],p(t).constructor):e.apply(t,r))}function c(e,r){if(r&&("object"===t(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}function l(t){var e="function"==typeof Map?new Map:void 0;return l=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return function(t,e,r){if(s())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var i=new(t.bind.apply(t,n));return r&&f(i,r.prototype),i}(t,arguments,p(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)},l(t)}function s(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(s=function(){return!!t})()}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}customElements.get("pickup-availability")||customElements.define("pickup-availability",function(t){function r(){var t;return e(this,r),(t=o(this,r)).hasAttribute("available")?(t.errorHtml=t.querySelector("template").content.firstElementChild.cloneNode(!0),t.onClickRefreshList=t.onClickRefreshList.bind(u(t)),t.fetchAvailability(t.dataset.variantId),t):c(t)}return a(r,t),n(r,[{key:"fetchAvailability",value:function(t){var e=this,r=this.dataset.rootUrl;r.endsWith("/")||(r+="/");var n="".concat(r,"variants/").concat(t,"/?section_id=pickup-availability");fetch(n).then((function(t){return t.text()})).then((function(t){var r=(new DOMParser).parseFromString(t,"text/html").querySelector(".shopify-section");e.renderPreview(r)})).catch((function(t){var r=e.querySelector("button");r&&r.removeEventListener("click",e.onClickRefreshList),e.renderError()}))}},{key:"onClickRefreshList",value:function(t){this.fetchAvailability(this.dataset.variantId)}},{key:"renderError",value:function(){this.innerHTML="",this.appendChild(this.errorHtml),this.querySelector("button").addEventListener("click",this.onClickRefreshList)}},{key:"renderPreview",value:function(t){var e=document.querySelector("pickup-availability-drawer");if(e&&e.remove(),!t.querySelector("pickup-availability-preview"))return this.innerHTML="",void this.removeAttribute("available");this.innerHTML=t.querySelector("pickup-availability-preview").outerHTML,this.setAttribute("available",""),document.body.appendChild(t.querySelector("pickup-availability-drawer"));var r=this.querySelector("button");r&&r.addEventListener("click",(function(t){document.querySelector("pickup-availability-drawer").show(t.target)}))}}]),r}(l(HTMLElement))),customElements.get("pickup-availability-drawer")||customElements.define("pickup-availability-drawer",function(t){function r(){var t;return e(this,r),(t=o(this,r)).onBodyClick=t.handleBodyClick.bind(u(t)),t.querySelector("button").addEventListener("click",(function(){t.hide()})),t.addEventListener("keyup",(function(e){"ESCAPE"===e.code.toUpperCase()&&t.hide()})),t}return a(r,t),n(r,[{key:"handleBodyClick",value:function(t){var e=t.target;e==this||e.closest("pickup-availability-drawer")||"ShowPickupAvailabilityDrawer"==e.id||this.hide()}},{key:"hide",value:function(){this.removeAttribute("open"),document.body.removeEventListener("click",this.onBodyClick),document.body.classList.remove("overflow-hidden"),window.removeTrapFocus(this.focusElement)}},{key:"show",value:function(t){this.focusElement=t,this.setAttribute("open",""),document.body.addEventListener("click",this.onBodyClick),document.body.classList.add("overflow-hidden"),window.trapFocus(this)}}]),r}(l(HTMLElement)))})();