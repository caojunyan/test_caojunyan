(function () {
    var tabhosts = $(".tab-header a");
    tabhosts.each(function() {
        if ($(this).hasClass("hover1")) {
            $($(this).attr("name")).show();
        }
        $(this).mousemove(function(e) {
            e.preventDefault();
            $('.main').removeClass('show');
            if (!$(this).hasClass("hover1")) {
                tabhosts.each(function() {
                    $(this).removeClass("hover1");
                    $($(this).attr("name")).hide();
                });
                $(this).addClass("hover1");
                $($(this).attr("name")).show();
            }
        });
    });
})();

//µ¹¼ÆÊ±
(function () {
    var starttime = new Date("2017/11/20");
    setInterval(function () {
        var nowtime = new Date();
        var time = starttime - nowtime;
        var day = parseInt(time / 1000 / 60 / 60 / 24);
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 % 60);
        var seconds = parseInt(time / 1000 % 60);
        $('.hour').html(hour);
        $('.minutes').html(minute);
        $('.second').html(seconds);

    }, 1000);
})();