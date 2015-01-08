app.controller("sanJoseCtrl", function($scope) {
    var rooms = {
	    "penthouse" : {
	    	name: "penthouse", 
	    	available: false,
	    	people: 4,
	    	video: true,
	    	whiteboard: true
	    },
		"bungalow" : {
	    	name: "bungalow", 
	    	available: true,
	    	people: 4,
	    	video: true,
	    	whiteboard: true
	    },
		"houseboat" : {
	    	name: "houseboat", 
	    	available: false,
	    	people: 4,
	    	video: true,
	    	whiteboard: true
	    },
		"lanai" : {
	    	name: "lanai", 
	    	available: true,
	    	people: 4,
	    	video: true,
	    	whiteboard: true
	    },
		"wigwam" : {
	    	name: "wigwam", 
	    	available: false,
	    	people: 4,
	    	video: true,
	    	whiteboard: true
	    },
		"castle" : {
	    	name: "castle", 
	    	available: true,
	    	people: 4,
	    	video: true,
	    	whiteboard: true
	    },
		"farmhouse" : {
	    	name: "farmhouse", 
	    	available: false,
	    	people: 4,
	    	video: true,
	    	whiteboard: true
	    },
		"adobe" : {
	    	name: "adobe", 
	    	available: true,
	    	people: 4,
	    	video: true,
	    	whiteboard: true
	    }
	}
	$scope.rooms = rooms;

	$scope.hasAttribute = function(value)
	{
		return (value) ? "yes" : "no";
	}
});