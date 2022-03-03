$(document).ready(function(){

    $('.social_tab li:eq(0)').addClass('on');

    $('.social_tab li a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.social_tab li a');

        $('.social_tab li').removeClass('on');
        $('.social_tab li:eq(' + ind + ')').addClass('on');

        $('.cont').hide();
        $('.cont:eq(' + ind + ')').fadeIn();
        

    });

});