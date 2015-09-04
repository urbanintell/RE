var main = function() {
	"use strict";
	$("#search").click(function() {
		
		var kindOfFood = $('input#query').val();
		
		
		
		food(kindOfFood);

		$('input#query').val("");
	
	});
}

$(document).ready(main);


var food = function(kindOfFood){
		$("#results .list-group").empty();
var url = "http://api.pearson.com:80/kitchen-manager/v1/recipes?name-contains="+kindOfFood;
	
	$.getJSON(url, function(foods) {
		for (var recipe in foods.results){
			
			//console.log(foods.results[recipe]['name']);
			var $li = $("<li>");
			$li.addClass("list-group-item");
			$li.text(foods.results[recipe]['name']);

			$li.hide();
			$("#results .list-group").append($li);
			$li.slideDown();
		}
	});
}

var getSimilarArtist = function(id) {
	var url = "https://api.spotify.com/v1/artists/" + id + "/related-artists";
	$.getJSON(url, function(artists) {
		for (var musician in artists.artists) {
			console.log(artists.artists[musician]['name']);

			var $li = $("<li>");
			$li.addClass("list-group-item");
			$li.text(artists.artists[musician]['name']);

			$li.hide();
			// 	for(var photo in musician){
			// 	$img.attr("src",artists[musician][photo]['images'][0]['url']);
			$("#results .list-group").append($li);
			$li.slideDown();
			// }
		}
	});
}

