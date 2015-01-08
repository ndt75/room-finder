'use strict';

var Room = function (key, available, people, video, whiteboard, name, displayName) {
    this.key = key;
    this.name = name;
    this.available = available;
    this.people = people;
    this.video = video;
    this.whiteboard = whiteboard;
    this.displayName = (!displayName)? this.key: displayName;
}

Room.prototype = {
    hasAttribute : function (value) {
        return (value) ? 'yes' : 'no';
    }
}

var Office = function (name) {
    this.rooms = {};
    this.name = name;
};

Office.prototype = {
    addRoom: function (room) {
        this.rooms[room.key] = room;
    },
    getRooms: function () {
        return this.rooms;
    },
    getKey: function(name){
        var key = ''
        switch (name) {
            case 'sanjosepenthouse@move.com':
                key = 'penthouse';
                break;
            case 'sanjosebungalow@move.com':
                key = 'bungalow';
                break;
            case 'CampbellTheHouseboat@move.com':
                key = 'houseboat';
                break;
            case 'CampbellTheWigwam@move.com':
                key = 'wigwam';
                break;
            case 'CampbellTheCastle@move.com':
                key = 'castle';
                break;
            case 'sanjosefarmhouse@move.com':
                key = 'farmhouse';
                break;
            case 'CampbellTheAdobe@move.com':
                key = 'adobe';
                break;
            case 'sanjoseFortress@move.com':
                key = 'fortress';
                break;
            case 'sanjoseigloo@move.com':
                key = 'igloo';
                break;
            case 'sanjosepenthouse@move.com':
                key = 'mansion';
                break;
            case 'sanjosemansion@move.com':
                key = 'mansion';
                break;
            case 'CampbellTheLighthouse@move.com':
                key = 'lighthouse';
                break;
            case 'CampbellTheTepee@move.com':
                key = 'tepee';
                break;
            case 'CampbellTheYurt@move.com':
                key = 'yurt';
                break;
            case 'sanjosecasa@move.com':
                key = 'casa';
                break;
            case 'CMBTreehouse@move.com':
                key = 'treehouse';
                break;
            case 'CampbellTheChalet@move.com':
                key = 'chalet';
                break;
            case 'sanjoseloft@move.com':
                key = 'loft';
                break;
        }
        return key;
    },
    addRooms: function(rooms){
        var key = ''
        var room = null;

        for (var r in rooms) {
            room = rooms[r];
            key = this.getKey(room.name)
            room = new Room(key, room.available, room.people, room.video, room.whiteboard, room.name, room.display_name);
            this.rooms[key] = room;
        }

        return this.rooms;
    }

}

var office = new Office('San Jose');
var testOffice = new Office('Test');

//8th Floor
//office.addRoom(new Room('penthouse', true, 4, true, true, 'sanjosepenthouse@move.com'));
//office.addRoom(new Room('bungalow', false, 4, true, true, 'sanjosebungalow@move.com'));
//office.addRoom(new Room('houseboat', true, 4, true, 'CampbellTheHouseboat@move.com'));
////office.addRoom(new Room('lanai', false, 4, true, true));
//office.addRoom(new Room('wigwam', true, 4, true, true, 'CampbellTheWigwam@move.com'));
//office.addRoom(new Room('castle', false, 4, true, true, 'CampbellTheCastle@move.com'));
//office.addRoom(new Room('farmhouse', true, 4, true, true, 'sanjosefarmhouse@move.com'));
//office.addRoom(new Room('adobe', false, 4, true, true, 'CampbellTheAdobe@move.com'));
////7th Floor
//office.addRoom(new Room('fortress', true, 4, true, true, 'sanjoseFortress@move.com'));
//office.addRoom(new Room('igloo', false, 4, true, true, 'sanjoseigloo@move.com'));
//office.addRoom(new Room('mansion', false, 4, true, true, 'sanjosemansion@move.com'));
////office.addRoom(new Room('ued_lab', true, 4, true, true));
////office.addRoom(new Room('ued_viewing', true, 4, true, true));
//office.addRoom(new Room('lighthouse', false, 4, true, true, 'CampbellTheLighthouse@move.com'));
//office.addRoom(new Room('tepee', true, 4, true, true, 'CampbellTheTepee@move.com'));
//office.addRoom(new Room('yurt', false, 4, true, true, 'CampbellTheYurt@move.com'));
//office.addRoom(new Room('casa', true, 4, true, true, 'sanjosecasa@move.com'));
//office.addRoom(new Room('treehouse', true, 4, true, true, 'CMBTreehouse@move.com'));
//office.addRoom(new Room('chalet', false, 4, true, true, 'CampbellTheChalet@move.com'));
//office.addRoom(new Room('loft', false, 4, true, true, 'sanjoseloft@move.com'));
////office.addRoom(new Room('arena', false, 4, true, true));

