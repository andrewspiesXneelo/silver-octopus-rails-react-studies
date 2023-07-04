class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users, status: 200
  end

  def find
    user = User.find_by(id: params[:id])
    render json: user, status: 200
  end

  def find_by_email
    user = User.find_by(email: params[:email])
    render json: user, status: 200
  end
    
  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 200
    else
      render json: {error: "User not created"}
    end
  end

  def update
    user = User.find_by(id: params[:id])
    user.update(user_params)
    if user.save
      render json: user, status: 200
    else
      render json: {error: "User not updated"}
    end
  end

  def delete
    user = User.find_by(id: params[:id])
    user.destory
    render json: {message: "User deleted"}, status: 200
  end
end