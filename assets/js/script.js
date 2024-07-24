'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);


document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const navOpenBtn = document.querySelector('.nav-open-btn');
  const navCloseBtn = document.querySelector('.nav-close-btn');
  const navbarLinks = document.querySelectorAll('.navbar-link');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('active');
      navOpenBtn.classList.add('active');
      navCloseBtn.classList.add('active');
      navbarLinks.forEach(link => link.classList.add('active'));
    } else {
      header.classList.remove('active');
      navOpenBtn.classList.remove('active');
      navCloseBtn.classList.remove('active');
      navbarLinks.forEach(link => link.classList.remove('active'));
    }
  });
});


const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
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
});

/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



function showTabContent(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  contents.forEach(content => {
    content.style.display = 'none';
  });

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  document.getElementById(tabId).style.display = 'block';
  event.currentTarget.classList.add('active');
}

// إظهار المحتوى الافتراضي
document.getElementById('vision').style.display = 'block';




document.getElementById('booking-form').addEventListener('submit', function(event) {
  const form = event.target;
  const fullName = form['full-name'].value.trim();
  const phone = form['phone'].value.trim();
  const email = form['email'].value.trim();
  const address = form['address'].value.trim();
  const service = form['service'].value;
  const paymentPlan = form['payment-plan'].value;

  if (!fullName || !phone || !email || !address || !service || !paymentPlan) {
    alert('يرجى ملء جميع الحقول');
    event.preventDefault();
  }
});






