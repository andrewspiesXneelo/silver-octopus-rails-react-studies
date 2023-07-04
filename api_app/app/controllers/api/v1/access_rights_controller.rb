class Api::V1::AccessRightsController < ApplicationController

  def index
    access_rights = AccessRight.all
    render json: access_rights, status: 200
  end

  def find
    access_right = AccessRight.find_by(id: params[:id])
    render json: access_right, status: 200
  end

  def create
    access_right = AccessRight.new(access_right_params)
    if access_right.save
      render json: access_right, status: 200
    else
      render json: {error: "AccessRight not created"}
    end
  end

  def delete
    access_right = AccessRight.find_by(id: params[:id])
    access_right.destory
    render json: {message: "AccessRight deleted"}, status: 200
  end
end
