'use strict';

app.directive("room", function () {
    var config = {
        replace: true,
        transclude: false,
        restrict: 'A',
        link: function (scope, element, attrs) {
            var shape = $(element);
            var data = JSON.parse(attrs.params);

            var content =
            "<ul class='details'>" +
            "<li><label>Available:</label><span>" + scope.hasAttribute(data.available) +"</span></li>" +
            "<li><label>People:</label><span>" + data.people +"</span></li>" +
            "<li><label>Video</label><span>" + scope.hasAttribute(data.video) +"</span></li>" +
            "<li><label>White Board</label><span>" + scope.hasAttribute(data.whiteboard) +"</span></li>" +
            "</ul>";

            var options = {
                trigger: "hover",
                delay: { show: 100, hide: 120},
                content: content,
                placement: "left",
                html: true,
                title: data.name
            };

            shape.popover(options);

        	var fill = (data.available) ? "#EDE6CE" : "#F15A22";
            shape.css("fill", fill);
        }
    };

    return config;
});