import './blog.html';
import '../../style/index.scss';
import './_blog.scss';

let menuBtn = document.querySelector('.menu-mobile');
let menu = document.querySelector('.js-menu');
let body = document.querySelector('body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('freeze');
})
