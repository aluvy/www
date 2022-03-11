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


    
    
    // setTimeout
    // setTimeout(function(){ 
    //     $('.section .cont').slideUp();
    //     $('.section .open_btn i').css({transform: 'rotate(180deg)'});
    // }, 0);  // 3초 후 작동
    // setTimeout
    setTimeout(function(){ 
        $('.section .cont').slideDown();
        $('.section .open_btn i').css({transform: ''});
    }, 500);  // 3초 후 작동






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




    




    // toggle
    // $('.section h2').toggle(function(){
    //     $(this).next().next('.cont').slideUp();
    //     $(this).next().children('i').css({transform: 'rotate(180deg)'});
    // }, function(){
    //     $(this).next().next('.cont').slideDown();
    //     $(this).next().children('i').css({transform: ''});
    // });
    $('.section .open_btn').toggle(function(){
        $(this).next('.cont').slideUp();
        $(this).children('i').css({transform: 'rotate(180deg)'});
    }, function(){
        $(this).next('.cont').slideDown();
        $(this).children('i').css({transform: ''});
    });

});