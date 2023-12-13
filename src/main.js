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
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
