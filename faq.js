var main = function () {
    var questions= ["What Year is it?",
                 "Who are we?",
                 "When are they?",
                 ];
                 
    var answers=["1985.",
    		"Everywhere.",
    		"Never."
    		];            

		
            
    $(".tabs a span").toArray().forEach(function(element){
        
        //on click, function start
        $(element).on("click", function(){
            
            //jQuery variable
           	var $element = $(element);
            
            // make all the tabs interactive
            $(".tabs span").removeClass("active");
        
            // active tab
            $element.addClass("active");
        
            // empties main after each tab
            $("main .content").empty();
            
            if ($element.parent().is(":nth-child(1)")) {
                var content = $("<h3>");
                content.append(questions[0]);
                content.append("<p>"+answers[0]);
            
               $("main .content").append(content);

                
            } else if ($element.parent().is(":nth-child(2)")) {
                var content = $("<h3>");
                content.append(questions[1]);
                content.append("<p>"+answers[1]);
                
                $("main .content").append(content);  
                
            } else if ($element.parent().is(":nth-child(3)")) {
                var content = $("<h3>");
                content.append(questions[2]);
                content.append("<p>"+answers[2]);
                
                $("main .content").append(content); 
                
            } 
            
            
        
            
            return false;
        
        });
    
    
        
    });
    
    
    $(".tabs a:first-child span").trigger("click");
    
    
};

$(document).ready(main);