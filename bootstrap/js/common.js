$(document).ready(function(){



    // intro
    setTimeout(function(){
        $('.pageintro').fadeOut();
        
    }, 3000);

    // Initialize Swiper
    setTimeout(function(){    // intro 후 실행
        var swiper1 = new Swiper('.main_visual .swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.main_visual .swiper-button-next',
                prevEl: '.main_visual .swiper-button-prev',
            },
            pagination: {
                el: '.main_visual .swiper-pagination',
                type: 'bullets',
            },
            // speed: 1,
            autoplay: {
                delay: 5000,
            },

        });
        
    }, 3000);

    var swiper2 = new Swiper(".model .mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //     el: ".model .swiper-pagination",
        //     clickable: true,
        // },
        navigation: {
            nextEl: ".model .swiper-button-next",
            prevEl: ".model .swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 1,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                slidesPerGroup: 1,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 50,
                slidesPerGroup: 1,
            },
        },
    });

    
    var screenWidth, screenHeight, headerHeight, modelRowHeight;
    var nav = [];
    var kframe = $('.kframe');
    var kframeTop = [];

    function reSize(){
        //screenWidth = $(document).width();
        screenWidth = $(window).width();
        screenHeight = $(window).height();
        headerHeight = $('#headerArea').height();
        //modelRowHeight = $('.model_pop .image').height();
        //modelRowHeight = $('.model_pop .row .col-lg-6:eq(0)').height();
        // screenWidth = $('body').innerWidth();


        if(screenWidth > 767){ // PC

            // PC visual image change / 3 1 2 3 1 / 
            $('.main_visual .swiper-slide:eq(0) img').attr('src', 'images/visual3.jpg');
            $('.main_visual .swiper-slide:eq(1) img').attr('src', 'images/visual1.jpg');
            $('.main_visual .swiper-slide:eq(2) img').attr('src', 'images/visual2.jpg');
            $('.main_visual .swiper-slide:eq(3) img').attr('src', 'images/visual3.jpg');
            $('.main_visual .swiper-slide:eq(4) img').attr('src', 'images/visual1.jpg');

            // navigation attr reset
            $('#headerArea .nav li').attr('data-toggle','').attr('data-target','');

            //model pop height
            //$('.model_pop .row .text').css('height', modelRowHeight);

            
        } else { // Mobile

            // mobile visual image change / 3 1 2 3 1 / 
            $('.main_visual .swiper-slide:eq(0) img').attr('src', 'images/visual3_mobile.jpg');
            $('.main_visual .swiper-slide:eq(1) img').attr('src', 'images/visual1_mobile.jpg');
            $('.main_visual .swiper-slide:eq(2) img').attr('src', 'images/visual2_mobile.jpg');
            $('.main_visual .swiper-slide:eq(3) img').attr('src', 'images/visual3_mobile.jpg');
            $('.main_visual .swiper-slide:eq(4) img').attr('src', 'images/visual1_mobile.jpg');

            // navigation attr add
            $('#headerArea .nav li').attr('data-toggle','collapse').attr('data-target','#bs-example-navbar-collapse-1');

            //model pop height
            //$('.model_pop .row .text').css('height', '');
            
        }


        // navigation link value
        nav[0] = $('.history').offset().top - headerHeight;
        nav[1] = $('.model').offset().top - headerHeight;
        nav[2] = $('.capability').offset().top - headerHeight;
        nav[3] = $('.jeepwave').offset().top - headerHeight;



        // history image change
        if(screenWidth > 992){
            $('.history .img img').attr('src', 'images/history.jpg');
        } else {
            $('.history .img img').attr('src', 'images/history_mobile.jpg');
        }

        // kframe top value
        for (var i=0; i<kframe.length; i++){
            kframeTop[i] = $('.kframe:eq(' + i + ')').offset().top;
        }

    };
    reSize()


    $(window).resize(function(){
        reSize();
    });



    // navigation click event
    // $('#headerArea .nav li a').click(function(e){
    //     e.preventDefault();

    //     var ind = $(this).index('#headerArea .nav li a');
        
    //     $('html, body').animate({scrollTop: nav[ind]}, 300);
        
    // });



    

    // kframe active event
    function kframeFunc(){
        var scrollTop = $(window).scrollTop();

        for (var i=0; i<kframe.length; i++){

            if(scrollTop+(screenHeight-250) > kframeTop[i]){
                $('.kframe:eq('+ i +')').addClass('active');
            }
        }
    }
    kframeFunc();
    

    // quicktop, kframe animation
    $(document).scroll(function(){
        var scrollTop = $(window).scrollTop();

        if(scrollTop > screenHeight-screenHeight/2){
            $('.quicktop').fadeIn();
        } else {
            $('.quicktop').fadeOut();
        }


        kframeFunc();


    });




    // quicktop click event
    $('.quicktop a').click(function(e){
        e.preventDefault();

        $(document).scrollTop(0);
        //$('html, body').animate({scrollTop: '0'}, 300);
    });



    

    
    
    // model
    $.ajax({
        url: './js/car.json',
        dataType: 'json',
        success: function(data){
            var carData = data.car_info;
            var ind;
            var cartxt = '';

            function carPrint(ind){
                
                cartxt = '';
                cartxt += '<div class="row">';
                cartxt += '<div class="col-lg-6">';
                cartxt += '<div class="cont">';
                cartxt += '<div class="image">';
                cartxt += '<img src="./images/car/car' + (ind+1) + '_1.jpg" alt="car image">';
                cartxt += '<ul>';

                for (var i in carData[ind].car_color){
                    cartxt += '<li><a href="#" style="background:#'+ carData[ind].car_color[i] +';"></a></li>';
                }

                cartxt += '</ul>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '<div class="col-lg-6">';
                cartxt += '<div class="cont">';
                cartxt += '<div class="text">';
                cartxt += '<span>'+ carData[ind].car_subname +'</span>';
                cartxt += '<strong>' + carData[ind].car_name + '</strong>';
                cartxt += '<p>' + carData[ind].car_text + '</p>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '</div>';
                cartxt += '<a href="#" class="close"></a>';

                $('.model_pop').html(cartxt);
            }
            //carPrint();


            
            $('.model .swiper-slide').click(function(e){
                e.preventDefault();

                ind = Number($(this).attr('data-swiper-slide-index'));

                carPrint(ind);
        
                $('.model_pop').fadeIn();
                $('.model_pop_bg').fadeIn();

            });


            // color
            $(document).on('click', '.model_pop ul li a', function(e){
                e.preventDefault();
                
                var colorind = $(this).index('.model_pop ul li a');

                $('.model_pop .image img').attr('src', './images/car/car' + (ind+1) + '_'+ (colorind+1) +'.jpg');

            });
            


        }
    });



    // model close
    $(document).on('click', '.model_pop .close, .model_pop_bg', function(e){
        e.preventDefault();

        $('.model_pop').fadeOut(function(){
            $('.model_pop').html('');
        });
        $('.model_pop_bg').fadeOut();

    
    });
    



});