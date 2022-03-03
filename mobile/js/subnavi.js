$(document).ready(function(){


    /*
    var subDepth1;
    var subDepth2;
    var subttl = '';
    var subMenu = [];

    function getMydepth() {

        var url = decodeURIComponent(location.href); // 현재 페이지의 url
        url = decodeURIComponent(url); // url = ex.html?num=1&name=홍길동
        // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    
        var params = '';
        params = url.substring( url.indexOf('sub'), url.length ); //substring : 문자를 잘라내는 함수 //num=0&item=0
        myDepth1 = Number(params.substring(3, 4));
        myDepth2 = Number(params.substring(5, 6));
        
        //console.log(params);
        //console.log('mydepth1 : ' + myDepth1);
        //console.log('mydepth2 : ' + myDepth2);
        
    }
    getMydepth();

    if(myDepth1 == 1){
        subttl = '회사소개';
        subMenu = ['포스코엠텍 소개', 'CEO 인사말', '주요연혁', '찾아오시는 길'];

    } else if (myDepth1 == 2){
        subttl = '사업영역';
        subMenu = ['철강부원료', '포장엔지니어링'];

    } else if (myDepth1 == 3){
        subttl = '지속가능경영';
        subMenu = ['윤리경영', '사회공헌'];

    } else if (myDepth1 == 4 ){
        subttl = '고객지원';
        subMenu = ['미디어센터', 'FAQ'];
    }


    var subLayoutTxt = '';
    subLayoutTxt += '<div class="visual" style="background-image:url(./images/sub_visual' + myDepth1 + '.jpg)"><h3>' + subttl + '</h3></div>';
    subLayoutTxt += '<div class="sub_menu">';
    subLayoutTxt += '<span><a href="#">' + subMenu[myDepth2-1] + '</a></span>';
    subLayoutTxt += '<ul>';

    for(var i=0; i<subMenu.length; i++){
        subLayoutTxt += '<li><a href="./sub' + myDepth1 + '_' + (i+1) + '.html">' + subMenu[0+i] + '</a></li>';
        //console.log(myDepth2);
    }
    subLayoutTxt += '</ul>';
    subLayoutTxt += '</div>';

    $('.sub_layout').html(subLayoutTxt);
    $('.title_area').html('<h2>' + subMenu[(myDepth2-1)] + '</h2>');
    */









    $('.sub_menu span a').toggle(function(e){
        e.preventDefault();

        $(this).parent().next('ul').stop().slideDown('fast');
        $(this).parents('.sub_menu').addClass('on');

    }, function(e){
        e.preventDefault();

        $(this).parent().next('ul').stop().slideUp('fast');
        $(this).parents('.sub_menu').removeClass('on');

    });


});