(()=>{function e(){var e=document.querySelector(".tp-testimonial__inner");if(e){var t=Number(e.dataset.desktop),i="true"===e.dataset.loop,n="true"===e.dataset.autoplay;new Swiper(".tp-testimonial__inner",{slidesPerView:1,spaceBetween:0,loop:i,autoplay:n,grabCursor:!0,navigation:{nextEl:".swiper-next-testimonial",prevEl:".swiper-prev-testimonial"},pagination:{clickable:!0,el:".swiper-pagination-testimonial"},breakpoints:{570:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:t,spaceBetween:30}}})}}e(),document.addEventListener("shopify:section:load",e),document.addEventListener("shopify:section:unload",e)})();