class AddFirstNameAndLastNameAndCountryAndStateAndCurrentAddressAndPermanentAddressAndMobileNumberAndProfilePhotoAndFileToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :country, :string
    add_column :users, :state, :string
    add_column :users, :current_address, :text
    add_column :users, :permanent_address, :text
    add_column :users, :mobile_number, :integer
  end
end
