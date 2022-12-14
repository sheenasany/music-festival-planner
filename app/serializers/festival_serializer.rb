class FestivalSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :lineup_poster, :average_attendance, :average_ticket_price, :link, :genre, :has_camping, :marker_id

  belongs_to :marker, serializer: MarkerAddressSerializer
  has_many :planners
  # has_many :visits
end
