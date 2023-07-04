class Api::V1::RolesController < ApplicationController
  def index
    roles = Role.all
    render json: roles, status: 200
  end

  def find
    role = Role.find_by(id: params[:id])
    render json: role, status: 200
  end

  def find_by_users
    role = Role.find_by(users: params[:users])
    render json: role, status: 200
  end

  def create
    role = Role.new(role_params)
    if role.save
      render json: role, status: 200
    else
      render json: {error: "Role not created"}
    end
  end

  def update
    role = Role.find_by(id: params[:id])
    role.update(role_params)
    if role.save
      render json: role, status: 200
    else
      render json: {error: "Role not updated"}
    end
  end

  def delete
    role = Role.find_by(id: params[:id])
    role.destory
    render json: {message: "Role deleted"}, status: 200
  end
end
