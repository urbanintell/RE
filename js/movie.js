var main = function() {
	"use strict";

	$("input#query").on("keypress", function(event) {
		if (event.keyCode === 13) {
			var movie = $('input#query').val();
			getMovieId(movie);
			$('input#query').val("");
		}
	});
	mostPopular();
	$("#search").click(function() {
		var movie = $('input#query').val();
		getMovieId(movie);
		$('input#query').val("");
	});


}

$(document).ready(main);


var findSimilarMovies = function(id) {
	$("#results .list-group").empty();

	$("#results .list-group").empty();
	var url = "https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=d7cd82f85ba6fe0b9ec964e72ed4392f";


	$.getJSON(url, function(movies) {

		for (var film in movies.results) {
			console.log(movies.results[film].title);
			var title = movies.results[film].title;

			// getMovies(id);
			var $li = $("<li>");
			$li.addClass("list-group-item");
			$li.text(title);

			$li.hide();
			$("#results .list-group").append($li);
			$li.slideDown();
		}
	});
}

var getMovieId = function(movieTitle) {
	$("#results .list-group").empty();
	var url = "https://api.themoviedb.org/3/search/movie?api_key=d7cd82f85ba6fe0b9ec964e72ed4392f&query=" + movieTitle + "&search_type=n_gram";

	$.getJSON(url, function(movie) {



		var id = movie.results[0].id;

		findSimilarMovies(id);

	});

}

var mostPopular = function() {
	$("#results .list-group").empty();
	var url = "https://api.themoviedb.org/3/movie/popular?api_key=d7cd82f85ba6fe0b9ec964e72ed4392f";

	$.getJSON(url, function(mostPopular) {

		for (var movies in mostPopular.results) {



			var $li = $("<li>");
			$li.addClass("list-group-item");
			$li.text(mostPopular.results[movies].title);

			$li.hide();
			$("#results .list-group").append($li);
			$li.slideDown();

		}

	});


}