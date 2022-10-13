class VisitSerializer < ActiveModel::Serializer
  attributes :id, :date_visited, :been_visited, :user_id, :festival_id
end
