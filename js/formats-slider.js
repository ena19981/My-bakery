const swiper = new Swiper('.swiper-container', {
  // Optional parameters

  loop: true,
    slidesPerView: 1,
  spaceBetween: 20,
   breakpoints: {
  
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: "pagination-button",
    bulletActiveClass: "pagination-button--active",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-buttom.next',
    prevEl: '.carousel-buttom.prev',
  },

});