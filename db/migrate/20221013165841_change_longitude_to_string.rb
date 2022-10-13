class ChangeLongitudeToString < ActiveRecord::Migration[7.0]
  def change
    change_column :markers, :longitude, :string
  end
end
