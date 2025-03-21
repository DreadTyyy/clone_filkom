const swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  injectStyles: [
    `
        .swiper-button-next,
        .swiper-button-prev {
            color: white;
            height: 24px;
        }
    `,
  ],
});

const programSwiper = new Swiper(".programSwiper", {
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 6,
    },
  },
})
