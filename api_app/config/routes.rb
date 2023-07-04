Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
     resources :users, only: [:index, :find, :find_by_email, :create, :update, :delete]
     resources :issues, only: [:index, :find, :find_by_project, :find_by_team, :find_by_user, :find_by_issue_type, :create, :update, :delete]
     resources :issue_types, only: [:index, :find, :create, :update, :delete]
     resources :projects, only: [:index, :find, :find_by_team, :find_by_user, :create, :update, :delete]
     resources :comments, only: [:index, :find, :find_by_issue, :find_by_project, :find_by_user, :find_by_team, :create, :update, :delete]
     resources :teams, only: [:index, :find, :create, :update, :delete]
     resources :access_rights, only: [:index, :find, :create, :update, :delete]
     resources :roles, only: [:index, :find, :create, :update, :delete]
     resources :statuses, only: [:index, :find, :create, :update, :delete]
     resources :labels, only: [:index, :find, :create, :update, :delete]
    end
  end
end