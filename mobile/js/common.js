$(document).ready(function() {

    // header
    // $.ajax({
    //     url: 'header.html',
    //     dataType: 'html',
    //     success : function(data){
            
    //         $('#headerArea').html(data);

    //     }
    // });



    // 헤더 스크롤 반응
    var smh=$('.visual').height();
    // gnb 스크롤 이벤트 체크
    $(window).on('scroll',function(){//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
        //console.log(scroll);
        
        if(scroll>100){//스크롤300까지 내리면
            $('#headerArea').addClass('on');
        } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
            $('#headerArea').removeClass('on');
        };
    });

    



    // navigation
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    $(document).on('click', '.menu_open', function(e){ // ajax로 가져와서 처리 시
    //$(".menu_open").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();

        //var documentHeight =  $(document).height();
        //$("#gnb").css('height',documentHeight); // 높이값

        if(op==false){ // 네비가 닫혀있으면 열어라
            $("#gnb").stop().animate({right:0,opacity:1}, 'fast');
            $('#headerArea').addClass('mn_open');
            $('body').css({overflow:"hidden"});
            //$('.nav_bg').fadeIn();
            op=true;
        } else { // 네비가 열려있으면 닫아라
            $("#gnb").stop().animate({right:'-100%',opacity:0}, 'fast');
            $('#headerArea').removeClass('mn_open');
            $('body').css({overflow:"auto"});
            //$('.nav_bg').fadeOut();
            op=false;
        }
    });


    // $(".menu_open").click(function(e) { //메뉴버튼 클릭시
    //     e.preventDefault();
       
    //     //var documentHeight =  $(document).height();
    //     //$("#gnb").css('height',documentHeight); // 높이값

    //     if(op==false){ // 네비가 닫혀있으면 열어라
    //         $("#gnb").animate({right:0,opacity:1}, 'fast');
    //         $('#headerArea').addClass('mn_open');
    //         //$('.nav_bg').fadeIn();
    //         op=true;
    //     } else { // 네비가 열려있으면 닫아라
    //         $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
    //         $('#headerArea').removeClass('mn_open');
    //         //$('.nav_bg').fadeOut();
    //         op=false;
    //     }

    // });



    // $('#gnb .depth1 h3 a').click(function(e){
    //     e.preventDefault();
        
    //     var ind = $(this).parents('.depth1').index();

    //     $('.depth1 ul').slideUp('fast'); // 전부 닫기
    //     $('#gnb .depth1:eq('+ ind +')').find('ul').slideDown('fast'); // 나만열기

    // });



    // $('#gnb .depth1 h3 a').toggle(function(e){
    //     e.preventDefault();
        
    //     var ind = $(this).parents('.depth1').index();

    //     $('.depth1 ul').slideUp('fast'); // 전부 닫기
    //     $('#gnb .depth1:eq('+ ind +')').find('ul').slideDown('fast'); // 나만열기

    // }, function(e){
    //     e.preventDefault();
        
    //     $('.depth1 ul').slideUp('fast'); // 전부 닫기
    // });
   
   
    //2depth 메뉴 교대로 열기 처리
    var onoff=[false,false,false,false,false,false]; // 각각의 메뉴가 열려있으면 true, 닫혀있으면 false
    var arrcount = onoff.length;

    //console.log(arrcount);

    $(document).on('click', '#gnb .depth1 h3 a', function(e){ // ajax로 처리 시
    //$('#gnb .depth1 h3 a').click(function(){
        var ind=$(this).parents('.depth1').index();

        //console.log(ind);

        if(onoff[ind]==false){
            //$('#gnb .depth1 ul').hide();
            $(this).parents('.depth1').find('ul').stop().slideDown('fast'); // 클릭 ul 열기
            $(this).parents('.depth1').siblings('li').find('ul').stop().slideUp('fast'); // 클릭 ul 빼고 닫기

            for(var i=0; i<arrcount; i++){
                onoff[i]=false;
            } // 전부 false주고
            onoff[ind]=true; // 나만 true 줘라

            //$('.depth1 span').text('+'); // 전부 +
            //$(this).find('span').text('-'); // 나만 -

        } else {
            $(this).parents('.depth1').find('ul').stop().slideUp('fast'); // 전부 닫기
            onoff[ind]=false; // 전부 false

            //$(this).find('span').text('+'); // 전부 +
        }
    });



    



    // footer
    // $.ajax({
        // url: 'footer.html',
        // dataType: 'html',
        // success : function(data){
            // $('#footerArea').html(data);

            // topmove
            $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
                var scroll = $(window).scrollTop(); //스크롤의 거리
                
                if(scroll > 200){ // 300이상의 거리가 발생되면
                    $('.topMove').fadeIn('slow');  // top 보이기    
                }else{
                    $('.topMove').fadeOut('fast'); // top 감추기
                }
            });
            
            $('.topMove a').click(function(e){
                e.preventDefault();
                $("html,body").stop().animate({"scrollTop":0},500); //상단으로 스르륵 이동합니다.
            });


            // familysite open
            //$(document).on('toggle', '.family .open', function(e){ // ajax로 가져와서 처리 시
            $('.family .open').toggle(function(e){
                e.preventDefault();

                $('.family ul').stop().slideDown(200);
                $(this).addClass('on');
            
            }, function(e){
                e.preventDefault();

                $(this).removeClass('on');
                $('.family ul').stop().slideUp(200);
            });


        // }
    // });




});