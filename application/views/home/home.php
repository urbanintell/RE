<?php
    switch($page) {
        case "movies":
            $url = 'img/movies.jpg';
        break;
        case "recipes":
            $url = 'img/foodporn.jpg';
        break;
        default:
            $url = 'img/KAWS.jpg';
        break;
    }
?>
<section class="bg-primary" style="background-image: url(<?=$url;?>)" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 text-center">
                        <input type="text" id="query" placeholder="Search movies you liked to find similar ones" class="form-control" placeholder="Search" aria-describedby="basic-addon1">
                        <br/>
                        <a id ="search"class="btn btn-default btn-xl wow tada">Search Movies</a>
                    </div>
                </div>
            </div>
        </section>
        <div id="results">
            <ul class="list-group">
            </ul>
        </div>