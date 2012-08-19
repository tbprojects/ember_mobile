class CatsController < ApplicationController

  require 'nokogiri'
  require 'open-uri'

  def index
    render :json => getCats
  end

  private
  def getCats
    params[:page] ||= 1
    url = "http://www.lolcats.com/"
    doc = Nokogiri::HTML(open("#{url}page-#{params[:page]}.html"))
    doc.css('div.picture').map do |node|
      {:label => node.css('h2').text, :url => url+node.css('img').attr('src').to_s}
    end
  end

end
