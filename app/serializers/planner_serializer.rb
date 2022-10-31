class PlannerSerializer < ActiveModel::Serializer
  attributes :id, :budget, :transportation, :lodging, :friends_attending, :additional_notes, :festival_id, :user_id

  belongs_to :festival
  belongs_to :user
  
end
