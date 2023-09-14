import '@babel/polyfill';
import './index.html';
import './index.scss';
import './contacts.html';
import './session.html';
import './blog.html';

import Swiper from 'swiper';
import {Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
     autoplay: { delay: 5000 }
});

   
   
  

  // const swiper = new Swiper('.swiper', {
  //   modules: [Navigation, Pagination],
  //   direction: 'horizontal',
  //   loop: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   scrollbar: {
  //     el: '.swiper-scrollbar',

  //   },
  // });





  