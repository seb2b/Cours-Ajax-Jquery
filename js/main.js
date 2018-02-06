// CODE JQUERY POUR LE CHANGEMENT D'IMAGE ET POUR FAIRE DISPARAITRE LA BANNIERE

(function($){ // au chargement

  var verrou = false; // verrou qui permet de savoir si l'amination est en cours ou non

  $('#change').click(function(e){
    e.preventDefault(); // je bloque l'évenement du click

    if(!verrou){ // si l'animation du changement d'image n'est pas déjà en cours
      verrou = true; // je notifie que l'animation est en cours
      var tab_img = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.png', 'img/img4.jpg']; // mes 4 images
      var current_img = $('#banniere_img').attr('src'); // mon image affiché dans la bannière
      var random = Math.floor(Math.random() * (3 - 0 + 1)) + 0; // tirage au sort d'un nombre entre 0 et 3
      while(current_img == tab_img[random]){ // tant que l'image tirée au sort est la même que celle affiché actuellement dans la bannière
        random = Math.floor(Math.random() * (3 - 0 + 1)) + 0; // je retire au sort un nombre
      }
      var new_img = tab_img[random];


      // PREMIÈRE VERSION DE L'ANIMATION DU CHANGEMENT D'IMAGE
      //-----------------------------------------------------------------------------------------------
      // $('#banniere_img').animate({
      //   height: 50,        //diminution de la taille de l'image
      //   opacity: 0.1       //diminution de l'opacité de l'image
      // }, 400, "linear", function() {       // seulement une fois que la 1ère animation est terminée
      //   $('#banniere_img').attr('src', tab_img[random]);       // je change d'image
      //   $('#banniere_img').animate({.      // et je recommence une animation
      //     height: 200,     //remise à niveau de la taille de l'image
      //     opacity: 1       //remise à niveau de l'opacité de l'image
      //   }, 400, "linear");
      // });
      //-----------------------------------------------------------------------------------------------


      // VERSION FINALE DE L'ANIMATION DU CHANGEMENT D'IMAGE   |   ANIMATION "ZIGZAG"
      // l'animation en soit n'est pas visuellement magnifique, mais elle est bien plus sophistiquée que la précédente

      $('#banniere_img').animate({
        left: "+=400",    //déplacement vers la droite
        height: 100,      //diminution de la taille de l'image
        opacity: 0.7      //diminution de l'opacité de l'image
      }, 200, "linear", function() {    // seulement une fois que la 1ère animation est terminée
        $('#banniere_img').animate({
          left: "-=800"   //déplacement vers la gauche
        }, 400, "linear", function() {  // seulement une fois que la 2ème animation est terminée
          $('#banniere_img').attr('src', tab_img[random]);    // je change d'image
          $('#banniere_img').animate({
            left: "+=400",   //remise à niveau de la position de l'image
            height: 250,    //remise à niveau de la taille de l'image
            opacity: 1      //remise à niveau de l'opacité de l'image
          }, 200, "linear");
          verrou = false;  // je notifie que l'animation est à présent terminée
        });
      });
    }

  });


  $('#close').click(function(e){  // pour la disparition de la bannière
    e.preventDefault(); // je bloque l'évenement du click
    var Hpage = $(window).height(); // hauteur de la page
    var Hbanniere = $('#banniere_img').height();  // hauteur de la bannière
    $('#banniere').animate({  // animation pour faire disparaître vers le bas
      top: (Hpage + Hbanniere)
    }, 1200).fadeOut();
  });


})(jQuery);
