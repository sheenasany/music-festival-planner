class FestivalsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
skip_before_action :authorize, only: [:index, :show]

def index
    festivals = Festival.all
    render json: festivals, status: :ok
end

def show
    festival = Festival.find(params[:id])
    render json: festival, status: :ok
end

private

def not_found
    render json: {error: "Festival not find. Please try again."}, status: :not_found
end

end
