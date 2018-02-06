(function($){

  $('#dpt').change(function(){
    $('#info-dpt').load("traitement.php?dpt="+$('#dpt').val());
  })

})(jQuery);