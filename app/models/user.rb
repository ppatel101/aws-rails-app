class User < ApplicationRecord
  rolify
  has_one_attached :profile_photo
  has_one_attached :file
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
 
end