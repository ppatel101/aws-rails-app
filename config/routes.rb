Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  root 'pages#index'
  get 'pages/index'
  get '/about', to: 'pages#about', as: 'about_page'
  get '/contact_us', to: 'pages#contact_us', as: 'contact_us_page'
  get 'users/profile', to: 'users#profile', as: 'user_profile'
  resources :users
  resources :inquiries
  post 'create_inquiry', to: 'pages#create_inquiry'
end