(()=>{function e(){var e=document.querySelector(".story-container__main");if(e){var t=Number(e.dataset.spaceBetween),a=Number(e.dataset.desktop),n="true"===e.dataset.loop,s="true"===e.dataset.autoplay;new Swiper(".story-container__main",{slidesPerView:1,spaceBetween:15,autoplay:s,loop:n,navigation:{nextEl:".swiper-next-bts",prevEl:".swiper-prev-bts"},breakpoints:{768:{slidesPerView:a,spaceBetween:t}}})}}e(),document.addEventListener("shopify:section:load",e),document.addEventListener("shopify:section:unload",e)})();