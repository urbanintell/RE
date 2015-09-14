var main = function() {
	"use strict";

	var recognition = new webkitSpeechRecognition();
	recognition.onresult = function(event) {
		
		console.log(event)
	}
	recognition.start();

	$("input#query").on("keypress", function(event) {
		if (event.keyCode === 13) {
			var artist = $('input#query').val();
			search(artist);

			$('input#query').val("");

		}
	});
	$("#search").click(function() {
		// clear div
		var artist = $('input#query').val();
		search(artist);

		$('input#query').val("");

	});
}

$(document).ready(main);
var search = function(artist) {
	$("#results .list-group").empty();
	var url = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist";
	$.getJSON(url, function(artists) {
		var id = artists.artists.items[0]['id'];
		getSimilarArtist(id);
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