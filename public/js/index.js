// ========== Hamburger Menu ==========
const hamburgerMenu = document.querySelector('.hamburger-menu');
const primaryMenu = document.getElementById('primary-menu');
const overlay = document.getElementById('overlay');

hamburgerMenu.addEventListener('click', function () {
  if (this.classList.contains('open')) {
    this.classList.remove('open');
    primaryMenu.style.right = '-100%';
    overlay.style.display = 'none';
    document.body.style.overflow = 'visible';
  } else {
    this.classList.add('open');
    primaryMenu.style.right = '0';
    overlay.style.display = 'initial';
    document.body.style.overflow = 'hidden';
  }
});
// ========== ./Hamburger Menu ==========

// ========== Primary header ==========
const header = document.getElementsByTagName('header')[0];
var prevScrollPos = window.pageYOffset;
var currentScrollPos;

window.onscroll = function () {
  currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = -header.offsetHeight + 'px';
  }
  prevScrollPos = currentScrollPos;
};
// ========== Primary header ==========

// ========== Swiper Slider ==========
const swiper = new Swiper('.swiper', {
  autoplay: {
    disableOnInteraction: false,
    reverseDirection: false,
    pauseOnMouseEnter: true,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 4,
  watchSlidesVisibility: true,
  spaceBetween: -90,
  coverflowEffect: {
    rotate: 0,
    stretch: -15,
    depth: 150,
    modifier: 5,
  },
  breakpoints: {
    480: {
      coverflowEffect: {
        depth: 125,
      },
    },
    768: {
      slidesPerView: 5,
      coverflowEffect: {
        depth: 100,
        modifier: 4,
      },
    },
    1024: {
      slidesPerView: 5,
      coverflowEffect: {
        depth: 125,
      },
    },
    1280: {
      slidesPerView: 5,
      coverflowEffect: {
        depth: 100,
      },
    },
    1536: {
      slidesPerView: 5,
      coverflowEffect: {
        depth: 100,
        modifier: 4,
      },
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      const swiperSlides = document.querySelectorAll('.swiper-slide');
      swiperSlides.forEach((e) => {
        if (e.classList.contains('swiper-slide-visible')) {
          e.style.opacity = '1';
        } else {
          e.style.opacity = '0';
        }
      });
    },
    slideChange: function () {
      const swiperSlides = document.querySelectorAll('.swiper-slide');
      swiperSlides.forEach((e) => {
        if (e.classList.contains('swiper-slide-visible')) {
          e.style.opacity = '1';
        } else {
          e.style.opacity = '0';
        }
      });
    },
  },
});
// ========== ./Swiper Slider ==========
