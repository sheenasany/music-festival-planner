class MarkerSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :latitude, :longitude

  has_many :festivals

  def latitude
    object.latitude.to_f
  end

  def longitude
    object.longitude.to_f
  end

end
