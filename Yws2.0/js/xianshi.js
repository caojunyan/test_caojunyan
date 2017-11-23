
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