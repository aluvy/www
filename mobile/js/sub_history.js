$(document).ready(function(){

    var history_onoff = false;
    var history_tab =['2000~현재', '1990~1999', '1980~1989', '1970~1979'];

    $('.history_tab span').click(function(e){
        e.preventDefault();
        
        if(history_onoff == false){
            $(this).addClass('on');
            $('.history_tab ul').stop().slideDown();
            history_onoff = true;
        } else {
            $(this).removeClass('on');
            $('.history_tab ul').stop().slideUp();
            history_onoff = false;
        }

    });


    
    $('.history_tab ul li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.history_tab ul li a');
        //console.log(ind);

        $('.history_tab span').html(history_tab[ind]);

        $('.history_wrap .year').hide();
        $('.history_wrap .year:eq(' + ind + ')').show();

        $('.history_tab span').removeClass('on');
        $('.history_tab ul').stop().slideUp();
        history_onoff = false;
        
    });

});