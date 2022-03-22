// typer
window.onload=function(){	
    var el       = document.querySelector('.slogan p')
    var options  = {
        text: '안녕하세요? 프론트엔드 개발자 & 웹퍼블리셔 송미옥입니다',
        textSpeed: 95,
        blinkSpeed: 0.06
    }

    var instance = new tinytyper(el, options);
}







//변수 ht에 브라우저의 높이값을 저장
var cnt = 0;
var ht = $(window).height();

var htcnt = cnt * ht;

$("section").height(ht);    //브라우저의 높이값을 section의 높이값으로 지정


// 초기세팅
$("html,body").stop().animate({"scrollTop":0},500);  // 스크롤 맨 위로


// scroll down
$('.scroll_down').on('click', function(){
    $("html,body").stop().animate({"scrollTop":ht},500);
})






//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
$(window).on("resize",function(){
    var ht = $(window).height();
    $("section").height(ht);


});

// //각각의 section에서 마우스를 움직이면
// $("section").on("mousemove",function(e){



//메뉴 버튼 클릭시
$("#gnb li").on("click",function(e){
    e.preventDefault();
    
    var ht = $(window).height();//변수 ht에 브라우저의 높이값 저장
    var i = $(this).index(); //변수 i에 현재 클릭한 li의 순서값을 저장 0 1 2 3
    
    
    var nowTop = i * ht; //브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일

    //해당 스크롤 위치값으로 문서를 이동
    $("html,body").stop().animate({"scrollTop":nowTop},500);
});




$(window).on("scroll",function(){

    //변수 ht에 현재 브라우저의 넓이값 저장
    var ht = $(window).height();
    
    //변수 scroll에 현재 문서가 스크롤된 거리 저장
    var scroll = $(window).scrollTop();
    // var dht = $(document).height() - ht;
    
    
    for(var i=0; i<7; i++){
        if(scroll >= ht*i && scroll < ht*(i+1)){
            $("#gnb li").removeClass();
            $("#gnb li").eq(i).addClass("on");

            $('article section').removeClass('active');
            $('article section').eq(i).addClass('active');

            
            if(i == 3 || i == 5 ){  // mobile, bootstrap 배경 변경
                $('#wrap').removeClass('dark');
                $('#wrap').addClass('bright');
            } else {
                $('#wrap').removeClass('bright');
                $('#wrap').addClass('dark');
            }

        };
    }


    
    
    //section위에서 마우스 휠을 움직이면
    $("section").on("mousewheel DOMMouseScroll",function(event,delta){

        var ht = $(window).height();
        var dht = $(document).height() - ht;
        var thistop = $(this).offset().top;

        //마우스 휠을 올렸을때	
        if (delta > 0 && thistop > 0) {

            //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
            var prev = $(this).prev().offset().top;
            //문서 전체를 prev에 저장된 위치로 이동
            $("html,body").stop().animate({"scrollTop":prev},500);

            console.log(delta);

            return false;

        //마우스 휠을 내렸을때	 
        }else if (delta < 0 && thistop < dht) {
            
            //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
            var next = $(this).next().offset().top;
            //문서 전체를 next에 저장된 위치로 이동
            $("html,body").stop().animate({"scrollTop":next},500);

            console.log(delta);
            return false;
        }


    });



    

});