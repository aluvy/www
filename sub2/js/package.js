// // scroll transition
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
    
//     // 2
//     var ani2 = $('.kframe2').offset().top - subScrollGap;
//     if(subScroll > ani2){
//         $('.kframe2').addClass('active');
//     } else if(subScroll < ani2 - 500){
//         $('.kframe2').removeClass('active');
//     };
    
//     // 3
//     var ani3 = $('.kframe3').offset().top - subScrollGap;
//     if(subScroll > ani3){
//         $('.kframe3').addClass('active');
//     } else if(subScroll < ani3 - 500){
//         $('.kframe3').removeClass('active');
//     };
    

// });

$(document).ready(function() {

    
    // 포장라인
    $.ajax({
        url: './js/package.json',
        dataType: 'json',
        success: function(data){
            var usePackage = data.package;

            function printPackage(){

                var packagetxt = '';
                for(var i in usePackage){
                    packagetxt += '<a href="#"><span>' + usePackage[i].title + '</span></a>';
                }
                $('.package').html(packagetxt);

            }
            printPackage();

            // click
            $('.package a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.package a');

                var Packagepop = '<div class="prdimg"><img src="' + usePackage[ind].image + '" alt="' + usePackage[ind].title + '"></div>';
                Packagepop += '<div class="prdttl">';
                Packagepop += '<span>' + usePackage[ind].category + '</span>';
                Packagepop += '<strong>' + usePackage[ind].title + '</strong>';
                Packagepop += '<p>' + usePackage[ind].summary + '</p>';
                Packagepop += '</div>';

                Packagepop += '<div class="prdcont">';
                
                Packagepop += '<dl><dt>포장사양</dt>';
                Packagepop += '<dd>'+ usePackage[ind].package +'</dd>';
                Packagepop += '<dt>납품실적</dt>';
                Packagepop += '<dd>'+ usePackage[ind].delivery +'</dd></dl>';

                Packagepop += '</div>';
                Packagepop += '<a href="#" class="close">닫기</a>';

                $('.prd_view').html(Packagepop);

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


    
    // 장치 및 기기
    $.ajax({
        url: './js/package.json',
        dataType: 'json',
        success: function(data){
            var useDevice = data.device;

            function printDevice(){

                var Devicetxt = '';
                for(var i in useDevice){
                    Devicetxt += '<a href="#"><span>' + useDevice[i].title + '</span></a>';
                }
                $('.device').html(Devicetxt);

            }
            printDevice();

            // click
            $('.device a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.device a');

                var devicegepop = '<div class="prdimg"><img src="' + useDevice[ind].image + '" alt="' + useDevice[ind].title + '"></div>';
                devicegepop += '<div class="prdttl">';
                devicegepop += '<span>' + useDevice[ind].category + '</span>';
                devicegepop += '<strong>' + useDevice[ind].title + '</strong>';
                devicegepop += '<p>' + useDevice[ind].summary + '</p>';
                devicegepop += '</div>';

                devicegepop += '<div class="prdcont">';
                
                devicegepop += '<dl><dt>설비사양</dt>';
                devicegepop += '<dd>'+ useDevice[ind].sub1 +'</dd>';
                devicegepop += '<dt>설비구성</dt>';
                devicegepop += '<dd>'+ useDevice[ind].sub2 +'</dd>';
                devicegepop += '<dt>납품실적</dt>';
                devicegepop += '<dd>'+ useDevice[ind].sub3 +'</dd>';
                devicegepop += '<dt>특허보유</dt>';
                devicegepop += '<dd>'+ useDevice[ind].sub4 +'</dd></dl>';

                devicegepop += '</div>';
                devicegepop += '<a href="#" class="close">닫기</a>';

                $('.prd_view').html(devicegepop);

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


    
    // 성형기
    $.ajax({
        url: './js/package.json',
        dataType: 'json',
        success: function(data){
            var useModel = data.modeling;

            function printModel(){

                var Modeltxt = '';
                for(var i in useModel){
                    Modeltxt += '<a href="#"><span>' + useModel[i].title + '</span></a>';
                }
                $('.modeling').html(Modeltxt);

            }
            printModel();

            // click
            $('.modeling a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.modeling a');

                var modelpop = '<div class="prdimg"><img src="' + useModel[ind].image + '" alt="' + useModel[ind].title + '"></div>';
                modelpop += '<div class="prdttl">';
                modelpop += '<span>' + useModel[ind].category + '</span>';
                modelpop += '<strong>' + useModel[ind].title + '</strong>';
                modelpop += '<p>' + useModel[ind].summary + '</p>';
                modelpop += '</div>';

                modelpop += '<div class="prdcont">';
                
                modelpop += '<dl><dt>설비사양</dt>';
                modelpop += '<dd>'+ useModel[ind].sub1 +'</dd>';
                modelpop += '<dt>설비구성</dt>';
                modelpop += '<dd>'+ useModel[ind].sub2 +'</dd>';
                modelpop += '<dt>포장사양</dt>';
                modelpop += '<dd>'+ useModel[ind].sub3 +'</dd>';
                modelpop += '<dt>납품실적</dt>';
                modelpop += '<dd>'+ useModel[ind].sub4 +'</dd>';
                modelpop += '<dt>특허보유</dt>';
                modelpop += '<dd>'+ useModel[ind].sub5 +'</dd></dl>';


                modelpop += '</div>';
                modelpop += '<a href="#" class="close">닫기</a>';

                $('.prd_view').html(modelpop);

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