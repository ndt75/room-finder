class RoomAttributeData

  @@room_attributes = {
    "CampbellTheYurt@move.com" => { video: false, people: 6, whiteboard: true },
    "CampbellTheWigwam@move.com" => { video: false, people: 8, whiteboard: true },
    "CampbellTheTepee@move.com" => { video: false, people: 6, whiteboard: true },
    "CampbellTheChalet@move.com" => { video: true, people: 14, whiteboard: true },
    "CampbellTheCastle@move.com" => { video: true, people: 20, whiteboard: true },
    "CampbellTheLighthouse@move.com" => { video: true, people: 18, whiteboard: true },
    "CampbellTheAdobe@move.com" => { video: true, people: 8, whiteboard: true },
    "CampbellTheHouseboat@move.com" => { video: true, people: 6, whiteboard: true },
    "CMBTreehouse@move.com" => { video: false, people: 6, whiteboard: true },
    "sanjosecasa@move.com" => { video: false, people: 6, whiteboard: true },
    "sanjoseigloo@move.com" => { video: false, people: 6, whiteboard: true },
    "sanjosemansion@move.com" => { video: true, people: 10, whiteboard: true },
    "sanjoseloft@move.com" => { video: false, people: 6, whiteboard: true },
    "sanjosepenthouse@move.com" => { video: true, people: 8, whiteboard: true },
    "sanjosebungalow@move.com" => { video: false, people: 6, whiteboard: true },
    "sanjosefarmhouse@move.com" => { video: false, people: 8, whiteboard: true },
    "sanjoseFortress@move.com" => { video: false, people: 8, whiteboard: true },
  }

  def self.getAttributes(room_name)
    @@room_attributes[room_name]
  end
end