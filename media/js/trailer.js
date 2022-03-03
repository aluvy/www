$(document).ready(function(){


    //trailer click event
    $.ajax({
        url:'./js/trailer.json',
        dataType: 'json',
        success: function(data){
            var useTrailer = data.trailer;
            
            function trailer_func(ind){
                
                var trailerTxt = '';
                trailerTxt += '<div class="youtube_box">';
                trailerTxt += '<div><iframe src="' + useTrailer[ind].url + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
                trailerTxt += '</div>';
                trailerTxt += '<dl><dt>' + useTrailer[ind].title + '</dt>';
                trailerTxt += '<dd>' + useTrailer[ind].text + '<a href="' + useTrailer[ind].link + '" target="blank" title="open i nnew window">Watch it on YouTube</a></dd></dl>';
                trailerTxt += '<a href="#" class="close">close</a>';

                $('.trailer_pop').html(trailerTxt);
            };



            $(document).on('click', '.trailer_lst li a', function(e){
                e.preventDefault();
        
                var ind = $(this).index('.trailer_lst li a');
        
                trailer_func(ind);
        
                $('.trailer_pop').fadeIn();
                $('.trailer_pop_bg').fadeIn();
                $('.trailer_pop').css({display:"flex"});
                
            });
        
            $(document).on('click', '.trailer_pop .close, .trailer_pop_bg', function(e){
                e.preventDefault();
        
                $('.trailer_pop').fadeOut('fast', function(){
                    $('.trailer_pop').html('');
                });
                $('.trailer_pop_bg').fadeOut('fast');
        
            });


        }
    });



    // songs
    var trailerSongs;
    $.ajax({
        url:'./js/trailer.json',
        dataType: 'json',
        success: function(data){
            trailerSongs = data.songs;

            $('.song_lst li a').click(function(e){
                e.preventDefault();

                var ind = $(this).index('.song_lst li a');

                $('.coco_song .youtube iframe').attr('src', trailerSongs[ind].url);
                $('.coco_song .youtube_wrap dt').html(trailerSongs[ind].title);
                $('.coco_song .youtube_wrap dd:eq(0)').html(trailerSongs[ind].channel);
                $('.coco_song .youtube_wrap dd:eq(1)').html(trailerSongs[ind].tag);

            });
        }
        
    });





});