$(document).ready(function(){

    
    // 매개 수 1개 일 때 //////////////////////////////////////////////////////////////////////
    var value, key;
    function getParams() {

        var url = decodeURIComponent(location.href); // 현재 페이지의 url
        url = decodeURIComponent(url); // url = ex.html?num=1&name=홍길동
        // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    
        var params = '';
        params = url.substring( url.indexOf('?')+1, url.length ); //substring : 문자를 잘라내는 함수

        key = params.split("=")[0];  //'num'
        value = params.split("=")[1];  // '1'
        key = Number(value);
        
    }
    getParams();


    
    var media_onoff = false;
    var media_tab =['홍보영화', '광고영상', '인쇄광고'];

    //console.log(key);
    // tab on with 매개변수
    if(key == 1 || key == 2){
        $('.media_tab span').html(media_tab[key]);
        $('.contBox:eq(' + key + ')').show();
        
        setTimeout(function(){
            $("html,body").scrollTop(350); // 스크롤
        }, 500);
    } else {
        //$('.media_tab span').html();
        $('.contBox:eq(0)').show();
    }


    $('.media_tab span').click(function(e){
        e.preventDefault();
        
        if(media_onoff == false){
            $(this).addClass('on');
            $('.media_tab ul').stop().slideDown();
            media_onoff = true;
        } else {
            $(this).removeClass('on');
            $('.media_tab ul').stop().slideUp();
            media_onoff = false;
        }

    });


    $('.media_tab ul li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.media_tab ul li a');
        //console.log(ind);

        $('.media_tab span').html(media_tab[ind]);

        $('.contBox').hide();
        $('.contBox:eq(' + ind + ')').show();

        $('.media_tab span').removeClass('on');
        $('.media_tab ul').stop().slideUp();
        media_onoff = false;
        
    });
    // 매개 수 1개 일 때 //////////////////////////////////////////////////////////////////////



    // 홍보영화 ajax
    $.ajax({
        url: './js/sub_media.json',
        dataType : 'json',
        success : function(data){
            var useMovie = data.movie;
            var ind = 0;


            function moviePrint(){
                var movietxt = '<ul>';

                for(var i in useMovie){
                    movietxt += '<li><a href="#">';
                    movietxt += '<div class="image"><img src="'+ useMovie[i].image +'" alt="'+ useMovie[i].title +'"></div>';
                    movietxt += '<p>' + useMovie[i].title + '</p>';
                    movietxt += '<span>' + useMovie[i].summary + '</span>';
                    movietxt += '</a></li>';
                }
                movietxt += '</ul>';

                $('.movie_list').html(movietxt);

            };
            moviePrint();



            // popup
            function moviePop(){

                var moviePop = '';
                moviePop += '<div class="video-container"><iframe src="' + useMovie[ind].youtube + '?rel=0" frameborder="0" allowfullscreen></iframe></div>';
                moviePop += '<div class="ttl">';
                moviePop += '<strong>' + useMovie[ind].title + '</strong>';
                moviePop += '<span>' + useMovie[ind].summary + '</span>';
                moviePop += '</div>';
                moviePop += '<a href="#" class="close">닫기</a>';
                
                $('.movie_pop').html(moviePop);
                $("html, body").css({"overflow":"hidden"}); // body scroll 비활성화
                /* blur */
                $('#headerArea, .sub_layout, .title_area, .media_tab, .movie_list, #footerArea').css({filter:"blur(5px)"});
            }

            // popclose
            function movieClose(){
                $('.movie .close, .movie_pop_back').click(function(e){
                    e.preventDefault();
    
                    $('.movie_pop').fadeOut('fast');
                    $('.movie_pop_back').fadeOut('fast');
                    $('.movie_pop').html('');
                    $("html, body").css({"overflow":""}); // body scroll 활성화
                    $('#headerArea, .sub_layout, .title_area, .media_tab, .movie_list, #footerArea').css({filter:""});
                });
            }

            // 매개변수 item 값이 있으면 연다
            // if(param['item'] < 9){
            //     ind = param['item'];
            //     moviePop();
            //     $('.movie_pop').slideDown('fast');
            //     $('.movie_pop_back').fadeIn('fast');

            //     //$('html, body').stop().animate({scrollTop:1000}, 100);
            //     setTimeout(function(){
            //         $('html,body').scrollTop(1000);
            //     }, 300);

            //     movieClose();
            // }

            // 홍보영화
            $('.movie_list li a').click(function(e){
                e.preventDefault();

                ind = $(this).index('.movie_list li a');
                
                moviePop();

                $('.movie_pop').fadeIn('fast');
                $('.movie_pop_back').fadeIn('fast');

                movieClose();

            });


        }
    });



    




    // 광고영상 ajax
    $.ajax({
        url: './js/sub_media.json',
        dataType : 'json',
        success : function(data){
            var useVideo = data.advideo;
            var ind = 0;

            function videoPrint(){

                var videomain = '<div class="video-container"><iframe src="' + useVideo[0].youtube + '?rel=0" frameborder="0" allowfullscreen></iframe></div>';
                videomain += '<div class="ttl">';
                videomain += '<strong>' + useVideo[0].title + '</strong>';
                videomain += '<span>' + useVideo[0].summary + '</span>';
                videomain += '</div>';


                var videotxt = '<ul>';
                for(var i in useVideo){
                    videotxt += '<li><a href="#">';
                    videotxt += '<div class="image"><img src="'+ useVideo[i].image +'" alt="'+ useVideo[i].title +'"></div>';
                    videotxt += '<p>' + useVideo[i].title + '</p>';
                    videotxt += '<span>' + useVideo[i].summary + '</span>';
                    videotxt += '</a></li>';
                }
                videotxt += '</ul>';

                $('.advideo_main').html(videomain);
                $('.advideo_list').html(videotxt);
            };
            videoPrint();



            // 매개변수 ad 값이 있으면 연다
            // if(param['ad'] < 8){
            //     ind = param['ad'];
                
            //     $('.advideo_main iframe').attr('src', useVideo[ind].youtube);
            //     $('.advideo_main .ttl strong').html(useVideo[ind].title);
            //     $('.advideo_main .ttl span').html(useVideo[ind].summary);

            //     //$('html, body').stop().animate({scrollTop:1000}, 100);
            //     setTimeout(function(){
            //         $('html,body').scrollTop(1000);
            //     }, 300);
            // }
            

            $('.advideo_list li a').click(function(e){
                e.preventDefault();

                var scrollvalue = $('.advideo_main').offset().top - 150;
                ind = $(this).index('.advideo_list li a');

                $('.advideo_main iframe').attr('src', useVideo[ind].youtube);
                $('.advideo_main .ttl strong').html(useVideo[ind].title);
                $('.advideo_main .ttl span').html(useVideo[ind].summary);

                $("html,body").stop().animate({"scrollTop":scrollvalue},300); // 스크롤

            });


        }
    });





    // 인쇄광고
    $('.howto').click(function(){
        $(this).fadeOut('fast');
    });

    // setTimeout(function(){
    //     $('.howto').fadeOut('slow');
    // }, 10000);


    
    
    
});