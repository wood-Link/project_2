// SwiperConfig.js
import { Autoplay } from "swiper/modules";

export const swiperConfig = {
  spaceBetween: 45,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    // clickable: true,
  },
  // grabCursor: true,
  modules: [Autoplay],
  breakpoints: {
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30,
      centeredSlides: true,
    },
    700: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      centeredSlides: true,
    },
    436: {
      slidesPerView: 1.7,
      spaceBetween: 30,
      // centeredSlides: true, // 비활성화
    },
  },
};
