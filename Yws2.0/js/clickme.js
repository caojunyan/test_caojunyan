$(function(){

    //���ﳵȫѡ
    $('.allselect').click(function(){
        $(".uniqueInput").prop("checked",$(this).prop("checked"));
        //ͬ�����е�ȫѡ��ť
        $('.allselect').prop("checked",$(this).prop("checked"));

    });

    //����ȫѡ״̬�£�������Ʒȡ��ѡ��״̬����ָ�ȫѡ��ťδѡ��״̬
    $('.uniqueInput').click(function(){
        if(!$(this).prop('checked')){
            $('.allselect').prop("checked",$(this).prop("checked"));
        }
        //���ڷ�ȫѡ״̬�£�������Ʒ����ѡ��Ҫ����ȫѡ��ť״̬
        if($('.uniqueInput').length == $('input.uniqueInput:checked').length){
            $('.allselect').prop("checked",true);
        }
    });


    //��ȡѡ�е�checkbox��id
/*    $('#obtain').click(function(){
        //��¼ѡ�е�id
        var getArray = [];

        $('.uniqueInput').each(function(){
            if($(this).prop('checked')){
                getArray.push($(this).attr('data-id'));
            }
        });

        console.log(getArray);
    });*/


});