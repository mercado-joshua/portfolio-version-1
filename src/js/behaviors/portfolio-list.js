const swiperPortfolioList = () => {
    const swiper = new Swiper('.portfolio-list', {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
          768: {
            slidesPerView: 2
          },
          992: {
              slidesPerView: 3
          }
      }
  });
};

document.addEventListener('readystatechange', function (event) {
    if (event.target.readyState === 'complete') swiperPortfolioList();
});