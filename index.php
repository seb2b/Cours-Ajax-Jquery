<?php
require_once 'includes/config.php';
require_once 'includes/functions.php';
$req = Connexion()->prepare('SELECT * FROM posts');
$req->execute();
$posts = $req->fetchAll();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ajax Jquery</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container-fluid">
    <h2>Navigation en Ajax</h2>
    <div class="row">
        <div class="col-md-3">
            <form action="#">
                <select id="posts" class="form-control">
                    <option value="">Choisir un article</option>
                    <?php foreach ($posts as $post) : ?>
                    <option value="<?= $post->id_post;?>"><?= $post->title;?></option>
                    <?php endforeach;?>
                </select>
            </form>
        </div>
        <div class="col-md-8 block-comment">
            <h3>Commentaires</h3>
        </div>
    </div>
</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>
