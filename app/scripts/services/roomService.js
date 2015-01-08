'use strict';

var Room = function (name, available, people, video, whiteboard) {
    this.name = name;
    this.available = available;
    this.people = people;
    this.video = video;
    this.whiteboard = whiteboard;
}

var Office = function (name) {
    this.rooms = {};
    this.name = name;
}

Office.prototype = {
    addRoom: function (room) {
        this.rooms[room.name] = room;
    },
    getRooms: function () {
        return this.rooms;
    }
}

var office = new Office("San Jose");
office.addRoom(new Room("penthouse", true, 4, true, true));
office.addRoom(new Room("bungalow", false, 4, true, true));
office.addRoom(new Room("houseboat", true, 4, true, true));
office.addRoom(new Room("lanai", false, 4, true, true));
office.addRoom(new Room("wigwam", true, 4, true, true));
office.addRoom(new Room("castle", false, 4, true, true));
office.addRoom(new Room("farmhouse", true, 4, true, true));
office.addRoom(new Room("adobe", false, 4, true, true));

var moveOffices = {};
moveOffices[office.name] = office;

angular.module('roomFinderApp').
    factory('roomService', function ($http) {
        var roomService = function (data) {
            angular.extend(this, data);
        };

        roomService.getRooms = function (office) {
            return moveOffices[office].getRooms();
        };

        return roomService;
    });