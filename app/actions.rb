DEFAULT_IMAGE_URL = "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"


  def grab_random_pic
  pictures = Picture.order("Random()").limit(2)
   @picture_one = pictures[0]
   @picture_two = pictures[1]
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
  erb :index
end

get '/play' do
  erb :play
end

post '/submit' do
  @score = params[:points]
  @picture_one_id = params[:picture_one_id]
  @picture_two_id = params[:picture_two_id]
  @pair = Pair.new(picture_one_id: @picture_one_id, picture_two_id: @picture_two_id, score: @score, vote_count: 1)
  if @pair.save
    redirect '/'
  else
    #flash error message
  end

end

get '/top_picks' do
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
  @upload_url_1 = params[:upload_url_1]
  # @upload_url_2 = params[:upload_url_2]
  @current_url_1 = @upload_url_1
  # @current_url_2 = @upload_url_2
  @picture = Picture.new(url_link: @upload_url_1)

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


