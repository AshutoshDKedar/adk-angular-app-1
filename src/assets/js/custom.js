$(function(){
    $(".ema-cmp-navigation > ul.nav > li > a").on("click", function(){
        var clickedElement = $(this).addClass("active");
        $(".ema-cmp-navigation > ul.nav > li > a").each(function(){
            $(this).not(clickedElement).removeClass("active");
        });
    });
});