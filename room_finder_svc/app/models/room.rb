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
    name = get_name(room)
    availability = get_availability(email)
    room_attributes = RoomAttributeData.getAttributes(email)
    base_data = { name: email, display_name: name, available: !availability }
    base_data.merge!(room_attributes) if room_attributes
    base_data
  end

  def get_email_address(room)
    room_email_address_data = room[:room][:elems][:id][:elems].find do |data| 
        data.has_key? :email_address
    end

    email = room_email_address_data[:email_address][:text]
    puts "email = #{email}"

    email
  end

  def get_name(room)
    room_name_data = room[:room][:elems][:id][:elems].find do |data| 
        data.has_key? :name
    end

    name = room_name_data[:name][:text]
    puts "name = #{name}"

    name
  end

  def get_date_str_ews(date)
    date.strftime('%Y-%m-%dT%H:%M:00')
  end

  def get_availability(email)
    #start = @start_date.in_time_zone("Pacific Time (US & Canada)")
    #endt = @end_date.in_time_zone("Pacific Time (US & Canada)")
    start = get_date_str_ews(@start_date)
    endt = get_date_str_ews(@end_date)
    Rails.logger.info "searching dates: sd = #{start} edate = #{endt}"

    opts = {:start_time => start, :end_time => endt, :requested_view => :free_busy, :time_zone => {}}
    avail = @ews.get_user_availability([email], opts)

    avail_data = avail.get_user_availability_response
  
    Rails.logger.info "******AVIAL_DATA full = #{avail_data}"
    free_busy_data = avail_data[1][:free_busy_view][:elems]

    cal_data = free_busy_data.find do |data| 
      data.has_key? :calendar_event_array 
    end

    is_busy = false
    Rails.logger.info "******CAL_DATA = #{cal_data}"
    if cal_data
      busy_data = cal_data[:calendar_event_array][:elems][0][:calendar_event][:elems].find do |data| 
        data.has_key? :busy_type 
      end
    
      begin 
        is_busy = busy_data[:busy_type][:text] == "Busy"
      rescue
      end
    end

    Rails.logger.info "#{email} is busy?  #{is_busy}"

    is_busy
  end



end