class UserMailer < ApplicationMailer
    def profile_update_notification(user)
      @user = user
      mail(to: 'company@example.com', subject: 'User Profile Update Notification')
    end
end
  