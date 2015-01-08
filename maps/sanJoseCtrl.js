app.controller("sanJoseCtrl", function($scope, roomService) {
	$scope.rooms = roomService.getRooms("San Jose");

	$scope.hasAttribute = function(value)
	{
		return (value) ? "yes" : "no";
	}
});