<?php
require_once 'includes/config.php';
require_once 'includes/functions.php';

?>
<h3>Commentaires de l'article</h3>
<hr>
<?php
if(isset($_GET['id_post']) && !empty($_GET['id_post'])){
    $req = Connexion()->prepare('SELECT * FROM comments WHERE id_post =?');
    $req->execute(array($_GET['id_post']));
    $comments = $req->fetchAll();
    foreach ($comments as $comment): ?>
        <p>
            <strong><?= $comment->created_at;?></strong><br>
            <?= $comment->content;?>
        </p><br>
    <?php endforeach;
}else{
    echo "<p>Aucun commentaire pour cet article</p>";
}