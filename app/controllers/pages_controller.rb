class PagesController < ApplicationController
  def index
    respond_to do |format|
      format.html
    end
  end

  def about
    respond_to do |format|
      format.html
    end
  end

  def contact_us
    @inquiry = Inquiry.new
    respond_to do |format|
      format.html
    end
  end

  def create_inquiry
    @inquiry = Inquiry.new(inquiry_params)
    respond_to do |format|
      if @inquiry.save
        format.html { redirect_to root_path, notice: 'Inquiry was successfully created.' }
      else
        format.html { render :contact_us }
      end
    end
  end

  private

  def inquiry_params
    params.require(:inquiry).permit(:name, :email, :phone_number , :website , :message)
  end
end
