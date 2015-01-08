class Room
  include Viewpoint::EWS

  ENDPOINT = 'https://mail.move.com/ews/Exchange.asmx'

  def initialize
    @ews = Viewpoint::EWSClient.new ENDPOINT, "sdefazio", "s0cc3rb@llR"
    @rooms = []
  end

  def get_rooms_data(args)
    @start_date = args[:start]
    @end_date = args[:end]

    #get all rooms in SJC
    sjc_meeting_rooms = @ews.get_rooms("CMBMeetingRooms@move.com").roomsArray
    sjc_meeting_rooms.each do |room|
      @rooms.push(get_room_info(room))
    end
    puts @rooms

    @rooms
  end

  def get_room_info(room)
    email = get_email_address(room)
    availability = get_availability(email)
    { name: email, available: !availability }
  end

  def get_email_address(room)
    room_email_address_data = room[:room][:elems][:id][:elems].find do |data| 
        data.has_key? :email_address
    end

    email = room_email_address_data[:email_address][:text]
    puts "email = #{email}"

    email
  end

  def get_availability(email)
    opts = {:start_time => @start_date, :end_time => (@end_date), :requested_view => :free_busy_merged }
    avail = @ews.get_user_availability([email], opts)

    avail_data = avail.get_user_availability_response
  

    free_busy_data = avail_data[1][:free_busy_view][:elems]

    cal_data = free_busy_data.find do |data| 
      data.has_key? :calendar_event_array 
    end

    is_busy = false

    if cal_data
      busy_data = cal_data[:calendar_event_array][:elems][0][:calendar_event][:elems].find do |data| 
        data.has_key? :busy_type 
      end
    
      begin 
        is_busy = busy_data[:busy_type][:text] == "Busy"
      rescue
      end
    end

    puts "#{email} is busy?  #{is_busy}"

    is_busy
  end



end