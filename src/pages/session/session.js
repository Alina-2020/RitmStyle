import './session.html';
import '../../style/index.scss';
import './_session.scss';

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