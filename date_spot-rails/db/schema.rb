# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_02_103640) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "body"
    t.bigint "spot_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["spot_id"], name: "index_comments_on_spot_id"
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "spot_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["spot_id"], name: "index_likes_on_spot_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "location"
    t.string "url"
    t.string "avg_cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "latitude"
    t.string "longitude"
  end

  create_table "tag_associations", force: :cascade do |t|
    t.bigint "spot_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["spot_id"], name: "index_tag_associations_on_spot_id"
    t.index ["tag_id"], name: "index_tag_associations_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "tag"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tags_spots", id: false, force: :cascade do |t|
    t.bigint "tag_id"
    t.bigint "spot_id"
    t.index ["spot_id"], name: "index_tags_spots_on_spot_id"
    t.index ["tag_id"], name: "index_tags_spots_on_tag_id"
  end

  add_foreign_key "comments", "spots"
  add_foreign_key "likes", "spots"
  add_foreign_key "tag_associations", "spots"
  add_foreign_key "tag_associations", "tags"
end
