Rails.application.routes.draw do
  resources :planners
  resources :visits
  resources :festivals, only: [:index, :show]
  resources :markers, only: [:index, :show]

  # routes for auth flow
  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  # custom routes for user's planners
  # get '/users/me(?)/planner', to: "users#????"

  #custom route for markers
 get '/addresses', to: "markers#show_address"
 get '/addresses/:id', to: "markers#show_individual_address"

 # custom route for festivals
 get '/fest_short_info', to: "festivals#fest_short_info"
 get '/fest_short_info/:id', to: "festivals#fest_one_short_info"

  # route to test your configuration
   get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
