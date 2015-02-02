var main = function (toDoObjects) {
    "use strict";
    // now main has access to our toDo list!
   /* var toDos = ["list item 1",
                 "list item 2",
                 "list item 3",
                 "list item 4",
                 "list item 5",
                 "list item 6"];
                 */
                 var toDos = toDoObjects.map(function (toDo) {
        //we'll just return the description
        // of this toDoObject
        return toDo.description;
    });

                 $(".tabs a span").toArray().forEach(function (element) {
                    var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
            $input,
            $button,
            i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first 
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // THIS IS THE TAGS TAB CODE
                $input = $("<input>"),
                $button = $("<button>").text("+");
                console.log("the tags tab was clicked!");

                var organizedByTag = [
                {
                    "name": "shopping",
                    "toDos": ["Get groceries"]
                },

                {
                    "name": "chores",
                    "toDos": ["Get groceries", "Take Gracie to the park"]
                },

                {
                    "name": "writing",
                    "toDos": ["Make up some new ToDos", "Finish writing this book"]
                },

                {
                    "name": "work",
                    "toDos": ["Make up some new ToDos", "Prep for Monday's class",
                    "Answer emails", "Finish writing this book"]
                },
                {
                    "name": "teaching",
                    "toDos": ["Prep for Monday's class"]
                },
                {
                    "name": "pets",
                    "toDos": ["Take Gracie to the park"]
                }
                ]

                organizedByTag.forEach(function (tag) {
                    var $tagName = $("<h3>").text(tag.name),
                    $content = $("<ul>");
                    tag.toDos.forEach(function (description) {
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });
                    $("main .content").append($tagName);
                    $("main .content").append($content);
                });
            }

        } else if ($element.parent().is(":nth-child(4)")) {
            $input = $("<input>"),
            $button = $("<button>").text("+");
            

            $button.on("click", function () {
                    //if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");

                    });

            $content = $("<div>").append($input).append($button);

        }

        $("main .content").append($content);

        return false;
    });
});

$(".tabs a:first-child span").trigger("click");
};

$(document).ready(function () {
    $.getJSON("todos.json", function (toDoObjects) {
        // call main with the to-dos as an argument
        main(toDoObjects);
    });
});