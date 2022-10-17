class Marker < ApplicationRecord
    has_many :festivals

    def address_only
        "#{object.city}, #{object.state}"
    end

end
