class Marker < ApplicationRecord
    has_many :festivals

    def only_address
        binding.break
    end
end
