EmberMobile::Application.routes.draw do
  root :to => 'home#index'
  resources :cats, :only => :index
end
