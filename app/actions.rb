DEFAULT_IMAGE_URL = "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"

# Homepage (Root path)
get '/' do
  erb :index
end

get '/play' do
  erb :play
end

post '/submit' do
  @score = params[:points]
  erb :index
end

get '/top_picks' do
  erb :top_picks
end

get '/about' do
  erb :about
end

get '/upload_page' do
  @current_url_1 = DEFAULT_IMAGE_URL
  @current_url_2 = DEFAULT_IMAGE_URL

  erb :upload
end

post '/upload_page' do
  @upload_url_1 = params[:upload_url_1]
  @upload_url_2 = params[:upload_url_2]
  @current_url_1 = @upload_url_1
  @current_url_2 = @upload_url_2
  erb :upload
end


