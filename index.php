<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>Booklet</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/jquery.booklet.css">
</head>
<body>
    <table class="table--jornal">
        <tr>
            <td>
                <div id="theBook" class="theBook">
                    <?php
                    $itens = glob(__DIR__."/jornal/1/*.jpg", GLOB_BRACE);
                    if($itens)
                    {
                        foreach($itens as $item)
                        {
                            $file = "jornal/1/".basename($item);
                            echo "<div><figure><img src=\"{$file}\" alt=\"\"></figure></div>";
                        }
                    }
                    ?>
                </div>
            </td>
        </tr>
    </table>
    <!-- scripts -->
    <script src="js/vendor/jquery/jquery.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/jquery-ui.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/plugin/jquery.imagesloaded.min.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/plugin/jquery.easing.1.3.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/plugin/booklet/jquery.booklet.latest.min.js" type="text/javascript"></script>
    <script src="js/helper.js" type="text/javascript"></script>
    <script src="js/main.js" type="text/javascript"></script>
</body>
</html>
