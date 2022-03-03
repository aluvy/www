// scroll 반응 CSS animation
$(document).on('scroll',function(){ //스크롤 값의 변화가 생기면

    var winScrollTop = $(window).scrollTop();
    var winScrollGap = $(window).height() / 2;
    var item = [];
    var num = Number($('.content_area').find('.kframe').length) - 1; // 0부터 index값 뽑기

    for (var i=0; i<=num; i++){
        
        item[i] = $('.kframe:eq('+i+')').offset().top - winScrollGap - 100;

        //console.log(item[i]);
        if(winScrollTop > item[i]){
            $('.kframe:eq('+i+')').addClass('active');
        } else if(winScrollTop < item[i]-500){
            $('.kframe:eq('+i+')').removeClass('active');
        }
    }
    
});