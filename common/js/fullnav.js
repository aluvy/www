// service worker navigation preload 대응
// addEventListener("fetch", event => { 
//     event.respondWith(async function() {
//         // Respond from the cache if we can
//         const cachedResponse = await caches.match(event.request);
//         if (cachedResponse) return cachedResponse; 
//         // Else, use the preloaded response, if it's there 
//         const response = await event.preloadResponse;
//         if (response) return response;
//         // Else try the network. 
//         return fetch(event.request);
//     }());
// });


$(document).ready(function() {
    
    var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off=false;  //false(안오버)  true(오버)

    //console.log(smh);
    
    // gnb mouseenter
    $('#headerArea').mouseenter(function(){
        $(this).addClass('on');
        on_off=true;
    });
    
    // gnb mouseleave
    $('#headerArea').mouseleave(function(){
        var scroll = $(window).scrollTop();  //스크롤의 거리
        
        if(scroll>=0 && scroll<smh-50 ){
            $(this).removeClass('on');
        } else if(scroll> smh-50) {
            $(this).addClass('on');
        }
        on_off=false;
    });
    
    // gnb 스크롤 이벤트 체크
    $(window).on('scroll',function(){//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
        //console.log(scroll);
        
        if(scroll>smh-300){//스크롤300까지 내리면
            $('#headerArea').addClass('on');
        } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
            if(on_off==false){
                $('#headerArea').removeClass('on');
            }
        };
    });
    
    // gnb 2depth 열기/닫기
    $('ul.dropdownmenu').hover(
        function() {
            $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
            $('#headerArea').animate({height:400},'fast').clearQueue();
        },function() {
            $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
            $('#headerArea').animate({height:100},'fast').clearQueue();
    });

    // gnb 접근성 tab 처리
    $('ul.dropdownmenu li.menu .depth1').on('focus', function () {
        $('#headerArea').addClass('on');
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        //$(this).parents('.menu').addClass('on');
        $('#headerArea').animate({height:400},'fast').clearQueue();
    });
    
    $('ul.dropdownmenu li.m6 li:last a').on('blur', function () {
        $('#headerArea').removeClass('on');
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        //$(this).parents('.menu').removeClass('on');
        $('#headerArea').animate({height:100},'normal').clearQueue();
    });








    // topmove
    $('.topMove').hide();
    
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
        var scrollFoot = $('#footerArea').offset().top - $(window).height() + 60; // 푸터에서의 값 계산
        
        //$('.text').text(scroll);
        if(scroll > 300){ // 300이상의 거리가 발생되면
            $('.topMove').fadeIn('slow');  // top 보이기

            if(scroll < scrollFoot){ // footer보다 작으면 bottom:20, fixed
                $('.topMove').css('bottom',20).css('position','fixed');
            } else { // footer보다 크면 bottom:200, absolute
                $('.topMove').css('bottom',200).css('position','absolute');
            };
    
        }else{
            $('.topMove').fadeOut('fast'); // top 감추기
        }
    });
    
    $('.topMove a').click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},500);//상단으로 스르륵 이동합니다.
    });



    // 현재 페이지가 index인지 아닌지 판별해서 ajax url 주소 가져오기
    var myIndex, myHtml, myPhp;
    function getMyIndex() {

        var url = decodeURIComponent(location.href); // 현재 페이지의 url
        url = decodeURIComponent(url); // url = ex.html?num=1&name=홍길동
        // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.

        // console.log(url);
    
        myIndex = url.indexOf('index'); // 해당 문자가 없으면 -1을 반환, 있으면 index값을 반환.
        myHtml = url.indexOf('html');
        myPhp = url.indexOf('php');
        // index가 있거나 (숫자값), html이나 php가 없을 경우(-1)
        // console.log(myIndex + ' ' + myHtml + ' ' + myPhp);

    }
    getMyIndex();
    // console.log(myIndex);

    if(myIndex > -1 || (myHtml == -1 && myPhp == -1) ){ // index가 있으면
        // console.log('index당');

        ajaxurl_familysite = './common/js/familysite.json';
        ajaxurl_headersearch = './common/headersearch.html';
    } else { // index가 아니면

        ajaxurl_familysite = '../common/js/familysite.json';
        ajaxurl_headersearch = '../common/headersearch.html';

    }


    // familysite, sns Ajax
    $.ajax({
        url: ajaxurl_familysite,
        dataType: 'json',
        success: function(data){

            // ajax - familysite
            var useFamily = data.familysite;
            function familyPrint(){

                var txtttl = '<a href="#" class="open">Family Site</a>';
                var txt = '<ul style="display:none;">';

                for(var i in useFamily){
                    txt += '<li><a href="'+ useFamily[i].address +'" target="_blank" title="새창으로 열림">'+ useFamily[i].sitename +'</a></li>';
                }

                txt += '</ul>';

                $('.family').html(txtttl); // a만 노출
                //$('.family ul').hide();

                // familysite 클릭
                $('.family .open').toggle(function(e){
                    e.preventDefault();

                    if($(this).is('.on')){
                        // 두번 오픈 방지
                    } else {
                        $('.family').append(txt);
                        $(this).addClass('on');
                        $('.family ul').stop().slideDown(200); // hover 사용 시 stop 메소드 사용
                    }
                
                }, function(e){
                    e.preventDefault();

                    $(this).removeClass('on');
                    $('.family ul').stop().slideUp(200, function(){
                        $('.family ul').remove();
                    }); // hover 사용 시 stop 메소드 사용
                });
                
                // familysite 접근성 tab 처리
                $('.family .open').on('focus', function(){  // focus는 a태그만 받을 수 있다

                    
                    if($(this).is('.on')){
                        // 두번 오픈 방지
                    } else {
                        $('.family').append(txt);
                        $(this).addClass('on');
                        $('.family ul').stop().slideDown(200); // hover 사용 시 stop 메소드 사용
                    }
                    

                    $('.family ul li:last a').on('blur', function(){

                        $(this).parents('.family').find('.open').removeClass('on');
                        $('.family ul').hide();
                        $('.family ul').remove();
                    });
                });
                

            }
            familyPrint();

            
            // ajax - sns
            var snsData = data.sns;
            function snsPrint(){
                var sns = '';

                sns += '<ul>';
                
                for(var i in snsData){
                    sns += '<li><a href="'+ snsData[i].address +'" target="_blank" title="'+ snsData[i].title +'">'+ snsData[i].name +'</a></li>';
                }

                sns += '</ul>';

                $('.sns').html(sns);
            }
            snsPrint();

        }
    });







    // ajax - headersearch 상단검색
    $.ajax({
        url: ajaxurl_headersearch,
        dataType: 'html',
        success: function(data){

            // gnb 검색 열기
            $('#headerArea .top_menu div a').click(function(e){
                e.preventDefault();
                $(".headerSearch").html(data);
                //console.log($('#headerSearch #search'));
                $('#headerSearch').slideDown(function(){
                    $('#headerSearch #search').focus();
                });

                // 검색 닫기
                $('#headerSearch .close').click(function(e){
                    e.preventDefault();
                    $('#headerSearch').slideUp(function(){
                        $(".headerSearch").html('');
                    });
                    
                });
            });

        }
    });








    setTimeout(function(){ 
        // scrollBar
        var footScrollBar = '<div class="scrollBar"><span></span></div>';
        $('#footerArea').append(footScrollBar);

        $(window).on('scroll',function(){

            var scroll = $(window).scrollTop();
            var scroll2 = $(document).height() - window.innerHeight;
            var scroll = (scroll*100)/scroll2;
        
            $('.scrollBar span').css('width', scroll+'%');
        
            //console.log($(scroll +'  '+ scroll2));
        });
      }, 300);


});