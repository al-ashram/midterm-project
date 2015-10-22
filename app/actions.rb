get '/' do 
  @face = HTTParty.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAcwfwtxSfmJpGHn17ZgWD9cPfmh57q51w&cx=008706594706571137855:earcvruiqoc&q=face&searchType=image')
  erb :index
end
