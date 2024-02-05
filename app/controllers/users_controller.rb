class UsersController < ApplicationController
    def index
    end
    def update 
      @user = User.find(params[:id])
      @user.update(users_params)
    end
    def profile
      @id = current_user.id
      @user = User.find(@id)
    end    
    private
    def users_params
      params.require(:user).permit(:email,:file,:mobile_number,:first_name,:last_name,:country,:profile_photo,:state,:permanent_address,:current_address)
    end
end
  