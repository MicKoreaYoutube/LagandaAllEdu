Rails.application.routes.draw do
  get '/join', to: 'authentication#join'
  get '/login', to: 'authentication#login'
  get '/logout', to: 'authentication#logout'
  get '/', to: 'index#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
