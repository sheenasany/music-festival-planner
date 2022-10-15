class Planner < ApplicationRecord
    belongs_to :festival
    belongs_to :user

    validates :budget, numericality: { only_integer: true }
    validates :transportation, presence: { message: " must be entered." }
    validates :additional_notes, length: { maximum: 2000, too_long: "2000 characters is the maximum allowed." }

end
