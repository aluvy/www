$(document).ready(function(){
    
    var faqArticle = $('.sub_faq ul li'); // 전체 li

    $('.sub_faq ul li p a').click(function(e){
        e.preventDefault();

        var answer = $(this).parent().parent(); // 해당 li

        if(answer.is('.on')){ // li에 on이 있으면
            
            answer.removeClass('on'); // on없애고
            answer.children().next().stop().slideUp('fast'); // 본인 닫아라

        } else { // li에 on이 없으면

            faqArticle.removeClass('on'); // 다른 li에 on 없애고
            answer.addClass('on'); // 내 li에만 on을 넣어라
            
            faqArticle.children().next().stop().slideUp('fast');
            answer.children().next().stop().slideDown('fast');
        }
    });

    $('.all').toggle(function(e){
        e.preventDefault();

        $(this).text('답변 모두 닫기').addClass('on');
        faqArticle.addClass('on');
        faqArticle.children().next().stop().slideDown('fast');

    }, function(e){
        e.preventDefault();

        $(this).text('답변 모두 열기').removeClass('on');
        faqArticle.removeClass('on');
        faqArticle.children().next().stop().slideUp('fast');

    });

});