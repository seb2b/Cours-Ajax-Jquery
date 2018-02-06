(function($){

  $('#posts').change(function(){
    $('.block-comment').load("traitement.php?id_post="+$('#posts').val());
    $('.block-comment').fadeIn(500);
  })

})(jQuery);