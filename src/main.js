/*Template Main CSS File*/
import "./assets/css/style.css";

import { createApp } from 'vue'
import App from './App.vue'
import Swiper from 'swiper/bundle';
import router from './router/router.js'


const app = createApp(App);

app.use(router);

app.mount('#app');



var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    


// /*Template Main CSS File*/
// import "./assets/css/style.css";
// import Swiper from 'swiper/bundle';

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
// //createApp(App).use(router).mount('#app');

// var swiper = new Swiper(".slide-container", {
//   slidesPerView: 1,
//   spaceBetween: 10, // Set your desired space between elements here
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 10, // Adjust for 640 breakpoint
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20, // Adjust for 768 breakpoint
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 30, // Adjust for 1024 breakpoint
//     },
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// }
// );
