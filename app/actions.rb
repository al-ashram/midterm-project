get '/' do 
  @random_index = rand(30)
  @face = HTTParty.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyAcwfwtxSfmJpGHn17ZgWD9cPfmh57q51w&cx=008706594706571137855:earcvruiqoc&safe=medium&q=face&searchType=image&start=#{@random_index}")
  erb :index
end
