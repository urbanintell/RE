<!-- jQuery -->
        <script src="js/jquery.js"></script>
        <!-- Bootstrap Core JavaScript -->
        <script src="js/bootstrap.min.js"></script>
        <!-- Plugin JavaScript -->
        <script src="js/jquery.easing.min.js"></script>
        <script src="js/jquery.fittext.js"></script>
        <script src="js/wow.min.js"></script>
        <!-- Custom Theme JavaScript -->
        <script src="js/creative.js"></script>
        <?php
        switch($page) {
            case "movies":
                echo '<script type="text/javascript" src="js/movie.js"></script>';
            break;
            case "recipes":
                echo '<script type="text/javascript" src="js/food.js" ></script>';
            break;
            case "music":
                echo '<script type="text/javascript" src="js/script.js"></script>';
            break;
            default:
                echo '<script type="text/javascript" src="js/script.js"></script>';
            break;
        }
        ?>
    </body>
</html>