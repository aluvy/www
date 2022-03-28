$(document).ready(function(){



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
    var wt = $(window).width();
    var nowTop = cnt * ht;
    var scroll = $(window).scrollTop();
    var section = [];
    var sectionLen = $('section').length;  // section의 갯수
    var timer;

    // 초기세팅
    $("html,body").scrollTop(0); // 스크롤 맨 위로
    
    if(wt>1024){
        $("section").height(ht);
    } else {
        $("section").height('auto');
        $(".main").height(ht);
    }



    // scroll down
    $('.scroll_down').on('click', function(){
        cnt = 1;
        // scrollMove(cnt);    // section eq1 로 이동
        $("html,body").stop().animate({"scrollTop":section[cnt]},500);
    })



    //메뉴 버튼 클릭시
    $("#gnb li").on("click",function(e){
        e.preventDefault();
        cnt = $(this).index(); //변수 cnt에 현재 클릭한 li의 순서값을 저장 0 1 2 3
        scrollMove(cnt);    // section eq (cnt)로 이동
    });



    // resize
    $(window).on("resize",function(){
        ht = $(window).height();
        wt = $(window).width();

        // scroll = $(window).scrollTop();
        if(wt>1024){
            $("section").height(ht);
        } else {
            $("section").height('auto');
            $(".main").height(ht);
        }

        sectionTop();
        scrollMove(cnt);    // section cnt로 이동
    });


    


    
    // section위에서 마우스 휠을 움직이면
    $('section').on("mousewheel DOMMouseScroll", function(event,delta){

        if (delta > 0 && cnt > 0 && wt>1024 && window.matchMedia("(min-width: 1024px)").matches) { //마우스 휠을 올렸을때

            clearTimeout(timer);
            timer = setTimeout(function(){
                console.log(cnt);
                cnt --;
                scrollMove(cnt);
            }, 150);
            return false;
        
        }else if (delta < 0 && cnt < sectionLen && wt>1024 && window.matchMedia("(min-width: 1024px)").matches) {  //마우스 휠을 내렸을때
            
            clearTimeout(timer);
            timer = setTimeout(function(){
                console.log(cnt);
                cnt ++;
                scrollMove(cnt);
            }, 150);
            return false;
        }
    });




    $(window).on('scroll', function(){

        sectionTop();
        for(var i=0; i<sectionLen; i++){
            if(scroll >= section[i] && scroll < section[i]+ht){
                cnt = i;
                
                $("#gnb li").removeClass();
                $("#gnb li").eq(cnt).addClass("on");

                $('article section').removeClass('active');
                $('article section').eq(cnt).addClass('active');

                // console.log(i + ' ' + cnt + ' ' + scroll + ' ' + section[i]);
                // if(cnt == 3 || cnt == 5 ){  // mobile, bootstrap 배경 변경
                //     $('#wrap').removeClass('dark');
                //     $('#wrap').addClass('bright');
                // } else {
                //     $('#wrap').removeClass('bright');
                //     $('#wrap').addClass('dark');
                // }
            }
        }

        if( $('section.mobile').hasClass('active') || $('section.bootstrap').hasClass('active')){
            $('#wrap').removeClass('dark');
            $('#wrap').removeClass('design');
            $('#wrap').addClass('bright');

        } else if( $('section.design').hasClass('active') ) {
            $('#wrap').removeClass('bright');
            $('#wrap').removeClass('dark');
            $('#wrap').addClass('design');

        } else {
            $('#wrap').removeClass('bright');
            $('#wrap').removeClass('design');
            $('#wrap').addClass('dark');
        }


    });



    // 섹션 높이값 저장
    function sectionTop(){
        scroll = $(window).scrollTop();
        section = [];
        section = $('section');

        for(var i=0; i<sectionLen; i++){
            section[i] = Math.round(section.eq(i).offset().top);
            // console.log(section[i]);
        }
    }
    sectionTop();


    // animation
    function scrollMove(cnt){
        // nowTop = ht * cnt;
        // section[cnt];
        if(wt>1024){
            $("html,body").stop().animate({"scrollTop":section[cnt]},500);
            console.log('scrollMove Call');
        }

        $("#gnb li").removeClass();
        $("#gnb li").eq(cnt).addClass("on");

        $('article section').removeClass('active');
        $('article section').eq(cnt).addClass('active');

        // if(cnt == 3 || cnt == 5 ){  // mobile, bootstrap 배경 변경
        //     $('#wrap').removeClass('dark');
        //     $('#wrap').addClass('bright');
        // } else {
        //     $('#wrap').removeClass('bright');
        //     $('#wrap').addClass('dark');
        // }
    }
    scrollMove(cnt);






    $('.gnb_open').on('click', function(e){
        e.preventDefault();

        if($('#gnb').hasClass('on')){
            $('#gnb').removeClass('on');
        } else {
            $('#gnb').addClass('on');
        }
    })

    $('#gnb li').on('click', function(){

        if($('#gnb').hasClass('on')){
            $("html,body").stop().animate({"scrollTop":section[cnt]},500);
            $('#gnb').removeClass('on');
        }

    });



});