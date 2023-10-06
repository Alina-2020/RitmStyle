import "@babel/polyfill";
import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './index.html';
import '../../style/index.scss';


const swiper = new Swiper('.swiper', {
    modules: [ Pagination],
    direction: 'horizontal',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    // loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    breakpoints: {
       
        320: {
            slidesPerView: 2,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },
        
        480: {
            sslidesPerView: 2,
            spaceBetween: 30,
            slideToClickedSlide: true,
        },
        
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slideToClickedSlide: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            slideToClickedSlide: true,
          },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            slideToClickedSlide: true,
        },

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
     autoplay: { delay: 5000 }
});


   
let menuBtn = document.querySelector('.menu-mobile');
let menu = document.querySelector('.js-menu');
let body = document.querySelector('body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    body.classList.toggle('freeze');
})
  




