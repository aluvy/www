$(document).ready(function(){

    var busiCount = 2;
    var busiCnt = 1;

    // BUSINESS
    $('.business .business_box ul li:eq(0)').show();
    $('.business .business_img img:eq(0)').show();

    $('.business .business_btn a').click(function(e){
        e.preventDefault();

        if($(this).is('.btnPrev')){ // 오른쪽 버튼 클릭
            if(busiCnt == 1){ busiCnt = busiCount+1; }
            busiCnt--; //카운트 감소  // 1 2 1 2
        }else if($(this).is('.btnNext')){  //왼쪽 버튼 클릭
            if(busiCnt == busiCount){ busiCnt = 0; }
            busiCnt++; //카운트 1씩증가
        }

        $('.business .business_box ul li').hide();
        $('.business .business_box ul li:eq('+ (busiCnt-1) +')').fadeIn();

        $('.business .business_img img').hide();
        $('.business .business_img img:eq('+ (busiCnt-1) +')').fadeIn();

    });




    // 미디어센터
    var mediaCount = 10; // 총 갯수
    var mediaSize = 420; // 개당 사이즈
    var mediaPosition = -4200; // 첫값 기본셋팅
    var mediaWidth = mediaCount * mediaSize; //총갯수 * 개당사이즈

    // 총 5개일 때 첫값 -2100, 끝값 -4200
    // 총 10개 일 때는 첫값 -4200, 끝값 -8400
    
    $('.movebox ul').after($('.movebox ul').clone()).after(($('.movebox ul:first').clone())); //3개 복제
    $('.movebox').css('width', mediaWidth*3).css('left',-4200);

    $('.media_btn a').click(function(e){
        e.preventDefault();

        if($(this).is('.btnPrev')){
            
            if(mediaPosition == -8400){ // 끝값과 같으면
                $('.movebox').css('left',-4200); // 첫값으로
                mediaPosition = -4200; // 첫값으로
            };
            mediaPosition -= mediaSize;

            $('.movebox').stop().animate({left:mediaPosition}, 'fast', // 콜백함수 (마지막에 계산)
            function(){
                if(mediaPosition == -8400){
                    $('.movebox').css('left',-4200);
                    mediaPosition = -4200;
                };
            });

        } else if ($(this).is('.btnNext')){
            
            if(mediaPosition == -4200){ // 첫값과 같으면
                
                $('.movebox').css('left',-8400); // 끝값으로
                mediaPosition = -8400; // 끝값으로
                
            }
            mediaPosition += mediaSize;

            $('.movebox').stop().animate({left:mediaPosition}, 'fast', // 콜백함수 (마지막에 계산)
            function(){
                if(mediaPosition == -4200){
                    $('.movebox').css('left',-8400);
                    mediaPosition = -8400;
                };
            });

        } else if ($(this).is('.more')){ // more 링크
            var thisurl = $('.media_btn .more').attr('href');
            window.location = thisurl;            
        }

    });

        
    



    // scroll transition
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var mainScroll = $(window).scrollTop(); //스크롤의 거리
        // var mainScrollGap = $(window).height() / 2;
        var mainScrollGap = $(window).height() - 500;
        
        // BUSINESS
        var mainBusiness = $('.business').offset().top - mainScrollGap;
        if(mainScroll > mainBusiness){
            $('.business').addClass('active');
        } else if(mainScroll < mainBusiness - 500){
            $('.business').removeClass('active');
        };

        // 지속가능경영
        var mainSus = $('.sus').offset().top - mainScrollGap;
        if(mainScroll > mainSus){
            $('.sus').addClass('active');
        } else if(mainScroll < mainSus - 500){
            $('.sus').removeClass('active');
        };

        // 미디어센터
        var mainMedia = $('.media').offset().top - mainScrollGap;
        if(mainScroll > mainMedia){
            $('.media').addClass('active');
        } else if(mainScroll < mainMedia - 500){
            $('.media').removeClass('active');
        };

        // 뉴스룸
        var mainNotice = $('.notice').offset().top - mainScrollGap;
        if(mainScroll > mainNotice){
            $('.notice').addClass('active');
        } else if(mainScroll < mainNotice - 500){
            $('.notice').removeClass('active');
        };

        // 인재채용
        var mainRecruit = $('.recruit').offset().top - mainScrollGap - 200;
        if(mainScroll > mainRecruit){
            $('.recruit').addClass('active');
        } else if(mainScroll < mainRecruit - 500){
            $('.recruit').removeClass('active');
        };

    });


});