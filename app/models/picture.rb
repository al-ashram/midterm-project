class Picture < ActiveRecord::Base
  def pairs
    Pair.by_picture(self.id)
  end 
  # has_many :abc, ->(picture){ where("pairs.picture_one_id = :picture_id OR pairs.picture_two_id = :picture_id", picture_id: picture.id) }
end