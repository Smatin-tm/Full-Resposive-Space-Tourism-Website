'use district';

let hamberger = document.querySelector('.logo .fa-bars');
let hiddenNav = document.querySelector('.hidden-nav-box');

let closeBTN = document.querySelector('.close-icon')

hamberger.addEventListener('click', ()=>{
    hiddenNav.classList.add('show-nav');
    hamberger.classList.add('hide-hamberger');
})

closeBTN.addEventListener('click', ()=>{
    hiddenNav.classList.remove('show-nav');
    hamberger.classList.remove('hide-hamberger');
})