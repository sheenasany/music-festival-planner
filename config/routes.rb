Rails.application.routes.draw do
  resources :planners
  resources :visits
  resources :festivals
  resources :markers
  
  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
  # route to test your configuration
   get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
