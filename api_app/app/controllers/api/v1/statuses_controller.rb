class Api::V1::StatusesController < ApplicationController
  def index
    statuses = Status.all
    render json: statuses, status: 200
  end

  def find
    status = Status.find_by(id: params[:id])
    render json: status, status: 200
  end

  def create
    status = Status.new(status_params)
    if status.save
      render json: status, status: 200
    else
      render json: {error: "Status not created"}
    end
  end

  def update
    status = Status.find_by(id: params[:id])
    status.update(status_params)
    if status.save
      render json: status, status: 200
    else
      render json: {error: "Status not updated"}
    end
  end
  
  def delete
    status = Status.find_by(id: params[:id])
    status.destory
    render json: {message: "Status deleted"}, status: 200
  end
end
