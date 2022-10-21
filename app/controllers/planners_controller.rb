class PlannersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
before_action :set_planner, only: [:show, :update, :destroy]

def index
    current_user = User.find_by(id: session[:user_id])
    planners = current_user.planners
    render json: planners, status: :ok  
end

def show
    render json: @planner, status: :ok
end

def create
    render json: Planner.create!(planner_params), status: :created
end

def update
    render json: @planner.update!(planner_params), status: :accepted
end

def destroy
    @planner.destroy
    head :no_content
end

private

def set_planner
    @planner = Planner.find(params[:id])
end

def planner_params
    params.permit(:budget, :transportation, :lodging, :friends_attending, :additional_notes, :festival_id, :user_id)
end

def not_found
  render json: {error: "Planner not found. Please try again."}, status: :not_found
end

def render_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
end

end
