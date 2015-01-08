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

//8th Floor
office.addRoom(new Room("penthouse", true, 4, true, true));
office.addRoom(new Room("bungalow", false, 4, true, true));
office.addRoom(new Room("houseboat", true, 4, true, true));
office.addRoom(new Room("lanai", false, 4, true, true));
office.addRoom(new Room("wigwam", true, 4, true, true));
office.addRoom(new Room("castle", false, 4, true, true));
office.addRoom(new Room("farmhouse", true, 4, true, true));
office.addRoom(new Room("adobe", false, 4, true, true));
//7th Floor
office.addRoom(new Room("gazebo", true, 4, true, true));
office.addRoom(new Room("igloo", false, 4, true, true));
office.addRoom(new Room("mansion", false, 4, true, true));
office.addRoom(new Room("ued_lab", true, 4, true, true));
office.addRoom(new Room("ued_viewing", true, 4, true, true));
office.addRoom(new Room("lighthouse", false, 4, true, true));
office.addRoom(new Room("tepee", true, 4, true, true));
office.addRoom(new Room("yurt", false, 4, true, true));
office.addRoom(new Room("casa", true, 4, true, true));
office.addRoom(new Room("treehouse", true, 4, true, true));
office.addRoom(new Room("chalet", false, 4, true, true));
office.addRoom(new Room("loft", false, 4, true, true));
office.addRoom(new Room("arena", false, 4, true, true));

var moveOffices = {};
moveOffices[office.name] = office;

app.
    factory('roomService', function ($http) {
        var roomService = function (data) {
            angular.extend(this, data);
        };

        roomService.getRooms = function (office) {
            return moveOffices[office].getRooms();
        };

        return roomService;
    });