office.addRoom(new Room('penthouse', false, 4, true, true, 'sanjosepenthouse@move.com'));
office.addRoom(new Room('bungalow', false, 4, true, true, 'sanjosebungalow@move.com'));
office.addRoom(new Room('houseboat', false, 4, true, 'CampbellTheHouseboat@move.com'));
office.addRoom(new Room('wigwam', false, 4, true, true, 'CampbellTheWigwam@move.com'));
office.addRoom(new Room('castle', false, 4, true, true, 'CampbellTheCastle@move.com'));
office.addRoom(new Room('farmhouse', false, 4, true, true, 'sanjosefarmhouse@move.com'));
office.addRoom(new Room('adobe', false, 4, true, true, 'CampbellTheAdobe@move.com'));
//7th Floor
office.addRoom(new Room('fortress', false, 4, true, true, 'sanjoseFortress@move.com'));
office.addRoom(new Room('igloo', false, 4, true, true, 'sanjoseigloo@move.com'));
office.addRoom(new Room('mansion', false, 4, true, true, 'sanjosemansion@move.com'));
office.addRoom(new Room('lighthouse', false, 4, true, true, 'CampbellTheLighthouse@move.com'));
office.addRoom(new Room('tepee', false, 4, true, true, 'CampbellTheTepee@move.com'));
office.addRoom(new Room('yurt', false, 4, true, true, 'CampbellTheYurt@move.com'));
office.addRoom(new Room('casa', false, 4, true, true, 'sanjosecasa@move.com'));
office.addRoom(new Room('treehouse', false, 4, true, true, 'CMBTreehouse@move.com'));
office.addRoom(new Room('chalet', false, 4, true, true, 'CampbellTheChalet@move.com'));
office.addRoom(new Room('loft', false, 4, true, true, 'sanjoseloft@move.com'));

var moveOffices = {};
moveOffices[office.name] = office;
moveOffices[testOffice.name] = office;

angular.module('roomFinderApp').
    factory('roomService', function ($http) {

        var roomService = function (data) {
            angular.extend(this, data);
        };

        roomService.getRooms = function (office) {
            return moveOffices[office].getRooms();
        };

        roomService.getRemoteDataTest = function()
        {
            var data = {"rooms":[{"name":"CampbellTheYurt@move.com","available":false,"display_name":"*San Jose The Yurt - Floor 7","video":true,"people":6,"whiteboard":true},{"name":"CampbellTheWigwam@move.com","available":false,"display_name":"*San Jose The Wigwam - Floor 8","video":true,"people":6,"whiteboard":true},{"name":"CampbellTheTepee@move.com","available":false,"display_name":"*San Jose The Tepee - Floor 7","video":true,"people":6,"whiteboard":true},{"name":"CampbellTheChalet@move.com","available":false,"display_name":"*San Jose The Chalet (video) - Floor 7","video":true,"people":6,"whiteboard":true},{"name":"CampbellTheCastle@move.com","available":true,"display_name":"*San Jose The Castle (booking approval required) (video) - Floor 8","video":true,"people":6,"whiteboard":true},{"name":"CampbellTheLighthouse@move.com","available":false,"display_name":"*San Jose The Lighthouse (video) - Floor 7","video":true,"people":6,"whiteboard":true},{"name":"CampbellTheAdobe@move.com","available":false,"display_name":"*San Jose The Adobe (video) - Floor 8","video":true,"people":6,"whiteboard":true},{"name":"CampbellTheHouseboat@move.com","available":false,"display_name":"*San Jose The Houseboat - Floor 8","video":true,"people":6,"whiteboard":true},{"name":"CMBTreehouse@move.com","available":false,"display_name":"*San Jose The Treehouse - Floor 7","video":true,"people":6,"whiteboard":true},{"name":"sanjosecasa@move.com","available":false,"display_name":"*San Jose The Casa - Floor 7","video":true,"people":6,"whiteboard":true},{"name":"sanjoseigloo@move.com","available":false,"display_name":"*San Jose The Igloo - Floor 7","video":true,"people":6,"whiteboard":true},{"name":"sanjosemansion@move.com","available":false,"display_name":"*San Jose The Mansion (video) - Floor 7","video":true,"people":6,"whiteboard":true},{"name":"sanjoseloft@move.com","available":true,"display_name":"*San Jose The Loft - Floor 7","video":true,"people":6,"whiteboard":true},{"name":"sanjosepenthouse@move.com","available":true,"display_name":"*San Jose The Penthouse (video) - Floor 8","video":true,"people":6,"whiteboard":true},{"name":"sanjosebungalow@move.com","available":false,"display_name":"*San Jose The Bungalow - Floor 8","video":true,"people":6,"whiteboard":true},{"name":"sanjosefarmhouse@move.com","available":true,"display_name":"*San Jose The Farmhouse - Floor 8","video":true,"people":6,"whiteboard":true},{"name":"sanjoseFortress@move.com","available":true,"display_name":"*San Jose The Fortress - Floor 8","video":true,"people":6,"whiteboard":true}]}
            return data;
        };

        roomService.getRemoteData = function(params)
        {
            var data = {}
            //Make call to REST Endpoint here
            return data;
        };

        roomService.updateRooms = function (data) {
            var office = moveOffices["San Jose"];
            return office.addRooms(data.rooms);
        };

        return roomService;
    });