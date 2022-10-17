class FestivalMarkerSerializer < ActiveModel::Serializer
    attributes :fest_short_info

    belongs_to :marker, serializer: MarkerAddressSerializer

    def fest_short_info
        "#{object.lineup_poster}
        #{object.name} -- #{object.date}"
    end
end