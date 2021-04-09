const swiper = new Swiper('.channel_slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    760: {
      slidesPerView: 2
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel_button_prev',
    prevEl: '.channel_button_next',
  },
});

const recommendedSlider = new Swiper('.recommended_slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  breakpoints: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 2
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel_button_prev',
    prevEl: '.channel_button_next',
  },
});

const recommendedChannelSlider = new Swiper('.recommended_channel_slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    760: {
      slidesPerView: 2
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel_button_prev',
    prevEl: '.channel_button_next',
  },
});

const searchBtn = document.querySelector('.mobile_search');
const mobileSearch = document.querySelector('.input_group');
searchBtn.addEventListener('click', ()=> {
  mobileSearch.classList.toggle('is_open');
});