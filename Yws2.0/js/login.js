$('#vericode').vericode({
    size: 16, //���壬Ĭ��Ϊ16
    length: 4, //���ȣ�Ĭ�ϳ���Ϊ 4
    focus: false
});

var result = $('#vericode').vericode('test');//true or false


//ͬ��Э��ѡ��
(function () {
    var i = 0;
    $('.agree-bg').click(function () {
        i++;
        if (i % 2 != 0) {
            $(this).css('background', 'url(images/registrt-agree.png)')
        } else {
            $(this).css('background', 'url(images/register-agree1.png)')
        }
    })
})();


//jquery��֤�ֻ�����
var flag;
$('.phone').blur(function () {
    if ($(".phone").val() == "") {
        $('.way').css('display','block');
        flag=false;
    }else if (!$(".phone").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
        $('.way').css('display','block');
        flag=false;
    }else if(!$(".phone").val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) {
        $('.way').css('display','block');
        flag=false;
    }else{
        flag=true;
        return true;
        $('.way').css('display','none');
    }
}
);

