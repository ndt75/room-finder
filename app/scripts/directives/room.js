'use strict';

angular.module('roomFinderApp').directive('room', function () {
    var config = {
        replace: true,
        transclude: false,
        restrict: 'A',
        scope: {
            'params' : '='
        },
        link: function (scope, element) {
            var shape = $(element);
            var room = scope.params;

            var content =
            '<ul class="details">' +
            '<li><label>Available:</label><span>' + room.hasAttribute(room.available) +'</span></li>' +
            '<li><label>People:</label><span>' + room.people +'</span></li>' +
            '<li><label>Video</label><span>' + room.hasAttribute(room.video) +'</span></li>' +
            '<li><label>White Board</label><span>' + room.hasAttribute(room.whiteboard) +'</span></li>' +
            '</ul>';

            var options = {
                trigger: 'hover',
                delay: { show: 100, hide: 120},
                content: content,
                placement: 'left',
                html: true,
                title: room.displayName
            };

            shape.popover(options);

        	var fill = (room.available) ? '#EDE6CE' : '#F15A22';
            shape.css('fill', fill);
        }
    };

    return config;
});
