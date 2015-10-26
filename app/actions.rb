DEFAULT_IMAGE_URL = "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
imgurClient = Imgur.new('c7d3f45cb9049a2')

def get_all_urls
  @url_array = Array.new
  Picture.all.each do |image|
    @url_array.push(image.url_link)
  end
end 


def grab_random_pic
pictures = Picture.order("Random()").limit(2)
 @picture_one = pictures[0] || Picture.new(url_link:DEFAULT_IMAGE_URL)
 @picture_two = pictures[1] || Picture.new(url_link:DEFAULT_IMAGE_URL)
 #binding.pry
 # @picture_one = Picture.order("Random()").first
 #  loop do
 #   @picture_two = Picture.order("Random()").first
 #   break if @picture_two.id != @picture_one.id
 #  end
end


# Homepage (Root path)
get '/' do
  # @random_index = rand(30)
  # @face = HTTParty.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyAcwfwtxSfmJpGHn17ZgWD9cPfmh57q51w&cx=008706594706571137855:earcvruiqoc&safe=medium&q=face&searchType=image&start=#{@random_index}")
  grab_random_pic
  get_all_urls
  # erb :slider
  erb :slider
end

get '/slot_machine' do
  erb :slot_machine
end

get '/play' do
  erb :play
end

post '/submit' do
  @score = params[:points]
  @picture_one_id = params[:picture_one_id]
  @picture_two_id = params[:picture_two_id]
  # binding.pry
  # Find if the pair of picture_one and picture_two is already in the pairs table
  if @pair = Pair.find_by("(picture_one_id =? AND picture_two_id =?) OR (picture_one_id =? AND picture_two_id =?)", params[:picture_one_id], params[:picture_two_id], params[:picture_two_id],params[:picture_one_id])
    old_score = @pair.score.to_f
    old_count = @pair[:vote_count].to_f
    new_count = (old_count + 1) 
    new_score = (old_score * old_count + @score.to_f)/(new_count)
    @pair.update(score: new_score, vote_count: new_count)
  else
    @pair = Pair.new(picture_one_id: @picture_one_id, picture_two_id: @picture_two_id, score: @score, vote_count: 1)
  end
  if @pair.save
    redirect '/'
  else
    #flash error message
  end

end

get '/top_picks' do
  @pair = Pair.all
  @top_five= @pair.order("score DESC").limit(5)
  erb :top_picks
end

get '/about' do
  erb :about
end

get '/upload_page' do
  @picture = Picture.new
  @current_url_1 = DEFAULT_IMAGE_URL
  # @current_url_2 = DEFAULT_IMAGE_URL

  erb :upload
end

post '/upload_page' do
  if params[:upload_local_file].nil?
    if params[:upload_url].nil?
      'BOTH FIELDS ARE EMPTY'
    else
      @upload_url = params[:upload_url]
      @current_url_1 = @upload_url
      @picture = Picture.new(url_link: @upload_url)
    end
  else
    @img_path = params[:upload_local_file][:tempfile].path
    @img = Imgur::LocalImage.new(@img_path)
    @img_url = imgurClient.upload(@img).link
    @current_url_1 = @img_url
    @picture = Picture.new(url_link: @img_url)
  end

  if @picture.save
    @success_message = "picture uploaded successfully!"
    erb :upload
  else
    @current_url_1 = DEFAULT_IMAGE_URL
    erb :upload
  end
end

get "/admin" do
  @all_pictures = Picture.all
  @all_pairs = Pair.all
  erb :admin
end


