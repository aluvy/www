$(document).ready(function() {

    var screenSize, screenHeight;
    
    /* url */
    var myURL = $(location).attr('pathname'); // /media/about.html
    myURL = myURL.split('/'); // myURL = ['', media, about.html]
    myURL = myURL[2]; // about.html
    myURL = myURL.split('.html', 1); // myURL = [about]
    myURL = myURL[0]; // about

    console.log(myURL);
    
    //$('.videoBox h2').html(myURL); // 페이지 타이틀 변경
    $('#content .pagettl h2').html(myURL);

    function screen_size(){
        screenSize = $(window).width(); //스크린의 너비
        screenHeight = $(window).height();  //스크린의 높이

        //$("#content").css('margin-top',screenHeight);
        $('#content .pagettl').css('height', screenHeight);

        if( screenSize > 768){
            $(".videoBox img").attr('src','./images/' + myURL + '/vis.jpg');
        }
        if(screenSize <= 768){
            $(".videoBox img").attr('src','./images/' + myURL +  '/vis_1024.jpg');
        }
    }
    screen_size();


    $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        screen_size();
    });

    // $('.scrolldown').click(function(e){
    //     e.preventDefault();
        
    //     screenHeight = $(window).height();
    //     $('html,body').animate({'scrollTop':screenHeight}, 500);
    // });



    // CSS scroll motion
    var kframe = $('.kframe');
    var myTop = [];
    var windowHeight = $(window).height(); // 창 높이 값
    var windowTop = $(window).scrollTop(); // 창 탑 값
    var value = windowTop + windowHeight - 300;

    function kframeValue(){
        kframe = $('.kframe');
        windowHeight = $(window).height(); // 창 높이 값
        windowTop = $(window).scrollTop(); // 창 탑 값
        value = windowTop + windowHeight - 300;
    };
    
    $(window).resize(function(){
        kframeValue();
    });


    $(document).scroll(function(){

        kframeValue();

        for(var i=0; i<kframe.length; i++){

            myTop[i] = $('.kframe:eq(' + i + ')').offset().top;
            
            if(value >= myTop[i]){
                $('.kframe:eq(' + i + ')').addClass('active');
            }
        }
    });



});