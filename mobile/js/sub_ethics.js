$(document).ready(function(){

    $('.ethic_tab li:eq(0)').addClass('on');

    $('.ethic_tab a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.ethic_tab a');

        $('.ethic_tab li').removeClass('on');
        $('.ethic_tab li:eq('+ ind +')').addClass('on');

        $('.cont').hide();
        $('.cont:eq('+ ind +')').fadeIn();

    });

});