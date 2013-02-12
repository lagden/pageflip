<?php
$edicao = isset($_GET['edicao']) ? $_GET['edicao'] : 1;
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>Edição nº <?php echo $edicao ?> - Diário do Litoral</title>
    <link rel="stylesheet" href="css/jquery.booklet.css">
    <link rel="stylesheet" href="js/vendor/jquery/plugin/fancybox/jquery.fancybox.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Loading -->
    <div id="loadingIcon" class="hidden loadingIcon">
        <div class="loadingArc"></div>
    </div>
    <!-- Jornal -->
    <table class="table--jornal">
        <tr>
            <td>
                <div id="theBook" class="theBook hidden">
                    <?php
                    $itens = glob(__DIR__."/jornal/{$edicao}/*.jpg", GLOB_BRACE);
                    natcasesort($itens);
                    if($itens)
                    {
                        foreach($itens as $item)
                        {
                            $file = "jornal/{$edicao}/".basename($item);
                            $fileZoom = "jornal/{$edicao}/zoom/".basename($item);
                            echo '
                            <div class="figure">
                                <div class="showZoom">
                                    <a href="zoom.php?img='.base64_encode($fileZoom).'" class="fancybox.ajax triggerZoom">Ampliar</a>
                                </div>
                                <img src="'.$file.'" alt="">
                            </div>
                            ';
                        }
                    }
                    ?>
                </div>
            </td>
        </tr>
    </table>
    <!-- jQuery -->
    <script src="js/vendor/jquery/jquery.js" type="text/javascript"></script>

    <!-- Selectivizr -->
    <!--[if (gte IE 6)&(lte IE 8)]>
        <script src="js/vendor/selectivizr.js" type="text/javascript"></script>
    <![endif]-->

    <!-- jQuery UI -->
    <script src="js/vendor/jquery/jquery-ui.js" type="text/javascript"></script>

    <!-- GreenSock -->
    <script src="js/vendor/greensock/plugins/CSSPlugin.min.js" type="text/javascript"></script>
    <script src="js/vendor/greensock/easing/EasePack.min.js" type="text/javascript"></script>
    <script src="js/vendor/greensock/TweenLite.min.js" type="text/javascript"></script>
    <script src="js/vendor/greensock/jquery.gsap.min.js" type="text/javascript"></script>

    <!-- plugins -->
    <script src="js/vendor/jquery/plugin/jquery.imagesloaded.min.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/plugin/booklet/jquery.booklet.latest.min.js" type="text/javascript"></script>

    <!-- fancybox -->
    <script src="js/vendor/jquery/plugin/fancybox/jquery.fancybox.pack.js" type="text/javascript"></script>

    <!-- hammer -->
    <script src="js/vendor/hammer/hammer.js" type="text/javascript"></script>
    <script src="js/vendor/hammer/jquery.hammer.js" type="text/javascript"></script>

    <!-- scripts -->
    <script src="js/helper.js" type="text/javascript"></script>
    <script src="js/main.js" type="text/javascript"></script>
</body>
</html>
