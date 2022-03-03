$(document).ready(function(){

    var myDepth1;
    var myDepth2;
    var subttl = '';
    var subMenu = [];

    function getMydepth() {

        var url = decodeURIComponent(location.href); // 현재 페이지의 url
        url = decodeURIComponent(url); // url = ex.html?num=1&name=홍길동
        // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    
        var params = '';
        params = url.substring( url.indexOf('sub'), url.length ); //substring : 문자를 잘라내는 함수 //num=0&item=0
        myDepth1 = params.substring(3, 4);
        myDepth2 = params.substring(10, 11);
        //console.log('mydepth1 : ' + myDepth1);
        //console.log('mydepth2 : ' + myDepth2);
        
    }
    getMydepth();

    if(myDepth1 == 1){
        subttl = '회사소개';
        subMenu = ['포스코엠텍 소개', 'CEO 인사말', '조직구성', '주요연혁', '찾아오시는 길'];
    } else if(myDepth1 == 2){
        subttl = '사업영역';
        subMenu = ['철강부원료', '포장엔지니어링', '제품검색'];
    } else if(myDepth1 == 3){
        subttl = '윤리경영';
        subMenu = ['윤리규범', '환경경영', '공정거래', '클린시스템'];
    } else if(myDepth1 == 4){
        subttl = '사회공헌';
        subMenu = ['사회공헌 소개', '주요할동'];
    } else if(myDepth1 == 5){
        subttl = '인재채용';
        subMenu = ['인재상', '채용절차', '복리후생'];
    } else if(myDepth1 == 6){
        subttl = '고객지원';
        subMenu = ['공지사항', '뉴스룸', '미디어센터', 'FAQ', '문의하기'];
    } else if(myDepth1 == 7){
        subttl = 'POSCO M-TECH';
        subMenu = ['이용약관', '개인정보처리방침', '이메일주소 무단수집거부'];
    }




    // 비주얼, 서브메뉴 뿌려주기
    var subLayoutTxt = '';
    subLayoutTxt += '<div class="visual"><img src="common/images/visual.jpg" alt="서브 비주얼 이미지 - ' + subttl + '">';
    subLayoutTxt += '<h3>' + subttl + '</h3></div>';

    if(myDepth1 == 7){ // 메뉴 사이즈 wide
        subLayoutTxt += '<div class="sub_menu wide">';
    } else {
        subLayoutTxt += '<div class="sub_menu">';
    }
    //subLayoutTxt += '<div class="sub_menu">';
    
    subLayoutTxt += '<ul>';
    for (var i=0; i < subMenu.length; i++){
        subLayoutTxt += '<li><a href="./sub' + myDepth1 + '_' + (i+1) + '.html">' + subMenu[i] + '</a></li>';
    }
    subLayoutTxt += '</ul></div>';

    $('.sub_layout').html(subLayoutTxt);

    // current
    $('.sub_menu ul li:eq(' + (myDepth2-1) + ')').addClass('current');




    // 페이지 타이틀 뿌려주기
    var subPageTTL = '';
    subPageTTL += '<div class="line_map">';
    subPageTTL += '<span>HOME</span><span>' + subttl + '</span><span>' + subMenu[myDepth2-1] + '</span></div>';
    subPageTTL += '<h2>' + subMenu[myDepth2-1] + '</h2>';

    $('.title_area').html(subPageTTL);





});