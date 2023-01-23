Rails.application.routes.draw do
  
  resources :fundraisers
  resources :donations
  resources :causes

  # User Routes
  
  get "users", to:, "users#index"
  get "/me", to:, "users#show"
  post "/signup", to:, "users#create"
  post "/login", to:, "sessions#create"  


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
