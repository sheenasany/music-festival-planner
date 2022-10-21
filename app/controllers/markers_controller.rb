class MarkersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
skip_before_action :authorize, only: [:index, :show]
# before_action :only_address

# GET /markers
def index
    # markers = Marker.where(user_id: current_user.id) //for authorize
    render json: Marker.all, status: :ok
end

# GET /markers/1
def show
    marker = Marker.find(params[:id])
    render json: marker, status: :ok
end

# GET /address
def show_address
    address = Marker.all
    render json: address.pluck(:city, :state), status: :ok
end

# GET /addresses/:id
def show_individual_address
  address = Marker.find(params[:id])
  render json: "#{address.city}, #{address.state}", status: :ok
end

private

  def not_found
    render json: { error: "Marker does not exist."}, status: :not_found
  end
end
