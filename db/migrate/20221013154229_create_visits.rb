class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.date :date_visited
      t.boolean :been_visited
      t.integer :user_id
      t.integer :festival_id

      t.timestamps
    end
  end
end
