'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// LinkedIn Button
const linkedinBtn = document.querySelector('.linkedin-btn');

// navToggle function
const navToggleFunc = function () {
    nav.classList.toggle('active');
}

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// LinkedIn Button Click Event
linkedinBtn.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/efekan-acar-1218911b4/', '_blank');
});
