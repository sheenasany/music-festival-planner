# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_13_165841) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "festivals", force: :cascade do |t|
    t.string "name"
    t.string "date"
    t.string "lineup_poster"
    t.string "average_attendance"
    t.integer "average_ticket_price"
    t.string "link"
    t.string "genre"
    t.boolean "has_camping"
    t.integer "marker_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "markers", force: :cascade do |t|
    t.string "city"
    t.string "state"
    t.string "latitude"
    t.string "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "planners", force: :cascade do |t|
    t.integer "budget"
    t.string "transportation"
    t.string "lodging"
    t.string "friends_attending"
    t.text "additional_notes"
    t.integer "festival_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "visits", force: :cascade do |t|
    t.date "date_visited"
    t.boolean "been_visited"
    t.integer "user_id"
    t.integer "festival_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
