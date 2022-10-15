class MarkersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
before_action :only_address

# GET /markers
def index
    # markers = Marker.where(user_id: current_user.id) //for authorize
    markers = Marker.all
    render json: markers, method: [:only_address], status: :ok
end

# GET /markers/1
def show
    marker = Marker.find(params[:id])
    render json: marker, status: :ok
end

# # GEt /markers/address
# def show_address
#     markers = Marker
# end

private

  def not_found
    render json: { error: "Marker does not exist."}, status: :not_found
  end
end
