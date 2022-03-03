$(document).ready(function() {

    var timeonoff; //자동기능 구현
    var imageCount = 3;  //이미지 개수 *** 
    var cnt = 1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
    //var direct = 1;  //1씩 증가(+1)/감소(-1)
    var position = 0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
    var windowWidth = $( window ).width(); // 디바이스 가로값
    //var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때


    
    // 초기셋팅
    $('.visual .dock span:eq(0)').addClass('on');
    $('.gallery .slogan:eq(0)').addClass('active');
    //$('.visual .gallery').css({width:windowWidth*3});


    $(window).resize(function(){
        clearInterval(timeonoff); // 타이머 중지
        windowWidth = $( window ).width(); // 디바이스 가로값

        if(cnt == 0){ cnt = imageCount; } // 1 2 3 1 2 3

        position = -(cnt-1) * windowWidth;
        $('.gallery').css({left:position}); // 이미지 left값

        timeonoff= setInterval( moveg , 4000);
    });

    // 자동 슬라이드
    function moveg(){
        //windowWidth = $( window ).width(); // 디바이스 가로값
        //$('.visual .gallery').css({width:windowWidth*3});

        if(cnt == imageCount+1){ cnt=1; }
        if(cnt == imageCount){ cnt=0; }  //카운트 초기화
        cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..

        position = -(cnt-1) * windowWidth;
        $('.gallery').stop().animate({left:position}, 'slow'); // 이미지 left값

        $('.gallery .slogan').removeClass('active');
        $('.gallery .slogan:eq('+ (cnt-1) +')').addClass('active');
        
        $('.visual .dock span').removeClass('on');// 버튼 off
        $('.visual .dock span:eq('+ (cnt-1) +')').addClass('on');// 나만 on

        $('.visual .cnt span:eq(0)').html('0'+cnt);

        if(cnt == imageCount){ cnt=0 };
    }
    timeonoff= setInterval( moveg , 4000); //4초마다 자동기능




    var startX, endX;

    $('.visual').on('touchstart mousedown',function(e){
        //e.preventDefault();

        clearInterval(timeonoff); // 타이머 중지
        startX = e.pageX || e.originalEvent.touches[0].pageX;
    });
    
    $('.visual').on('touchend mouseup',function(e){
        //e.preventDefault();

        endX = e.pageX || e.originalEvent.changedTouches[0].pageX;

        //y_size= Math.abs(startY - endY);
        //console.log(y_size);
        
        if(startX < endX) {
            if(cnt == 1){ cnt = imageCount+1; } // cnt = 6
            if(cnt == 0){ cnt = imageCount; } // cnt = 5
            cnt--; //카운트 감소
            //console.log('왼쪽에서 오른쪽으로 터치');

        }else if (startX > endX){
            if(cnt == imageCount+1){ cnt=1; }
            if(cnt == imageCount){ cnt=0; }  //카운트 초기화
            cnt++; //카운트 1씩증가
            //console.log('오른쪽에서 왼쪽으로 터치');
        } 

        position = -(cnt-1) * windowWidth; // 현재 cnt에 해당하는 left값
        $('.gallery').stop().animate({left:position}, 'slow');

        $('.gallery .slogan').removeClass('active');
        $('.gallery .slogan:eq('+ (cnt-1) +')').addClass('active');
    
        $('.visual .dock span').removeClass('on');// 버튼 off
        $('.visual .dock span:eq('+ (cnt-1) +')').addClass('on');// 나만 on

        $('.visual .cnt span:eq(0)').html('0'+cnt);

        timeonoff= setInterval( moveg , 4000);
    });


    


    // business
    var BusiCNT = 0;
    $('.business .control a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.business .control a');
        
        if(ind == 0){
            if(BusiCNT == 0){ BusiCNT = 2;}
            BusiCNT --;
        } else if (ind == 1){
            if(BusiCNT == 1){ BusiCNT = -1;}
            BusiCNT ++;
        }

        $('.business ul li').hide();
        $('.business ul li:eq(' + BusiCNT + ')').fadeIn();
        
    });





    // media
    var mediaLength = 9;
    var mediaWidth = ($('.media ul li').width() * 10) + (mediaLength * 20); // ul 가로값
    var mediaLeft = $('.media ul').scrollLeft() + $('.media').width();
    var mediaScroll = (mediaLeft * 100) / mediaWidth;

    $('.media .cnt span').css({width:mediaScroll+'%'});

    // media
    $('.media ul').on('scroll', (function(){
        //mediaLength = 2;
        mediaWidth = ($('.media ul li').width() * 10) + (mediaLength * 20); // ul 가로값
        mediaLeft = $('.media ul').scrollLeft() + $('.media').width();
        mediaScroll = (mediaLeft * 100) / mediaWidth;

        $('.media .cnt span').css({width:mediaScroll+'%'});

    }));





    // FAQ
    var faqArticle = $('.faq ul li'); // 전체 li

    $('.faq ul li p a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent('li'); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children().next().stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            faqArticle.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            faqArticle.children().next().stop().slideUp('fast');
            answer.children().next().stop().slideDown('fast');
        }
    });


    

});