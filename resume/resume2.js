$(document).ready(function(){

    var infowrap, windowH, windowW;
    function mySize(){
        infowrap = document.getElementsByClassName('info_wrap');    // info영역
        windowH = window.innerHeight;   // window세로값
        windowW = window.innerWidth;   // window가로값
        
        if(windowW > 1024){
            infowrap[0].style.minHeight = windowH+"px";
        } else {
            infowrap[0].style.minHeight = "";
        }
        
    }
    mySize();
    
    // 리사이즈
    window.addEventListener('resize', function(){
        mySize();
    });


    





    var scrollTop;
    $(document).scroll(function(){
        scrollTop = $(document).scrollTop();
        
        if(scrollTop > 300){
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    });

    // scrollTop click
    $('.scrollTop').click(function(e){
        e.preventDefault();

        $("html,body").stop().animate({"scrollTop":0},500);
    });





    
    
    // setTimeout
    // setTimeout(function(){ 
    //     $('.section .cont').slideUp();
    //     $('.section .open_btn i').css({transform: 'rotate(180deg)'});
    // }, 0);  // 3초 후 작동
    // setTimeout
    setTimeout(function(){ // 첫번째 탭 빼고 닫기 
        
        $('.section:eq(1)').children('.cont').slideDown();
        $('.section:eq(1)').addClass('open');
        

    }, 300);  // 3초 후 작동


    $('.section .open_btn').click(function(){
        if($(this).parent('.section').hasClass('open')){ // open되어있으면

            console.log('hi');
            $(this).next('.cont').slideUp();
            $(this).parent('.section').removeClass('open');
        
        } else {
            $(this).next('.cont').slideDown();
            $(this).parent('.section').addClass('open');
        }
    });


});