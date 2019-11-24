var i=0;
var timer;

$(function(){

    $(".ig").eq(0).show().siblings().hide();
    lunbotu();

    $(".tab li").hover(function(){
        clearInterval(timer);
        i=$(this).index();
        pshow();
    },function(){
        lunbotu();
    });

    $(".but1").click(function(){
        clearInterval(timer);
        i--;
        if(i==0){
            i=4;
        }
        pshow();
        lunbotu();
    });
    $(".but2").click(function(){
        clearInterval(timer);
        i++;
        if(i==4){
            i=0;
        }
        pshow();
        lunbotu();
    });



});


function lunbotu(){
    timer = setInterval(function(){
        i++;
        if(i==4){
            i=0;
        }
        pshow();
    },2000)
}

function pshow(){
    $(".ig").eq(i).show().siblings().hide();
    $(".tab li").eq(i).addClass("bg").siblings().removeClass("bg");
}