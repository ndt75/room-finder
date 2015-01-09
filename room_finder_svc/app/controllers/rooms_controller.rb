class RoomsController < ApplicationController

  def get
    room_obj = Room.new
    @rooms = room_obj.get_rooms_data(start: start_time, end: end_time)
    puts @rooms
  end

  def book

  end

  def start_time
    date = params[:date]
    stime = params[:stime]
    puts "#{date} #{stime}"
    date = DateTime.strptime("#{date} #{stime} pst", '%m/%d/%Y %I:%M %p %z')
  end

  def end_time
    date = params[:date]
    etime = params[:etime]
     puts "#{date} #{etime}"
    date = DateTime.strptime("#{date} #{etime} pst", '%m/%d/%Y %I:%M %p %z')
  end
end