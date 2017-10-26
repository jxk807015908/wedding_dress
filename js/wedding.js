/**
 * Created by JetBrains WebStorm.
 * User: 威
 * Date: 17-7-8
 * Time: 下午9:24
 * To change this template use File | Settings | File Templates.
 */
$(function (){
    //淡入淡出
     (function ($) {
         var oP=$(".imgs");
         var oImgs=oP.find("img");
         var oUL=$(".pic_play ul");
         var oLI=oUL.find("li");
         var timer=null;
         var now=0;

         //淡入淡出1
/*       function autoplayfade(){
            timer=setInterval(function(){
                oImgs.fadeOut("fast");
                oImgs.eq(now).fadeOut("fast",function(){
                    if(now>=4) now=-1;
                    oLI.eq(now+1).addClass("active").siblings().removeClass("active");
                    oImgs.eq(now+1).addClass("active").siblings().removeClass("active");
                    oImgs.eq(now+1).fadeIn("normal");
                    now+=1;
                });
            },3000)
         }
         autoplayfade();
         oLI.mouseover(function(){
             clearTimeout(timer);
             _now=oLI.index(this);
             oLI.eq(_now).addClass("active").siblings().removeClass("active");
             oImgs.fadeOut("fast");
             oImgs.eq(now).fadeOut("fast",function(){
                 oImgs.eq(_now).fadeIn("normal");
                 oImgs.eq(_now).addClass("active").siblings().removeClass("active");
             });
             now=_now;
         });
         oLI.mouseout(function(){
                 autoplayfade();
             });
*/
         //淡入淡出2
         function autoplayfade(){
            timer=setInterval(function(){
                oImgs.hide();
                if(now>=4) now=-1;
                oLI.eq(now+1).addClass("active").siblings().removeClass("active");
                oImgs.eq(now+1).fadeIn("normal").addClass("active").siblings().removeClass("active");
                now+=1;
            },3000)
         }
         autoplayfade();
         oLI.mouseover(function(){
             clearTimeout(timer);
             now=oLI.index(this);
             oLI.eq(now).addClass("active").siblings().removeClass("active");
             oImgs.hide().eq(now).fadeIn("normal").addClass("active").siblings().removeClass("active");
         });
         oLI.mouseout(function(){
                 autoplayfade();
             });
     })(jQuery);

     //input 的 placeholder 设置
    (function($){
        var oInput=$("input:first");
        var oPlaceholder=$(".placeholder");
        var oP=$(".tab1 p");
        if(!oInput.val()) oPlaceholder.text("宝贝1111").show();
        /*oInput.keypress(function(e){
         //   e=e||window.event;
          //  alert(e.keyCode);
        //    if(e.keyCode>=65&&e.keyCode<=90)
            oPlaceholder.hide();
        });*/
        oP.each(function(index){
            $(this).click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                now=$(this).index($(".tab1 .active")[1]);
                if(index==0)
                    oPlaceholder.text("宝贝1111");
                else
                    oPlaceholder.text("店铺22222");
            });
        });
        oInput.focus(function(){
            oPlaceholder.hide();
        });
        oInput.blur(function(){
            if($(this).val()==""){
                oPlaceholder.show();
            }
        });
    })(jQuery);

    //menu二级菜单
    (function($){
        var oli=$(".menu ul li");
        oli.each(function(index){
            $(this).click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            });
        })
    })(jQuery);

    //倒三角菜单
    (function($){
        var oTriangle=$(".triangle");
        var timer=null;
        oTriangle.each(function(index){
            $(this).mouseover(function(){
                clearTimeout(timer);
                oTriangle.removeClass("act_triangle");
                oTriangle.find(".subnav").hide();
                $(this).addClass("act_triangle").siblings().removeClass("act_triangle");
                $(this).find(".subnav").show();
            }).mouseout(function(){
                timer=setTimeout(function(){
                    oTriangle.removeClass("act_triangle");
                    oTriangle.find(".subnav").hide();
                },1000);
            });
            //市场选择
            var oSpan=$(".fale_market span");
            var oA=$(".fale_market a");
            oA.each(function(inex){
                $(this).click(function(){
                    text=$(this).text();
                    $(this).parent().parent().prevAll().text(text);
                });
            });
        });
    })(jQuery);

    //显示其中一张图片
 /*
    (function($){
        var oLi=$(".today ul li");
        var oImgs=oLi.find("img");
        oImgs.each(function(index){
            $(this).mouseover(function(){
                    alert(this.attr("src"));
                    $(this).siblings().css("opactiy","1");
                }
            );
        });

    })(jQuery);
    */
    /*
    $(function($){
        var oLi=$(".content .dress ul li");
        var oDiv=oLi.find("div");
        var oImgs=oLi.find("img");
        oLi.each(function(index){
            $(this).mouseover(function () {
                $(this).siblings().stop().fadeTo(500,0.4);
            });
            $(this).mouseout(function () {
                $(this).siblings().stop().fadeTo(500,1);
            });
        });
        oDiv.each(function(index){
            $(this).mouseover(function () {
                $(this).siblings().stop().fadeTo(500,0.4);
            });
            $(this).mouseout(function () {
                $(this).siblings().stop().fadeTo(500,1);
            });
        });
    })(jQuery);
    */
    (function($){
        var oLi=$(".content .dress ul li");
        var oDiv=oLi.find(".goods");
        var oImgs=$(".today img");
      //  alert(oDiv.length);
        oImgs.each(function(index){
            $(this).mouseover(function () {
                $(this).parent().siblings().find(".shelter").show();
          //      $(this).parent().parent().siblings().find(".shelter").show();
            });
            $(this).mouseout(function () {
                $(this).parent().siblings().find(".shelter").hide();
           //     $(this).parent().parent().siblings().find(".shelter").hide();
            });
        });
        oLi.each(function(index){
            $(this).mouseover(function () {
                $(this).siblings().find(".shelter").show();
            });
            $(this).mouseout(function () {
                $(this).siblings().find(".shelter").hide();
            });
        });
        oDiv.each(function(index){
            $(this).mouseover(function () {
                $(this).siblings().find(".shelter").show();
        //        return false;
            });
            $(this).mouseout(function () {
                $(this).siblings().find(".shelter").hide();
        //        return false;
            });
        });
    })(jQuery);

    //倒计时
    (function($){
        var oHour=$(".treasure .hour");
        var oMinute=$(".treasure .minute");
        var oSecond=$(".treasure .second");
        var currentdate=new Date();
        var currenthour=currentdate.getHours();
        var currentminute=currentdate.getMinutes();
        var currentsecond=currentdate.getSeconds();
        var spacehour=0;
        var spaceminute=0;
        var spacesecond=0;
        var timer=null;
        function getspacetime(sethour,setminute,setsecond){
            if((sethour<currenthour)||((sethour==currenthour)&&(setminute<currentminute))||((sethour==currenthour)&&(setminute==currentminute)&&(setsecond<currentsecond)))
            {
                return false;
            }
            if(setsecond>=currentsecond){
                spacesecond=setsecond-currentsecond;
            }
            else{
                setminute--;
                spacesecond=60+setsecond-currentsecond;
            }
            if(setminute>=currentminute){
                spaceminute=setminute-currentminute;
            }
            else{
                sethour--;
                spaceminute=60+setminute-currentminute;
            }
            spacehour=sethour-currenthour;
        };
        getspacetime(24,00,00);
      //  alert(spacehour);
       // alert(spaceminute);
       // alert(spacesecond);
        //alert(oMinute.text());
        function showtime(){
            if(spacehour<10)
                spacehour="0"+spacehour;
            oHour.text(spacehour);
            oMinute.text(spaceminute);
            oSecond.text(spacesecond);
            timer=setInterval(function(){
                if(spacesecond>0){
                    spacesecond--;
                    if(spacesecond<10)
                        spacesecond="0"+spacesecond;
                    oSecond.text(spacesecond);
                }
                else{
                    if(spaceminute>0){
                        spaceminute--;
                        spacesecond+=60;
                        spacesecond--;
                        if(spaceminute<10)
                            spaceminute="0"+spaceminute;
                        oSecond.text(spacesecond);
                        oMinute.text(spaceminute);
                    }
                    else {
                        if(spacehour>0){
                            spacehour--;
                            spaceminute+=60;
                            spaceminute--;
                            spacesecond+=60;
                            spacesecond--;
                            if(spacehour<10)
                                spacehour="0"+spacehour;
                            oHour.text(spacehour);
                            oMinute.text(spaceminute);
                            oSecond.text(spacesecond);
                        }
                        else{
                            alert("倒计时结束！");
                            clearInterval(timer);
                        }
                    }
                }
            },1000);
        };
        showtime();
    })(jQuery);
});