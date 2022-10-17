class MarkerAddressSerializer < ActiveModel::Serializer
    attributes :address

    def address
        "#{object.city}, #{object.state}"
    end
end