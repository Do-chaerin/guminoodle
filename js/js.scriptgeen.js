$(document).ready(function () {
  $(".tab a").click(function (e) {
    e.preventDefault();
    $(".tab li").removeClass("active");
    $(this).parent().addClass("active");
  });
  const navScroll = document.querySelector("tab");
  window.addEventListener("scroll", function () {
    // navScroll.classList.add("scrolled")
    console.log("스크롤 y 값:", window.scrollY);
        if (window.scrollY > 425) {
      navScroll.classList.add("scrolled");
    }
    // 아니면
    else {
      navScroll.classList.remove("scrolled");
    }
  });
});
