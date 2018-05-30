Rails.application.routes.draw do
  resources :posts do
    resources :comments, shallow: true, only: [:create, :destroy]
  end

  resources :users, only: [:new, :create]

  resource :sessions, only: [:new, :destroy, :create]

  root to: "posts#index"
end
