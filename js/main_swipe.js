window.addEventListener("load", () => {
  // Swiper

  var swiper = new Swiper(".swiper", {
    grabCursor: true,
    speed: 400,
    mousewheel: {
      invert: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      900: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  //bus
  var s = skrollr.init({
    render: function (data) {
      //Log the current scroll position.
      $("#info").text(data.curTop);
    },
  });
});
