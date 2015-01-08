app.controller("sanJoseCtrl", function($scope) {
    var rooms = [];
	rooms["penthouse"] = {
	    	name: "penthouse", 
	    	available: false
	    };
	$scope.rooms = rooms;

    console.log(rooms.penthouse.points);
});