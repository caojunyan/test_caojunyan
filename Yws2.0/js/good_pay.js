/**
 * Created by Administrator on 2017/9/8.
 */
//切换城市
$('.city>ul').on('click','li', function () {
    $('.city-hover1>span').html($(this).html());
});
//复选框的默认样式
var i_add=0;
$('.form_check').click(function () {
    i_add++;
    if(i_add%2!=0){
        $(this).find('img').css('visibility','visible');
    }else{
        $(this).find('img').css('visibility','hidden');
    }

});


var i_add1=0;
$('.li1 .span1 ').click(function () {
    i_add1++;
    if(i_add1%2!=0){
        $(this).find('img').css('visibility','visible');
    }else{
        $(this).find('img').css('visibility','hidden');
    }

});

var i_add2=0;
$('.li4 .span2 ').click(function () {
    i_add2++;
    if(i_add2%2!=0){
        $(this).find('img').css('visibility','visible');
    }else{
        $(this).find('img').css('visibility','hidden');
    }

});

//支付方式选择
$('.online-pay ').click(function () {
    $('.fTf input').removeAttr('checked');
    $(this).css({
        'background':'white',
        'border':'1px solid #FF3893'
    });
    $(this).find('input').attr('checked','checked');
    $('.fTf').css({
        'background':'#F4F3F3',
        'border':'1px solid #F4F3F3'
    })
});
$('.fTf').click(function () {
    $('.online-pay input').removeAttr('checked');
    $(this).css({
        'background':'white',
        'border':'1px solid #FF3893'
    });
    $(this).find('input').attr('checked','checked');
    $('.online-pay').css({
        'background':'#F4F3F3',
        'border':'1px solid #F4F3F3'
    })
});