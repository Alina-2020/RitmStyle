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
            slidesPerView: 1,
            spaceBetween: 30,
            slideToClickedSlide: true,
            centeredSlides: false,
        },
        
        // 480: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //     slideToClickedSlide: true,
        //     centeredSlides: false,
        // },
        
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
            slideToClickedSlide: true,
            centeredSlides: true,
            centeredSlides: false,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 10,
            slideToClickedSlide: true,
            centeredSlides: true,
          },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            slideToClickedSlide: true,
            centeredSlides: true,
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
  

const link = document.querySelector('.header-nav__logo-list');
link.addEventListener('mouseover', function(event){
    let target = event.target.closest('span');
    if(!target) return;
    target.style.cssText = ` background-color: rgb(32, 178, 170);`;
});

link.addEventListener('mouseout', function(event){
    let target = event.target.closest('span');
    if(!target) return;
    target.style.cssText = ``;
})