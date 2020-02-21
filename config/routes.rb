Rails.application.routes.draw do
  root "messages#index"
  root to: "home#index"
end
