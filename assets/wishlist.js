(()=>{var t=document.querySelector("#wishlist"),e=document.querySelector(".btn-remove-all"),i=!1;t&&(i="true"==(i=t.getAttribute("data-page-wishlist")));var s="shopify-wishlist",o="active",r="[button-wishlist]",n="[grid-wishlist]";document.addEventListener("DOMContentLoaded",(function(){l(),a()}));var a=function(){var t=document.querySelector(n)||!1;t&&function(t){var e=c(),i=e.map((function(t){return fetch("/products/"+t+"?view=card").then((function(t){if(200==t.status)return t.text()}))}));Promise.all(i).then((function(i){var s=i.join("");s||((o=t.closest(".wishlist").querySelector(".icon-loading-wishlist")).classList.add("hidden"),t.classList.add("wishlist-empty"),s="No Product Data");var o=t.closest(".wishlist").querySelector(".icon-loading-wishlist"),r=t.closest(".wishlist").querySelector(".btn-remove-all-wrapper");o.classList.add("hidden"),t.innerHTML=s,t.classList.add("loaded");var n=t.querySelectorAll(".tp-prd-item");0!=n.length&&(n.forEach((function(t){t.classList.add("tp-grid__item")})),r.classList.remove("hidden")),l();var a=new CustomEvent("shopify-wishlist:init-product-grid",{detail:{wishlist:e}});document.dispatchEvent(a),window.tpColorSwatchesShopify.init()}))}(t)},l=function(){var t=document.querySelectorAll(r)||[];if(t.length){!function(t){t.forEach((function(t){var e=t.dataset.productHandle||!1;if(!e)return console.error("[Shopify Wishlist] Missing `data-product-handle` attribute. Failed to update the wishlist.");h(e)&&t.classList.add(o)}))}(t);var e=new CustomEvent("shopify-wishlist:init-buttons",{detail:{wishlist:c()}});document.dispatchEvent(e)}},c=function(){var t=localStorage.getItem(s)||!1;return t?t.split(","):[]},d=function(t){var e=t.join(",");return t.length?localStorage.setItem(s,e):localStorage.removeItem(s),e},u=function(t){var e=c(),i=e.indexOf(t);return-1===i?e.push(t):e.splice(i,1),d(e)},h=function(t){return-1!==c().indexOf(t)},w=function(){var t=document.querySelector(".tp-header-wishlist");if(t){var e=c();t.querySelector(".wishlist-count").innerText=null!==e&&0!=e.length?e.length:0}};w(),document.addEventListener("click",(function(t){if(t.target.classList.contains("button-wishlist")){var e=t.target.getAttribute("data-product-handle")||!1;if(u(e),h(e))t.target.classList.add(o),window.showNotifications(window.messNotifications.added_product_to_wish_list),w();else if(t.target.classList.remove(o),window.showNotifications(window.messNotifications.removed_product_from_wish_list),w(),i){var s=t.target.closest(".tp-prd-item"),r=t.target.closest(".wishlist").querySelector(".btn-remove-all-wrapper");s&&s.remove(),document.querySelector(".wishlist .tp-prd-item")||(r.classList.add("hidden"),window.location.reload())}}if(t.target.classList.contains("icon-heart-normal")){var n=t.target.closest(".button-wishlist"),a=n.getAttribute("data-product-handle")||!1;if(u(a),h(a))n.classList.add(o);else if(n.classList.remove(o),i){var l=t.target.closest(".tp-prd-item");l&&l.remove()}}})),null==e||e.addEventListener("click",(function(t){var e=t.target.querySelector(".icon-loading-btn");t.target.querySelector(".text-btn-wishlist").classList.add("opacity-0"),e.classList.remove("opacity-0"),localStorage.setItem(s,""),window.location.reload()}))})();