$(document).ready(function(){
    $(".tabBtn-box li").on(".click", function () {
        var data = $(this).attr("data-rel");
        var $content = $("." + data);
        $(this).addClass("on").siblings().removeClass("on");
        $contnent.show().siblings().hide();
    });

});