(function () {
    var height1=$('.chosen').height();
    console.log(height1);
    $('.logo .chosen span').css('height',height1+20);
    $('.logo .chosen ul').css('height',height1+20);


    var height2=$('.brand').height();
    console.log(height2);
    $('.logo .brand span').css('height',height2);
    $('.logo .brand ul').css('height',height2);


    var height3=$('.specification').height();
    console.log(height3);
    $('.logo .specification span').css('height',height3+20);
    $('.logo .specification ul').css('height',height3+20);



  /*  var height4=$('.city').height();
     console.log(height4);
     $('.logo .city span').css('height',height4+20);
     $('.logo .city ul').css('height',height4+20);*/


  $('.clearchosen').click(function () {
      $(this).siblings().remove();
      $(this).css('display','none');
  });
  $('.chosen').on('click','b',function () {
      $(this).parent().parent().remove();
  });
    $('.brand').on('click','li',function () {
        console.log($(this).clone());
        $('.chosen ul li').eq(-2).after($(this).clone(true,true));
    });

    $('.specification').on('click','li',function () {
        console.log($(this).clone());
        $('.chosen ul li').eq(-2).after($(this).clone(true,true));
    });

    $('.city').on('click','li',function () {
        console.log($(this).clone());
        $('.chosen ul li').eq(-2).after($(this).clone(true,true));
    });





})();