$(document).ready(function(){

    // 이용약관
    $('.guide_toc ul li a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.guide_toc ul li a');
        var value = $('.guide h3:eq('+ind+')').offset().top;
        $('html,body').stop().animate({'scrollTop':value}, 500);
    });

    // 개인정보처리방침
    $('.privacy_toc ul li a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.privacy_toc ul li a');
        var value = $('.privacy h3:eq('+ind+')').offset().top;
        $('html,body').stop().animate({'scrollTop':value}, 500);
    });
    

});