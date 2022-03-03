$(document).ready(function() {


    $.ajax({
        url: './js/sub_steel.json',
        dataType: 'json',
        success: function(data){
            var useSteel = data.steel;

            function printSteel(){

                var steeltxt = '<ul>';

                for(var i in useSteel){
                    steeltxt += '<li><a href="#">';
                    steeltxt += '<div class="image"><img src="' + useSteel[i].image + '" alt="' + useSteel[i].title + '"></div>';
                    steeltxt += '<p><span>' + useSteel[i].category + '</span>';
                    steeltxt += '<strong>' + useSteel[i].title + '</strong>';
                    steeltxt += '<i>자세히보기</i></p>';
                    steeltxt += '</a></li>';
                }
                steeltxt += '</ul>';

                $('.steel_list').html(steeltxt);

            }
            printSteel();


            //click event
            $('.steel_list ul li a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.steel_list ul li a');

                var steelpop = '<div class="image"><img src="' + useSteel[ind].image + '" alt="' + useSteel[ind].title + '"></div>';
                steelpop += '<div class="ttl">';
                steelpop += '<span>' + useSteel[ind].category + '</span>';
                steelpop += '<strong>' + useSteel[ind].title + '</strong>';
                steelpop += '<p>' + useSteel[ind].summary + '</p>';
                steelpop += '</div>';
                steelpop += '<div class="cont">';
                steelpop += '<dl>';
                steelpop += '<dt>성분</dt>';
                steelpop += '<dd>'+ useSteel[ind].ingredient +'</dd>';
                steelpop += '</dl>';
                steelpop += '<dl>';
                steelpop += '<dt>규격</dt>';
                steelpop += '<dd>'+ useSteel[ind].size +'</dd>';
                steelpop += '</dl>';
                steelpop += '<dl>';
                steelpop += '<dt>포장</dt>';
                steelpop += '<dd>'+ useSteel[ind].package +'</dd>';
                steelpop += '</dl>';
                steelpop += '</div>';
                steelpop += '<a href="#" class="close">닫기</a>';


                $('.steel_pop').html(steelpop);


                $("html, body").css({"overflow":"hidden"}); // body scroll 비활성화



                // click 시 팝업 fadein
                $('.steel_pop').fadeIn();
                $('.steel_pop').scrollTop(0);

                $('.steel_pop .close').click(function(e){
                    e.preventDefault();
                    $('.steel_pop').fadeOut();
                    $("html, body").css({"overflow":""}); // body scroll 활성화


                });
                
            });


        }
    });
    
});