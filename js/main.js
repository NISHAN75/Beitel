
(function ($) {
"use strict";



function initOwlCarousel() {
  var owl = $('.gallary-slider');
  
  owl.owlCarousel({
      items: 3,
      loop: true,
      margin: 12,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeOut: 20000,
      smartSpeed: 20000,
      responsive: {
          // breakpoint from 0 up
          0: {
              items: 1,
          },
          // breakpoint from 480 up
          480: {
              items: 2,
          },
          // breakpoint from 768 up
          768: {
              items: 3,
          }
      }
  });

  $('.play').on('click', function () {
      owl.trigger('play.owl.autoplay', [3000]);
  });

  $('.stop').on('click', function () {
      owl.trigger('stop.owl.autoplay');
  });
}

// building-slider call
initOwlCarousel();


const counterUp = window.counterUp.default;

const callback = entries => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains('is-visible')) {
      counterUp(el, {
        duration: 2000,
        delay: 16,
      });
      el.classList.add('is-visible');
    }
  });
};

const elements = document.querySelectorAll('.count-number');

const IO = new IntersectionObserver(callback, { threshold: 1 });

elements.forEach(el => {
  IO.observe(el);
});





// it is nice  select call
// $('select').niceSelect();


$(".header-area").headroom();

// active 
function toggleNavbar() {
  
  // Toggle the active class on the navbar
  $(".nav-area").toggleClass("active");
  if($(".menu-icon").hasClass("menu-animation")){
    $(".menu-icon").addClass("reverse").removeClass("menu-animation");
  }else{
    $(".menu-icon").removeClass("reverse").addClass("menu-animation");
  }
  

  // Toggle the animate__fadeIn class on the navbar
  $(".nav-area").toggleClass("animate__animated animate__fadeIn");

  // Update the button title based on the state
  var buttonTitle = $(".nav-area").hasClass("active") ? "Close" : "Menu";
  $(".button-title").text(buttonTitle);
}

// Click event on the menu icon
$(".right-content").on("click", function () {
  toggleNavbar();
});

$(".sub-menu-open").on("click", function (event) {
  event.preventDefault();
  $(".sub-menu-open").not(this).removeClass("active");
  $(this).toggleClass("active");
  $(this).next('.sub-menu').slideToggle();
  $('.sub-menu').not($(this).next('.sub-menu')).slideUp();
});



// WOW active
new WOW().init();


})(jQuery);