/*
//ȫѡ����
// ������
$(".minus").click(function() {
    var t = $(this).next().html();
    t--;
    $(this).next().html(t);
    if ( t <= 1) {
        $(this).next().html(1);
    }
    TotalPrice();
});
// ������
$(".add").click(function() {
    var t = $(this).prev().html();
    t++;
    $(this).prev().html(t);
    if (t <= 1) {
        $(this).prev().html(1);
    }
    TotalPrice();
});
// �����Ʒ��ť
$(".GoodsCheck").click(function() {
    var goods = $(this).closest(".one-shop").find(".GoodsCheck"); //��ȡ�����̵�������Ʒ
    var goodsC = $(this).closest(".one-shop").find(".GoodsCheck:checked"); //��ȡ���������б�ѡ�е���Ʒ
    var Shops = $(this).closest(".one-shop").find(".ShopCheck"); //��ȡ�����̵�ȫѡ��ť
    if (goods.length == goodsC.length) { //���ѡ�е���Ʒ����������Ʒ
        Shops.prop('checked', true); //����ȫѡ��ť��ѡ��
        if ($(".ShopCheck").length == $(".ShopCheck:checked").length) { //������̱�ѡ�е������������е��̵�����
            $("#AllCheck").prop('checked', true); //ȫѡ��ť��ѡ��
            TotalPrice();
        } else {
            $("#AllCheck").prop('checked', false); //elseȫѡ��ť����ѡ��
            TotalPrice();
        }
    } else { //���ѡ�е���Ʒ������������Ʒ
        Shops.prop('checked', false); //����ȫѡ��ť����ѡ��
        $("#AllCheck").prop('checked', false); //ȫѡ��ťҲ����ѡ��
        // ����
        TotalPrice();
        // ����
    }
});
// ������̰�ť
$(".ShopCheck").change(function() {
    if ($(this).prop("checked") == true) { //������̰�ť��ѡ��
        $(this).parents(".one-shop").find(".goods-check").prop('checked', true); //�����ڵ�������Ʒ��ťҲ��ѡ��
        if ($(".ShopCheck").length == $(".ShopCheck:checked").length) { //������̱�ѡ�е������������е��̵�����
            $("#AllCheck").prop('checked', true); //ȫѡ��ť��ѡ��
            TotalPrice();
        } else {
            $("#AllCheck").prop('checked', false); //elseȫѡ��ť����ѡ��
            TotalPrice();
        }
    } else { //������̰�ť����ѡ��
        $(this).parents(".one-shop").find(".goods-check").prop('checked', false); //�����ڵ�������ƷҲ����ȫѡ
        $("#AllCheck").prop('checked', false); //ȫѡ��ťҲ����ѡ��
        TotalPrice();
    }
});
// ���ȫѡ��ť
$("#AllCheck").click(function() {
    if ($(this).prop("checked") == true) { //���ȫѡ��ť��ѡ��
        $(".goods-check").prop('checked', true); //���а�ť����ѡ��
        TotalPrice();
    } else {
        $(".goods-check").prop('checked', false); //else���а�ť��ȫѡ
        TotalPrice();
    }
    $(".ShopCheck").change(); //ִ�е���ȫѡ�Ĳ���
});
var allprice = 0;
function TotalPrice() {
//�ܼ�
    $(".one-shop").each(function() { //ѭ��ÿ������
        var oprice = 0; //�����ܼ�
        $(this).find(".GoodsCheck").each(function() { //ѭ�������������Ʒ
            if ($(this).is(":checked")) { //�������Ʒ��ѡ��
                var num = parseInt($(this).parents(".one-goods").find(".am-num-text").html()); //�õ���Ʒ������
                var price = parseFloat($(this).parents(".one-goods").find(".GoodsPrice").html()); //�õ���Ʒ�ĵ���
                var total = price * num; //���㵥����Ʒ���ܼ�
                oprice += total; //����õ��̵��ܼ�
            }
            $(this).closest(".one-shop").find(".ShopTotal").html(oprice.toFixed(2)); //��ʾ��ѡ����Ʒ�ĵ����ܼ�
        });
        var oneprice = parseFloat($(this).find(".ShopTotal").html()); //�õ�ÿ�����̵��ܼ�
        allprice += oneprice; //�������е��̵��ܼ�
    });
    $("#AllTotal").html(allprice.toFixed(2)); //���ȫ���ܼ�
}
*/



//��ѡ���Ĭ����ʽ
$(function() {
    $('label').click(function(){
        if($(this).hasClass('checked')){
            $(this).removeClass('checked');
        }else{
            $(this).addClass('checked');
        }
      /*  var radioId = $(this).attr('id');
        $('label').removeAttr('class') ;
        $(this).attr('class', 'checked');
        $('input[type="checkbox"]').removeAttr('checked') ;
        $('#' + radioId).attr('checked', 'checked');*/
    });
});