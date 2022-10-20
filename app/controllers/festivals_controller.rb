class FestivalsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
skip_before_action :authorize, only: [:index, :show]

# GET /festivals
def index
    festivals = Festival.all
    render json: festivals, status: :ok
end

#GET /festivals/:id
def show
    festival = Festival.find(params[:id])
    render json: festival, status: :ok
end

#GET /fest_short_info
def fest_short_info
    # binding.pry
    festivals = Festival.all
    render json: festivals, serializer: FestivalMarkerSerializer, status: :ok
end

# GET /fest_short_info/:id
def fest_one_short_info
    festival = Festival.find(params[:id])
    render json: festival, serializer: FestivalMarkerSerializer, status: :ok
end

private

def not_found
    render json: {error: "Festival not find. Please try again."}, status: :not_found
end

end
