// scroll transition
// $(document).on('scroll',function(){ //스크롤 값의 변화가 생기면
//     var subScroll = $(window).scrollTop(); //스크롤의 거리
//     var subScrollGap = $(window).height() / 2;
    
//     // 1
//     var ani1 = $('.kframe1').offset().top - subScrollGap;
//     if(subScroll > ani1){
//         $('.kframe1').addClass('active');
//     } else if(subScroll < ani1 - 500){
//         $('.kframe1').removeClass('active');
//     };
    
//     // // 2
//     // var ani2 = $('.kframe2').offset().top - subScrollGap;
//     // if(subScroll > ani2){
//     //     $('.kframe2').addClass('active');
//     // } else if(subScroll < ani2 - 500){
//     //     $('.kframe2').removeClass('active');
//     // };
    

// });


$(document).ready(function() {


    $.ajax({
        url: './js/steel.json',
        dataType: 'json',
        success: function(data){
            var useSteel = data.steel;

            function printSteel(){

                var steeltxt = '<ul>';

                for(var i in useSteel){
                    steeltxt += '<li><a href="#">';
                    steeltxt += '<div class="img"><img src="' + useSteel[i].image + '" alt="' + useSteel[i].title + '"></div>';
                    steeltxt += '<p><span>' + useSteel[i].category + '</span>' + useSteel[i].title + '</p>';
                    steeltxt += '<span class="more">자세히보기</span>';
                    steeltxt += '<div class="square"><span></span><span></span><span></span><span></span></div>';
                    steeltxt += '</a></li>';
                }

                steeltxt += '</ul>';

                $('.product').html(steeltxt);

            }
            printSteel();


            // click
            $('.product ul li a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.product ul li a');

                var steelpop = '<div class="prdimg"><img src="' + useSteel[ind].image + '" alt="' + useSteel[ind].title + '"></div>';
                steelpop += '<div class="prdttl">';
                steelpop += '<span>' + useSteel[ind].category + '</span>';
                steelpop += '<strong>' + useSteel[ind].title + '</strong>';
                steelpop += '<p>' + useSteel[ind].summary + '</p>';
                steelpop += '</div>';

                steelpop += '<div class="prdcont">';
                
                steelpop += '<dl><dt>성분</dt>';
                steelpop += '<dd>'+ useSteel[ind].ingredient +'</dd>';
                steelpop += '<dt>규격</dt>';
                steelpop += '<dd>'+ useSteel[ind].size +'</dd>';
                steelpop += '<dt>포장</dt>';
                steelpop += '<dd>'+ useSteel[ind].package +'</dd></dl>';

                steelpop += '</div>';
                steelpop += '<a href="#" class="close">닫기</a>';

                $('.prd_view').html(steelpop);

                $('.prd_view').fadeIn();
                $('.bgbox').fadeIn();

                $('.close, .bgbox').click(function(e){
                    e.preventDefault();

                    $('.prd_view').fadeOut();
                    $('.bgbox').fadeOut();


                });
                
            });


        }
    });
    
});