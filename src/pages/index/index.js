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

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
     autoplay: { delay: 5000 }
});

   
// let menuBtn = document.querySelector('.menu-mobile');
// let menu = document.querySelector('.menu');
// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
	
// })
  




