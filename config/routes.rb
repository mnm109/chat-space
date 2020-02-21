Rails.application.routes.draw do
  devise_for :users
  root "messages#index"
  root to: "home#index"
end
