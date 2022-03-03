$(document).ready(function() {

    
    // 포장라인
    $.ajax({
        url: './js/sub_package.json',
        dataType: 'json',
        success: function(data){
            var usePackage = data.package;

            function printPackage(){

                var packagetxt = '';
                for(var i in usePackage){
                    packagetxt += '<a href="#">' + usePackage[i].title + '</a>';
                }
                $('.package').html(packagetxt);

            }
            printPackage();

            // click
            $('.package a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.package a');

                var Packagepop = '<div class="image"><img src="' + usePackage[ind].image + '" alt="' + usePackage[ind].title + '"></div>';
                Packagepop += '<div class="ttl">';
                Packagepop += '<span>' + usePackage[ind].category + '</span>';
                Packagepop += '<strong>' + usePackage[ind].title + '</strong>';
                Packagepop += '<p>' + usePackage[ind].summary + '</p>';
                Packagepop += '</div>';
                Packagepop += '<div class="cont">';
                Packagepop += '<dl>';
                Packagepop += '<dt>포장사양</dt>';
                Packagepop += '<dd>'+ usePackage[ind].package +'</dd>';
                Packagepop += '</dl>';
                Packagepop += '<dl>';
                Packagepop += '<dt>납품실적</dt>';
                Packagepop += '<dd>'+ usePackage[ind].delivery +'</dd>';
                Packagepop += '</dl>';
                Packagepop += '</div>';
                Packagepop += '<a href="#" class="close">닫기</a>';


                $('.package_pop').html(Packagepop);
                $("html, body").css({"overflow":"hidden"}); // body scroll 비활성화

                $('.package_pop').fadeIn();
                $('.package_pop').scrollTop(0);


                $('.package_pop .close').click(function(e){
                    e.preventDefault();
                    $('.package_pop').fadeOut();
                    $("html, body").css({"overflow":""}); // body scroll 활성화
                });
                
            });

        }
    });


    
    // 장치 및 기기
    $.ajax({
        url: './js/sub_package.json',
        dataType: 'json',
        success: function(data){
            var useDevice = data.device;

            function printDevice(){

                var Devicetxt = '';
                for(var i in useDevice){
                    Devicetxt += '<a href="#">' + useDevice[i].title + '</a>';
                }
                $('.device').html(Devicetxt);

            }
            printDevice();

            // click
            $('.device a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.device a');

                var devicegepop = '<div class="image"><img src="' + useDevice[ind].image + '" alt="' + useDevice[ind].title + '"></div>';
                devicegepop += '<div class="ttl">';
                devicegepop += '<span>' + useDevice[ind].category + '</span>';
                devicegepop += '<strong>' + useDevice[ind].title + '</strong>';
                devicegepop += '<p>' + useDevice[ind].summary + '</p>';
                devicegepop += '</div>';
                devicegepop += '<div class="cont">';
                
                devicegepop += '<dl>';
                devicegepop += '<dt>설비사양</dt>';
                devicegepop += '<dd>'+ useDevice[ind].sub1 +'</dd>';
                devicegepop += '</dl>';
                devicegepop += '<dl>';
                devicegepop += '<dt>설비구성</dt>';
                devicegepop += '<dd>'+ useDevice[ind].sub2 +'</dd>';
                devicegepop += '</dl>';
                devicegepop += '<dl>';
                devicegepop += '<dt>납품실적</dt>';
                devicegepop += '<dd>'+ useDevice[ind].sub3 +'</dd>';
                devicegepop += '</dl>';
                devicegepop += '<dl>';
                devicegepop += '<dt>특허보유</dt>';
                devicegepop += '<dd>'+ useDevice[ind].sub4 +'</dd>';
                devicegepop += '</dl>';

                devicegepop += '</div>';
                devicegepop += '<a href="#" class="close">닫기</a>';

                $('.package_pop').html(devicegepop);
                $("html, body").css({"overflow":"hidden"}); // body scroll 비활성화
                
                $('.package_pop').fadeIn();
                $('.package_pop').scrollTop(0);

                $('.package_pop .close').click(function(e){
                    e.preventDefault();
                    $('.package_pop').fadeOut();
                    $("html, body").css({"overflow":""}); // body scroll 활성화
                });
                
            });

        }
    });


    
    // 성형기
    $.ajax({
        url: './js/sub_package.json',
        dataType: 'json',
        success: function(data){
            var useModel = data.modeling;

            function printModel(){

                var Modeltxt = '';
                for(var i in useModel){
                    Modeltxt += '<a href="#">' + useModel[i].title + '</a>';
                }
                $('.modeling').html(Modeltxt);

            }
            printModel();

            // click
            $('.modeling a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.modeling a');

                var modelpop = '<div class="image"><img src="' + useModel[ind].image + '" alt="' + useModel[ind].title + '"></div>';
                modelpop += '<div class="ttl">';
                modelpop += '<span>' + useModel[ind].category + '</span>';
                modelpop += '<strong>' + useModel[ind].title + '</strong>';
                modelpop += '<p>' + useModel[ind].summary + '</p>';
                modelpop += '</div>';
                modelpop += '<div class="cont">';
                
                modelpop += '<dl>';
                modelpop += '<dt>설비사양</dt>';
                modelpop += '<dd>'+ useModel[ind].sub1 +'</dd>';
                modelpop += '</dl>';
                modelpop += '<dl>';
                modelpop += '<dt>설비구성</dt>';
                modelpop += '<dd>'+ useModel[ind].sub2 +'</dd>';
                modelpop += '</dl>';
                modelpop += '<dl>';
                modelpop += '<dt>포장사양</dt>';
                modelpop += '<dd>'+ useModel[ind].sub3 +'</dd>';
                modelpop += '</dl>';
                modelpop += '<dl>';
                modelpop += '<dt>납품실적</dt>';
                modelpop += '<dd>'+ useModel[ind].sub4 +'</dd>';
                modelpop += '</dl>';
                modelpop += '<dl>';
                modelpop += '<dt>특허보유</dt>';
                modelpop += '<dd>'+ useModel[ind].sub5 +'</dd>';
                modelpop += '</dl>';

                modelpop += '</div>';
                modelpop += '<a href="#" class="close">닫기</a>';

                
                $('.package_pop').html(modelpop);
                $("html, body").css({"overflow":"hidden"}); // body scroll 비활성화
                
                $('.package_pop').fadeIn();
                $('.package_pop').scrollTop(0);
                
                $('.package_pop .close').click(function(e){
                    e.preventDefault();
                    $('.package_pop').fadeOut();
                    $("html, body").css({"overflow":""}); // body scroll 활성화
                });
                
            });

        }
    });

});