<?php
require_once 'includes/config.php';
require_once 'includes/functions.php';

if(isset($_GET['id_post'])){
    $req = Connexion()->prepare('SELECT * FROM comments WHERE id_post =?');
    $req->execute(array($_GET['id_post']));
    $comments = $req->fetchAll();
    ?><h3>Commentaires de l'article</h3><?php
    foreach ($comments as $comment){
        ?>
        <p>
            <strong></strong>
        </p>
        <?php
    }
}