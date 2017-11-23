
    var oStar = document.getElementById("star");
    var aLi = oStar.getElementsByTagName("li");
    var oUl = oStar.getElementsByTagName("ul")[0];
    for (i = 1; i <= aLi.length; i++)
    {
        aLi[i - 1].index = i;
        //����ƹ���ʾ����
        aLi[i - 1].onmouseover = function ()
        {
            fnPoint(this.index);
        };
        //����뿪��ָ��ϴ�����
        aLi[i - 1].onmouseout = function ()
        {
            fnPoint();
        };
        //�����������ִ���
        aLi[i - 1].onclick = function ()
        {
            iStar = this.index;
        }
    }
    //���ִ���
    function fnPoint(iArg)
    {
        //������ֵ
        iScore = iArg || iStar;
        for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore ? "on" : "";
    }

    var oStar2 = document.getElementById("star2");
    var aLi2 = oStar2.getElementsByTagName("li");
    var oUl2 = oStar2.getElementsByTagName("ul")[0];
    for (j = 1; j <= aLi2.length; j++)
    {
        aLi2[j - 1].index = j;
        //����ƹ���ʾ����
        aLi2[j- 1].onmouseover = function ()
        {
            fnPoint2(this.index);
        };
        //����뿪��ָ��ϴ�����
        aLi2[j- 1].onmouseout = function ()
        {
            fnPoint2();
        };
        //�����������ִ���
        aLi2[j - 1].onclick = function ()
        {
            iStar = this.index;
        }
    }
    function fnPoint2(iArg)
    {
        //������ֵ
        iScore = iArg || iStar;
        for (j = 0; j < aLi2.length; j++) aLi2[j].className = j< iScore ? "on" : "";
    }

    var oStar3 = document.getElementById("star3");
    var aLi3 = oStar3.getElementsByTagName("li");
    var oUl3 = oStar3.getElementsByTagName("ul")[0];
    for (k = 1; k <= aLi3.length; k++)
    {
        aLi3[k - 1].index = k;
        //����ƹ���ʾ����
        aLi3[k- 1].onmouseover = function ()
        {
            fnPoint3(this.index);
        };
        //����뿪��ָ��ϴ�����
        aLi3[k- 1].onmouseout = function ()
        {
            fnPoint3();
        };
        //�����������ִ���
        aLi3[k - 1].onclick = function ()
        {
            iStar = this.index;
        }
    }
    function fnPoint3(iArg)
    {
        //������ֵ
        iScore = iArg || iStar;
        for (k= 0; k < aLi3.length; k++) aLi3[k].className = k< iScore ? "on" : "";
    }





    var oStar4 = document.getElementById("star4");
    var aLi4 = oStar4.getElementsByTagName("li");
    var oUl4 = oStar4.getElementsByTagName("ul")[0];
    for (m = 1; m <= aLi4.length; m++)
    {
        aLi4[m - 1].index = m;
        //����ƹ���ʾ����
        aLi4[m - 1].onmouseover = function ()
        {
            fnPoint4(this.index);
        };
        //����뿪��ָ��ϴ�����
        aLi4[m - 1].onmouseout = function ()
        {
            fnPoint4();
        };
        //�����������ִ���
        aLi4[m - 1].onclick = function ()
        {
            iStar4 = this.index;
        }
    }
    //���ִ���
    function fnPoint4(iArg)
    {
        //������ֵ
        iScore = iArg || iStar;
        for (m = 0; m < aLi4.length; m++) aLi4[m].className = m < iScore ? "on" : "";
    }


    var i=0;
    $('.p_btn>span').click(function () {
        i++;
       if(i%2==0){
           $('.p_btn b ').css({
               'background':'#FF3893'
           });
       }else{
           $('.p_btn b ').css({
               'background':'#DADADA'
           });
       }
    })

