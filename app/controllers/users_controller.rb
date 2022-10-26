class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    skip_before_action :authorize, only: [:create, :show]

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

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
