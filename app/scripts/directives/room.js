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
            var room = scope.params;
            var shape = $(element);

            function drawShape(room) {
                //console.log('room', room)
                //debugger;

                var content =
                '<ul class="details">' +
                '<li><label>Available:</label><span>' + room.hasAttribute(room.available) +'</span></li>' +
                '<li><label>People:</label><span>' + room.people +'</span></li>' +
                '<li><label>Video</label><span>' + room.hasAttribute(room.video) +'</span></li>' +
                '<li><label>White Board</label><span>' + room.hasAttribute(room.whiteboard) +'</span></li>' +
                '</ul>';

                shape.qtip({
                    content:
                    {
                        text: content,
                        title: room.displayName
                    },
                    style: 'qtip-bootstrap'
                });

                var fill = (room.available) ? '#EDE6CE' : '#F15A22';
                shape.css('fill', fill);
            }

            drawShape(room);

            scope.$watch('params', function(newVal, oldVal) {
                if (newVal.available !== oldVal.available) {
                    drawShape(newVal);
                }
            });
        }
    };

    return config;
});
