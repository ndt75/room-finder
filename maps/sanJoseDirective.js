'use strict';

app.directive("room", function () {
    var config = {
        replace: true,
        transclude: false,
        restrict: 'A',
        link: function (scope, element, attrs) {
            var shape = $(element);
            var attrs = JSON.parse(attrs.params);

            var content =
            "<ul class='details'>" +
            "<li><label>Available:</label><span>" + scope.hasAttribute(attrs.available) +"</span></li>" + 
            "<li><label>People:</label><span>" + attrs.people +"</span></li>" + 
            "<li><label>Video</label><span>" + scope.hasAttribute(attrs.video) +"</span></li>" + 
            "<li><label>White Board</label><span>" + scope.hasAttribute(attrs.whiteboard) +"</span></li>" +
            "</ul>";

            var options = {
                trigger: "hover",
                delay: { show: 100, hide: 120},
                content: content,
                placement: "left",
                html: true,
                title: attrs.name
            };

            shape.popover(options);

        	var fill = (attrs.available) ? "#EDE6CE" : "#F15A22";
            shape.css("fill", fill);
        }
    };

    return config;
});