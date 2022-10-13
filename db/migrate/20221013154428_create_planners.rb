class CreatePlanners < ActiveRecord::Migration[7.0]
  def change
    create_table :planners do |t|
      t.integer :budget
      t.string :transportation
      t.string :lodging
      t.string :friends_attending
      t.text :additional_notes
      t.integer :festival_id
      t.integer :user_id

      t.timestamps
    end
  end
end
