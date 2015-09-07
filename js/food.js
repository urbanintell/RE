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