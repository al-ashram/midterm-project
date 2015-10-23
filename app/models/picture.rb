class Picture < ActiveRecord::Base
  validates :url_link, uniqueness: true, format:{with:/\Ahttps?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.((?:jpe?g|gif|png)|(?:JPE?G|GIF|PNG))\z/, message: "Please upload a valid image URL" }
  def pairs
    Pair.by_picture(self.id)
  end 
  # has_many :abc, ->(picture){ where("pairs.picture_one_id = :picture_id OR pairs.picture_two_id = :picture_id", picture_id: picture.id) }
end