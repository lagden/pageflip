<?php $img = isset($_GET['img']) ? base64_decode($_GET['img']) : "images/blank.gif"; ?>
<div class="content">
    <img draggable="false" unselectable="on" src="<?php echo $img ?>" alt="">
</div>
