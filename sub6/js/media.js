$(document).ready(function(){

    //전역변수
    var param = [];
    var value, key;

    function getParams() {

        var url = decodeURIComponent(location.href); // 현재 페이지의 url
        url = decodeURIComponent(url); // url = ex.html?num=1&name=홍길동
        // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    
        var params = '';
        params = url.substring( url.indexOf('?')+1, url.length ); //substring : 문자를 잘라내는 함수 //num=0&item=0

        params = params.split("&");  //num=0   , item=0

        var size = params.length;  //배열의 개수 2개 //0, 1
        //var key, value;
        for(var i=0 ; i < size ; i++) {
            key = params[i].split("=")[0];  // key = num, item
            value = params[i].split("=")[1];  // value = 0, 0
            
            param[key] = value;   // param['num'] = '100';   param['name'] = 홍길동;
        }
        
    }
    getParams();


    // tab on with 매개변수
    $('.tab ul li').removeClass('current');
    $('.contBox').hide();

    if(param['num'] == 1 || param['num'] == 2){
        $('.tab ul li:eq('+ param['num'] +')').addClass('current');
        $('.contBox:eq('+ param['num'] +')').show();
    } else {
        $('.tab ul li:eq(0)').addClass('current');
        $('.contBox:eq(0)').show();
    }





    // service worker navigation preload 대응
    addEventListener("fetch", event => { 
        event.respondWith(async function() {
            // Respond from the cache if we can
            const cachedResponse = await caches.match(event.request);
            if (cachedResponse) return cachedResponse; 
            // Else, use the preloaded response, if it's there 
            const response = await event.preloadResponse;
            if (response) return response;
            // Else try the network. 
            return fetch(event.request);
        }());
    });



    // 매개 수 1개 일 때 //////////////////////////////////////////////////////////////////////
    // var value, key;
    // function getParams() {

    //     var url = decodeURIComponent(location.href); // 현재 페이지의 url
    //     url = decodeURIComponent(url); // url = ex.html?num=1&name=홍길동
    //     // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    
    //     var params = '';
    //     params = url.substring( url.indexOf('?')+1, url.length ); //substring : 문자를 잘라내는 함수

    //     key = params.split("=")[0];  //'num'
    //     value = params.split("=")[1];  // '1'
    //     key = Number(value);
        
    // }
    // getParams();


    // // tab on with 매개변수
    // $('.tab ul li').removeClass('current');
    // $('.contBox').hide();

    // //console.log(key);
    // if(key == 1 || key == 2){
    //     $('.tab ul li:eq('+ key +')').addClass('current');
    //     $('.contBox:eq('+ key +')').show();
    // } else {
    //     $('.tab ul li:eq(0)').addClass('current');
    //     $('.contBox:eq(0)').show();
    // }
    // 매개 수 1개 일 때 //////////////////////////////////////////////////////////////////////




    // click
    $('.tab ul a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.tab ul a');

        $('.tab ul li').removeClass('current');
        $('.tab ul li:eq('+ind+')').addClass('current');

        $('.contBox').hide();
        $('.contBox:eq('+ind+')').fadeIn();

    });



    // 홍보영화 ajax
    $.ajax({
        url: './js/media.json',
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

                var moviePop = '<div class="ttl">';
                moviePop += '<strong>' + useMovie[ind].title + '</strong>';
                moviePop += '<span>' + useMovie[ind].summary + '</span>';
                moviePop += '</div>';
                moviePop += ' <iframe width="800" height="451" src="' + useMovie[ind].youtube + '?rel=0" frameborder="0" allowfullscreen></iframe>';
                moviePop += '<a href="#" class="close">닫기</a>';
                
                $('.movie_pop').html(moviePop);
            }

            // popclose
            function movieClose(){
                $('.movie .close, .movie_pop_back').click(function(e){
                    e.preventDefault();
    
                    $('.movie_pop').fadeOut('fast');
                    $('.movie_pop_back').fadeOut('fast');
                    $('.movie_pop').html('');
                });
            }

            // 매개변수 item 값이 있으면 연다
            if(param['item'] < 9){
                ind = param['item'];
                moviePop();
                $('.movie_pop').slideDown('fast');
                $('.movie_pop_back').fadeIn('fast');

                //$('html, body').stop().animate({scrollTop:1000}, 100);
                setTimeout(function(){
                    $('html,body').scrollTop(1000);
                }, 300);

                movieClose();
            }

            // 홍보영화
            $('.movie_list li a').click(function(e){
                e.preventDefault();

                ind = $(this).index('.movie_list li a');
                
                moviePop();

                $('.movie_pop').slideDown('fast');
                $('.movie_pop_back').fadeIn('fast');

                movieClose();

            });


        }
    });



    




    // 광고영상 ajax
    $.ajax({
        url: './js/media.json',
        dataType : 'json',
        success : function(data){
            var useVideo = data.advideo;
            var ind = 0;

            function videoPrint(){

                var videomain = '<iframe width="900" height="506" src="' + useVideo[0].youtube + '?rel=0" frameborder="0" allowfullscreen></iframe>';
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
            if(param['ad'] < 8){
                ind = param['ad'];
                
                $('.advideo_main iframe').attr('src', useVideo[ind].youtube);
                $('.advideo_main .ttl strong').html(useVideo[ind].title);
                $('.advideo_main .ttl span').html(useVideo[ind].summary);

                //$('html, body').stop().animate({scrollTop:1000}, 100);
                setTimeout(function(){
                    $('html,body').scrollTop(1000);
                }, 300);
            }
            

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
    $('.poster_container').responsiveGallery({
        animatDuration: 400,
        $btn_prev: $('.btn_prev'),
        $btn_next: $('.btn_next')
    });


    
    
    
});