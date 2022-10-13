class CreateFestivals < ActiveRecord::Migration[7.0]
  def change
    create_table :festivals do |t|
      t.string :name
      t.string :date
      t.string :lineup_poster
      t.string :average_attendance
      t.integer :average_ticket_price
      t.string :link
      t.string :genre
      t.boolean :has_camping
      t.integer :marker_id

      t.timestamps
    end
  end
end
