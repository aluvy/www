$(document).ready(function(){

    




    var visHeight, screenHeight;

    // 사이즈 받아오기
    function reSize(){
        visHeight = $('.videoBox').height();
        screenHeight = $(window).height();  //스크린의 높이
    }
    reSize();

    // 창 사이즈 변경 시 사이즈 다시 받아오기
    $(window).resize(function(){
        reSize();
    });

    /* 헤더 on 추가 */
    $(document).scroll(function(){

        var windowTop = $(window).scrollTop();
        if(windowTop > visHeight-150){
            $('#headerArea').addClass('on');
        } else {
            $('#headerArea').removeClass('on');
        }

    });


    

    $('.scrolldown').click(function(e){
        e.preventDefault();
        
        screenHeight = $(window).height();
        $('html,body').animate({'scrollTop':screenHeight}, 500);
    });





    // header
    $.ajax({
        url : './header.html',
        dataType : 'html',
        success : function(data){
            $('#headerArea').html(data);
        }
    });


    //var gnbCnt = 0;
    $(document).on('click', '.menuOpen', function(e){
        e.preventDefault();

        if($('#headerArea').hasClass('active')){ // 닫아라

            $("#headerArea").removeClass('active');
            //$('html, body').css({overflow:""});
            //$('.videoBox, #content, #footerArea').css({filter:""});
            //gnbCnt = 0;
        } else { // 열어라
            
            $("#headerArea").addClass('active');
            //$('html, body').css({overflow:"hidden"});
            //$('.videoBox img, .videoBox video, #content, #footerArea').css({filter:"blur(10px)"});
            //gnbCnt = 1; // open상태
        }
    });

    $(document).on('click', '.nav_bg', function(){
        $("#headerArea").removeClass('active');
    });

    // respon gnb
    // $(window).resize(function(){ 
    //     var screenSize = $(window).width();
    //     if( screenSize > 768){
    //         $('html, body').css({overflow:""});
    //         $('.videoBox, #content, #footerArea').css({filter:""});
    //     }
    //     if(gnbCnt==1 && screenSize <= 768){ // open 상태에서 768보다 작거나 같을때
    //         $('html, body').css({overflow:"hidden"});
    //         $('.videoBox, #content, #footerArea').css({filter:"blur(10px)"});
    //     }
    // });





    // footer
    $.ajax({
        url : './footer.html',
        dataType : 'html',
        success : function(data){
            $('#footerArea').html(data);
        }
    });

    /* quick top */
    $(document).on('click', '.quicktop', function(e){
        e.preventDefault();
        $('html,body').animate({'scrollTop':0});
    });



});