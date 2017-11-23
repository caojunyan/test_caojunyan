/**
 * Created by Administrator on 2017/9/8.
 */
//?锟斤拷?????
$('.city>ul').on('click','li', function () {
    $('.city-hover1>span').html($(this).html());
});
//banner
$('.banner1 .li-banner').click(function () {
    $(this).css('background','#EC0971');
    $(this).siblings().css('background','#FF3893');
});
$('#list1').on("mouseover",">li.list1_li",function(){
    $(this).css({
        'background':'#EC0971',
        'color':'#fff'
    }).siblings().css({
        'background':'#F4F3F3',
        'color':'#000'
    });

    $(this).find("ul").show();

})
$(".list2").on("mouseover",">li",function(){
    $(this).css({
        'background':'#EC0971',
        'color':'#fff'
    }).siblings().css({
        'background':'#F4F3F3',
        'color':'#000'
    });
    $(this).find('li a').css('color','#000');
    $(this).find(">div").show();
});

$(".list3").on("mouseover",">li",function(){
    $(this).css({
        'background':'#EC0971'

    }).siblings().css({
        'background':'#F4F3F3'

    });

    $(this).find('a').css({
        'color':'#fff'
    });
    $('this').siblings().find('a').css({
        'color':'#000'
    });
});


$('.all_pro1').mouseover(function () {
    $('.list1').css('display','block');
});
$('.all_pro1').mouseout(function () {
    $('.list1').css('display','none');
});



//模糊查询
var search_info=$('.search-box').html();
$('.search a').click(function () {
    $.ajax({
        url:'',
        type:'post',
        async:true,
        data:{
            search_info:'search_info'
        },
        success: function () {
            console.log('查询成功');
        },
        error: function () {
            console.log('查询失败');
        }
    })
});

