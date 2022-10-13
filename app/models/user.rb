class User < ApplicationRecord
    has_many :visits, dependent: :destroy
    has_many :festivals, through: :visits, dependent: :destroy
    has_many :planners, dependent: :destroy
    has_many :festivals, through: :planners, dependent: :destroy

    has_secure_password
end
