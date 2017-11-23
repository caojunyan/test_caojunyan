$('.phone').focus();
var phone_flag = false;
//同意协议选项
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
//登录方式
(function () {
    var i = 0
    $('.way').click(function () {
        i++;
        if (i % 2 != 0) {
            $(this).html('使用手机');
            $('.tel-way').html('邮箱名称');
        } else {
            $(this).html('使用邮箱');
            $('.tel-way').html('手机号码');
        }
    })
})();
//手机号正则
function checkPhone() {
    var phone = $('.phone').val();
    if (!(/^1[34578]\d{9}$/.test(phone))) {
        $('.phone-div').css('border', '1px solid red');
        $('.phone-div>img').css('display', 'none');
        $('.alert-msg').css('display', 'block');
        phone_flag = false;
        return false;
    } else {
        $('.phone-div').css('border', '1px solid #DADADA');
        $('.alert-msg').css('display', 'none');
        $('.phone-div>img').css('display', 'block');
        phone_flag = true;
    }
}
$('.phone').blur(function () {
    checkPhone();
});


//密码长度
$('.pwd').blur(function () {
    checkPwd();
});

function checkPwd() {
    var pwd = $('.pwd').val();
    var len = pwd.length;
    console.log(len);
    if (len < 6) {
        $('.pwd-div').css('border', '1px solid red');
        $('.pwd-div>img').css('display', 'none');
        $('.alert-msg1').css('display', 'block');
        return false;
    } else {
        $('.pwd-div').css('border', '1px solid #DADADA');
        $('.alert-msg1').css('display', 'none');
        $('.pwd-div>img').css('display', 'block');
    }
}

//获取验证码
var countdown = 60;

function settime() {
    console.log();
    if (countdown == 0) {
        btn.removeAttribute("disabled");
        btn.value = "免费获取验证码";
        countdown = 60;
        return;
    } else {
        btn.setAttribute("disabled", true);
        btn.value = "重新发送(" + countdown + ")";
        btn.style.background = "#EEEEEE";
        btn.style.color = "#000";
        countdown--;
    }
    setTimeout(function () {
            settime()
        }
        , 1000)
}
$('#btn').click(function () {
    if(!phone_flag){
        return;
    }
    settime();
})