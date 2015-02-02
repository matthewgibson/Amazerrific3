var toDoObjects = [
{
	"description" : "Get groceries",
	"tags" : [ "shopping", "chores" ]
},
{
	"description" : "Make up some new ToDos",

	"tags" : [ "writing", "work" ]
},
{
	"description" : "Prep for Monday's class",
	"tags"  : [ "work", "teaching" ]
},
{ 
	"description" : "Answer emails",
	"tags"  : [ "work" ]
},
{ 
	"description" : "Take Gracie to the park",
	"tags"  : [ "chores", "pets" ]
},
{ 
	"description" : "Finish writing this book",
	"tags"  : [ "writing", "work" ]
}
];
var organizeByTags = function (toDoObjects) {
	console.log("organizeByTags called");
};
var main = function () {
	"use strict";
	var organizeByTags = function () {
		console.log("organizeByTags called");
	};
	organizeByTags(toDoObjects);
};
$(document).ready(main);