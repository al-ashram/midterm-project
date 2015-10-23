class AddPicturesAndPairsTables < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :url_link
      t.timestamps null: false 
    end
    create_table :pairs do |t|
      t.integer :picture_one_id
      t.integer :picture_two_id
      t.float :score 
      t.integer :vote_count
      t.timestamps null: false
    end
  end
end
