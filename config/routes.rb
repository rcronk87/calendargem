Rails.application.routes.draw do

  #generates /concerts/get_events route
  resources :sightings do
    get :get_events, on: :collection
  end

  get 'calendar/display'
  # get 'sightings/get_events'

  resources :sightings
  resources :animals
  root 'animals#landing_page'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
