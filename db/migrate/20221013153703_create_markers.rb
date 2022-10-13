class CreateMarkers < ActiveRecord::Migration[7.0]
  def change
    create_table :markers do |t|
      t.string :city
      t.string :state
      t.integer :latitude
      t.integer :longitude

      t.timestamps
    end
  end
end
