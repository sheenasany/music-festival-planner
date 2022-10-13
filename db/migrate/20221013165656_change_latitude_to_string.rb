class ChangeLatitudeToString < ActiveRecord::Migration[7.0]
  def change
    change_column :markers, :latitude, :string
  end
end
