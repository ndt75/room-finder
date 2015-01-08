'use strict';

app.directive("room", function () {
    var config = {
        replace: true,
        transclude: false,
        restrict: 'A',
        link: function (scope, element, attrs) {
            var shape = $(element);
            var name = shape.data("name");
            var template = 
            "<div>" + 
            "<ul class='details'>" +
            "<li><label>Name:</label><span>" + name +"</span></li>" + 
            "<li><label>People:</label><span>" + 4 +"</span></li>" + 
            "<li><label>Video</label><span>" + "yes" +"</span></li>" + 
            "<li><label>White Board</label><span>" + "yes" +"</span></li>" +
            "</ul>" +
            "</div>";

            var options = {
                trigger: "hover",
                delay: { show: 100, hide: 120},
                content: template,
                placement: "left",
                html: true
            };

            shape.popover(options);
    		
    	  	var available = shape.data("available");
            

        	var fill = (available) ? "#EDE6CE" : "#F15A22";
            //var style = (available) ? "availableA" : "unavailableA";

            //shape.addClass(style);
            shape.css("fill", fill);
        }
    };

    return config;
});