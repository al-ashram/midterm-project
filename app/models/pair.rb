class Pair < ActiveRecord::Base
  belongs_to :picture_one, :class_name => 'Picture', :foreign_key => 'picture_one_id'
  belongs_to :picture_two, :class_name => 'Picture', :foreign_key => 'picture_two_id'
  
  def self.by_picture(picture_id)
    where("pairs.picture_one_id = :picture_id OR pairs.picture_two_id = :picture_id", picture_id: picture_id)
  end
end