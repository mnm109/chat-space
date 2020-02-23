class MessagesController < ApplicationController
  
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
  end
end
