class Festival < ApplicationRecord
    belongs_to :marker
    has_many :planners, dependent: :destroy
    has_many :users, through: :planners
    has_many :visits, dependent: :destroy
    has_many :users, through: :visits

end
