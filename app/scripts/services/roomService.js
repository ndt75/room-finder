'use strict';

var Room = function (displayName, available, people, video, whiteboard, name) {
    this.name = name;
    this.available = available;
    this.people = people;
    this.video = video;
    this.whiteboard = whiteboard;
    this.displayName = displayName;
}

var Office = function (name) {
    this.rooms = {};
    this.name = name;
}

Office.prototype = {
    addRoom: function (room) {
        this.rooms[room.displayName] = room;
    },
    getRooms: function () {
        return this.rooms;
    }
}

var office = new Office('San Jose');

//8th Floor
office.addRoom(new Room('penthouse', true, 4, true, true, 'sanjosepenthouse@move.com'));
office.addRoom(new Room('bungalow', false, 4, true, true, 'sanjosebungalow@move.com'));
office.addRoom(new Room('houseboat', true, 4, true, 'CampbellTheHouseboat@move.com'));
office.addRoom(new Room('lanai', false, 4, true, true));
office.addRoom(new Room('wigwam', true, 4, true, true, 'CampbellTheWigwam@move.com'));
office.addRoom(new Room('castle', false, 4, true, true, 'CampbellTheCastle@move.com'));
office.addRoom(new Room('farmhouse', true, 4, true, true, 'sanjosefarmhouse@move.com'));
office.addRoom(new Room('adobe', false, 4, true, true, 'CampbellTheAdobe@move.com'));
//7th Floor
office.addRoom(new Room('fortress', true, 4, true, true, 'sanjoseFortress@move.com'));
office.addRoom(new Room('igloo', false, 4, true, true, 'sanjoseigloo@move.com'));
office.addRoom(new Room('mansion', false, 4, true, true, 'sanjosemansion@move.com'));
//office.addRoom(new Room('ued_lab', true, 4, true, true));
//office.addRoom(new Room('ued_viewing', true, 4, true, true));
office.addRoom(new Room('lighthouse', false, 4, true, true, 'CampbellTheLighthouse@move.com'));
office.addRoom(new Room('tepee', true, 4, true, true, 'CampbellTheTepee@move.com'));
office.addRoom(new Room('yurt', false, 4, true, true, 'CampbellTheYurt@move.com'));
office.addRoom(new Room('casa', true, 4, true, true, 'sanjosecasa@move.com'));
office.addRoom(new Room('treehouse', true, 4, true, true, 'CMBTreehouse@move.com'));
office.addRoom(new Room('chalet', false, 4, true, true, 'CampbellTheChalet@move.com'));
office.addRoom(new Room('loft', false, 4, true, true, 'sanjoseloft@move.com'));
//office.addRoom(new Room('arena', false, 4, true, true));

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