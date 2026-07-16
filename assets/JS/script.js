const bannerSwiper = new Swiper('.mySwiper', {
  // Slide horizontally (standard for web banners)
  direction: 'horizontal',
  loop: true,
  
  // Smooth transit speed
  speed: 800,
  
  // Autoplay functionality
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // If we need pagination dots (scoped to banner)
  pagination: {
    el: '.mySwiper .swiper-pagination',
    clickable: true,
  },

});

// Category Slider Initialization
const categorySwiper = new Swiper('.mySwiperSlider', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  
  // Scoped pagination for the category slider
  pagination: {
    el: '.mySwiperSlider .swiper-pagination',
    clickable: true,
  },

  // Scoped navigation arrows
  navigation: {
    nextEl: '.category-sliderbox .swiper-button-next',
    prevEl: '.category-sliderbox .swiper-button-prev',
  },
  
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// Featured Products Slider Initialization
const featuredSwiper = new Swiper('.myFeaturedSlider', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  
  // Scoped pagination for the featured slider
  pagination: {
    el: '.myFeaturedSlider .swiper-pagination',
    clickable: true,
  },

  // Scoped navigation arrows
  navigation: {
    nextEl: '.featured-sliderbox .swiper-button-next',
    prevEl: '.featured-sliderbox .swiper-button-prev',
  },
  
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});