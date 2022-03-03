// JavaScript Document

$(document).ready(function() {

    var timeonoff; // 타이머 처리
    var imageCount = 3; // 슬라이드 이미지 총개수
    var cnt = 1; // 이미지 순서 1 2 3 4 5 1 2 3 4 5....
    var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때
    var timer = 5000; // 시간 설정

    $('.btn1').addClass('on'); // 첫번째 불렛 on
    $('.gallery .link1').show(); // 첫번째 이미지 on
    
    // 자동 롤링
    function moveg(){
        if(cnt == imageCount+1){ cnt=1; }
        if(cnt == imageCount){ cnt=0; } // 카운트 초기화
      
        cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
        $('.gallery li').hide(); // 모든 이미지 off
        $('.gallery .link'+cnt).fadeIn('slow'); // 해당 이미지만 on
      
        $('.mbutton').removeClass('on'); // 모든 버튼 off
        $('.btn'+cnt).addClass('on'); // 해당 버튼만 on
       
        if(cnt == imageCount){ cnt=0; }  //카운트의 초기화 0
    }
    timeonoff= setInterval( moveg , timer);
   

    // 버튼 제어
    $('.mbutton').click(function(){  //각각의 버튼 클릭시
        clearInterval(timeonoff); //타이머 중지     
	 
	    $('.gallery li').hide(); // 모든 이미지 off
        
        for(var i=0; i<=imageCount; i++){ // 클릭한 버튼과 cnt 맞추기
            if(this.className == 'mbutton btn'+i){ cnt = i; }
        }
        $('.gallery .link'+cnt).fadeIn('slow'); // 해당 이미지 on

        $('.mbutton').removeClass('on'); // 모든 버튼 off
        $('.btn'+cnt).addClass('on'); // 해당 버튼만 on
      
        if(cnt == imageCount){ cnt=0; }  //카운트 초기화
      
        timeonoff = setInterval( moveg , timer); //타이머의 부활!!!
      
        if(onoff == false){ // 중지 상태면
            onoff = true; // 동작해라
            $('.ps').removeClass('on'); // 중지버튼으로 변경
        }
    });
    
    
    // stop/play
    $('.ps').click(function(){
        if(onoff == true){ // 타이머가 동작 중이면
            clearInterval(timeonoff); // 타이머 종료
            $(this).addClass('on'); // play버튼으로 변경
            onoff = false;
        } else { // 타이머가 중지 상태면
            timeonoff = setInterval( moveg , timer); // 타이머 부활
            $('.ps').removeClass('on'); // 중지버튼으로 변경
            onoff = true;
        }
    });
    
    
    // 왼쪽/오른쪽 버튼 처리
    $('.vis_btn .btn').click(function(){
        clearInterval(timeonoff); // 타이머 종료
      
        if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
            if(cnt == imageCount){ cnt=0; }  //카운트가 마지막 번호(5)라면 초기화 0
            //if(cnt==imageCount+1){ cnt=1; }
            cnt++; //카운트 1씩증가
        }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
            if(cnt==1){ cnt=imageCount+1; }
            if(cnt==0){ cnt=imageCount; }
            cnt--; //카운트 감소
        }
        
        $('.gallery li').hide(); // 모든 이미지 off
        $('.gallery .link'+cnt).fadeIn('slow'); // 해당 이미지만 on
      
        $('.mbutton').removeClass('on'); // 모든 버튼 off
        $('.btn'+cnt).addClass('on'); // 해당 버튼만 on

        timeonoff= setInterval( moveg , timer); // 타이머 부활

        if(onoff==false){
            onoff=true;
            $('.ps').removeClass('on');
        }
    });

});