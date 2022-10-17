class MarkerSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :latitude, :longitude

  has_many :festivals

end
