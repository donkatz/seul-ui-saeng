$(document).ready(function () {
    $(".tabBtn-box li").on(".click", function () {
        var data = $(this).attr("data-rel");
        var $content = $("." + data);
        $(this).addClass("on").siblings().removeClass("on");
        $contnent.show().siblings().hide();
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      });

      

});