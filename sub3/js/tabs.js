$(document).ready(function(){

    $('.tab ul li:eq(0)').addClass('current');
    $('.cont:eq(0)').show();


    $('.tab ul a').click(function(e){
        e.preventDefault();
        
        var ind = $(this).index('.tab ul a');

        $('.tab ul li').removeClass('current');
        $('.tab ul li:eq('+ind+')').addClass('current');

        $('.cont').hide();
        $('.cont:eq('+ind+')').fadeIn();

    });
    
});