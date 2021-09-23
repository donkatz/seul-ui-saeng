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



      // 익준
      $(".layerPopup01").click(function(){
        $(".layer-bg").stop().show();
        $(".layer01").stop().show();
      });
      $(".layer01 .close-btn").click(function(){
        $(".layer-bg").stop().hide();
        $(".layer01").stop().hide();
      });

      // 정원
      $(".layerPopup02").click(function(){
        $(".layer-bg").stop().show();
        $(".layer02").stop().show();
      });
      $(".layer02 .close-btn").click(function(){
        $(".layer-bg").stop().hide();
        $(".layer02").stop().hide();
      });

      // 준완
      $(".layerPopup03").click(function(){
        $(".layer-bg").stop().show();
        $(".layer03").stop().show();
      });
      $(".layer03 .close-btn").click(function(){
        $(".layer-bg").stop().hide();
        $(".layer03").stop().hide();
      });

      // 석형
      $(".layerPopup04").click(function(){
        $(".layer-bg").stop().show();
        $(".layer04").stop().show();
      });
      $(".layer04 .close-btn").click(function(){
        $(".layer-bg").stop().hide();
        $(".layer04").stop().hide();
      });

      // 송화
      $(".layerPopup05").click(function(){
        $(".layer-bg").stop().show();
        $(".layer05").stop().show();
      });
      $(".layer05 .close-btn").click(function(){
        $(".layer-bg").stop().hide();
        $(".layer05").stop().hide();
      });

      // 동영상 재생

      $("#pause-btn").click(function(){
        $("#theVideo").get(0).pause();
        $("#play-btn").addClass("on");
        $("#pause-btn").addClass("on");
      });
      
      $("#play-btn").click(function(){
        $("#theVideo").get(0).play();
        $("#play-btn").removeClass("on");
        $("#pause-btn").removeClass("on");
      });

      

});