class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def show
        render json: @current_user, status: :ok #shows the current user logged in, works through the before_action
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id #connects the session for the user to the new user id 
        render json: user, status: :created
    end

    private
    def user_params
        params.permit(:username, :password)
    end
end
