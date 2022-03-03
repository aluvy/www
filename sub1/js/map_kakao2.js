window.onload = function(){

    $('.tab li:eq(0)').addClass('current');
    $('.cont1').show();
    
    $('.tab a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.tab a');
        //console.log(ind);

        $('.cont').hide();
        $('.cont:eq('+ind+')').fadeIn();

        $('.tab li').removeClass('current');
        $('.tab li:eq('+ind+')').addClass('current');

        setTimeout(function(){
            map2.relayout();
            map2.setCenter(new daum.maps.LatLng(37.513126, 127.055585));
            map3.relayout();
            map3.setCenter(new daum.maps.LatLng(35.975664, 129.385207));
            map4.relayout();
            map4.setCenter(new daum.maps.LatLng(34.937514, 127.724656));
        }, 0);

    });



    var mapContainer = document.getElementById('map1'), // 지도를 표시할 div 
    mapOption = { 
            center: new kakao.maps.LatLng(36.004498, 129.341512), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption);
    
    var imageSrc = './images/contents5/maker.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(36.004498, 129.341512); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);  

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var content = '<div class="customoverlay">' +
    '포스코엠텍 본사' +
    '</div>';

    // 커스텀 오버레이가 표시될 위치입니다 
    var position = new kakao.maps.LatLng(36.004498, 129.341512);  

    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        position: position,
        content: content,
        yAnchor: 1 
    });
    marker.setMap(map);




    //두번째 맵
    var mapContainer2 = document.getElementById('map2'), // 지도를 표시할 div 
    mapOption2 = { 
            center: new kakao.maps.LatLng(37.513126, 127.055585), // 지도의 중심좌표
            level: 2 // 지도의 확대 레벨
        };

    var map2 = new kakao.maps.Map(mapContainer2, mapOption2);

    var imageSrc2 = './images/contents5/maker.png', // 마커이미지의 주소입니다    
        imageSize2 = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption2 = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2, imageOption2),
        markerPosition2 = new kakao.maps.LatLng(37.513126, 127.055585); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker2 = new kakao.maps.Marker({
        position: markerPosition2,
        image: markerImage2 // 마커이미지 설정 
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker2.setMap(map2);  

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var content2 = '<div class="customoverlay">' +
    '포스코엠텍 서울사무소' +
    '</div>';

    // 커스텀 오버레이가 표시될 위치입니다 
    var position2 = new kakao.maps.LatLng(37.513126, 127.055585);  

    // 커스텀 오버레이를 생성합니다
    var customOverlay2 = new kakao.maps.CustomOverlay({
        map: map2,
        position: position2,
        content: content2,
        yAnchor: 1 
    });
    marker2.setMap(map2);




    //세번째 맵
    var mapContainer3 = document.getElementById('map3'), // 지도를 표시할 div 
    mapOption3 = { 
            center: new kakao.maps.LatLng(35.975664, 129.385207), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };

    var map3 = new kakao.maps.Map(mapContainer3, mapOption3);

    var imageSrc3 = './images/contents5/maker.png', // 마커이미지의 주소입니다    
        imageSize3 = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption3 = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage3 = new kakao.maps.MarkerImage(imageSrc3, imageSize3, imageOption3),
        markerPosition3 = new kakao.maps.LatLng(35.975664, 129.385207); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker3 = new kakao.maps.Marker({
        position: markerPosition3,
        image: markerImage3 // 마커이미지 설정 
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker3.setMap(map3);  

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var content3 = '<div class="customoverlay">' +
    '포스코엠텍 알루미늄 공장' +
    '</div>';

    // 커스텀 오버레이가 표시될 위치입니다 
    var position3 = new kakao.maps.LatLng(35.975664, 129.385207);  

    // 커스텀 오버레이를 생성합니다
    var customOverlay3 = new kakao.maps.CustomOverlay({
        map: map3,
        position: position3,
        content: content3,
        yAnchor: 1 
    });




    //세번째 맵
    var mapContainer4 = document.getElementById('map4'), // 지도를 표시할 div 
    mapOption4 = { 
            center: new kakao.maps.LatLng(34.937514, 127.724656), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map4 = new kakao.maps.Map(mapContainer4, mapOption4);

    var imageSrc4 = './images/contents5/maker.png', // 마커이미지의 주소입니다    
        imageSize4 = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption4 = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage4 = new kakao.maps.MarkerImage(imageSrc4, imageSize4, imageOption4),
        markerPosition4 = new kakao.maps.LatLng(34.937514, 127.724656); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker4 = new kakao.maps.Marker({
        position: markerPosition4,
        image: markerImage4 // 마커이미지 설정 
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker4.setMap(map4);

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var content4 = '<div class="customoverlay">' +
    '포스코엠텍 광양사업소' +
    '</div>';

    // 커스텀 오버레이가 표시될 위치입니다 
    var position4 = new kakao.maps.LatLng(34.937514, 127.724656);  

    // 커스텀 오버레이를 생성합니다
    var customOverlay4 = new kakao.maps.CustomOverlay({
        map: map4,
        position: position4,
        content: content4,
        yAnchor: 1 
    });


   

   

    //네번째 맵
    // var container4 = document.getElementById('map4');
    // var options4 = {
    //     center: new daum.maps.LatLng(34.937514, 127.724656),
    //     level: 3
    // };

    // var map4 = new daum.maps.Map(container4, options4);

    // var mapTypeControl4 = new daum.maps.MapTypeControl();
    // map4.addControl(mapTypeControl4, daum.maps.ControlPosition.TOPRIGHT);

    // var zoomControl4 = new daum.maps.ZoomControl();
    // map4.addControl(zoomControl4, daum.maps.ControlPosition.RIGHT);

    // var markerPosition4  = new daum.maps.LatLng(34.937514, 127.724656); 
    // var marker4 = new daum.maps.Marker({
    //     position: markerPosition4
    // });

    // marker4.setMap(map4);

    // var overlay2 = new daum.maps.CustomOverlay({
    //     map: map4,
    //     position: marker4.getPosition()
    // }); 


    
};