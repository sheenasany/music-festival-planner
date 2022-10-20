class User < ApplicationRecord
    has_secure_password

    has_many :visits, dependent: :destroy
    has_many :festivals, through: :visits
    has_many :planners, dependent: :destroy
    has_many :festivals, through: :planners

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    # validates :password, length: { minimum: 8 }
    
    # maybe include more validators later for uppercase characters required/number character required
    # validate :password_lower_case
    # validate :password_uppercase
    # validate :password_special_char
    # validate :password_contains_number

    # def password_uppercase
    #     return if !!password.match(/\p{Upper}/)
    #     errors.add :password, ' must contain at least 1 uppercase character'
    # end
    
    # def password_lower_case
    #     return if !!password.match(/\p{Lower}/)
    #     errors.add :password, ' must contain at least 1 lowercase character'
    # end
    
    # def password_special_char
    #     special = "?<>',?[]}{=-)(*&^%$#`~{}!"
    #     regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
    # return if password =~ regex
    #    errors.add :password, ' must contain special character'
    # end
    
    # def password_contains_number
    #     return if password.count("0-9") > 0
    #     errors.add :password, ' must contain at least one number'
    # end

    # def password_length
    #     return if password.length("") < 8
    #     errors.add :password, 'must be at least 8 characters long'
    # end
end
